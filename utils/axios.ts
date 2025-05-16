import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import {
  getAccessToken,
  getRefreshToken,
  saveTokens,
  clearTokens,
} from "./tokenStorage";
import { mainhost, REFRESH_TOKEN } from "@/constants/endpoints";
import { router } from "expo-router";

// Extended request config with custom properties
interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
  retryCount?: number;
  disableRetry?: boolean;
}

// Queue item interface
interface QueueItem {
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
}

// Create axios instance with base URL
const myAxios: AxiosInstance = axios.create({
  baseURL: mainhost,
  timeout: 10000, // Adding a timeout for better error handling
});

// Token refresh state management
let isRefreshing: boolean = false;
let failedQueue: QueueItem[] = [];

// Process queue of failed requests
const processQueue = (
  error: Error | null,
  token: string | null = null
): void => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });

  // Clear the queue after processing
  failedQueue = [];
};

// Request interceptor to add token to all requests
myAxios.interceptors.request.use(
  async (
    config: ExtendedAxiosRequestConfig
  ): Promise<ExtendedAxiosRequestConfig> => {
    try {
      const token = await getAccessToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // Initialize retry count if not present
      config.retryCount = config.retryCount || 0;

      return config;
    } catch (error) {
      console.error("Error in request interceptor:", error);
      return Promise.reject(error);
    }
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
myAxios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<any> => {
    const originalRequest = error.config as ExtendedAxiosRequestConfig;

    // Don't retry for these specific errors
    if (!error.response || originalRequest.disableRetry) {
      return Promise.reject(error);
    }

    // Handle authentication errors (401)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // If already refreshing token, queue this request
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (token && typeof token === "string") {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return myAxios(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      // Start token refresh process
      isRefreshing = true;

      try {
        const refreshToken = await getRefreshToken();

        // Handle case where no refresh token exists
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        // Request new tokens
        const response = await axios.post(REFRESH_TOKEN, {
          refresh: refreshToken,
        });

        console.log("axio tokens", response.data.data);
        // Get new tokens from response
        const { access: accessToken, refresh: newRefreshToken } =
          response.data.data;

        if (!accessToken || !newRefreshToken) {
          throw new Error("Invalid token response format");
        }

        // Save new tokens
        await saveTokens(accessToken, newRefreshToken);

        // Update auth headers
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        // Process queue with new token
        processQueue(null, accessToken);

        // Retry the original request
        return myAxios(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);

        // Process queue with error
        processQueue(refreshError as Error, null);

        // Clear tokens and redirect to login
        await clearTokens();
        router.replace("/(auth)/login");

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Simple retry mechanism for non-401 errors
    if (
      originalRequest.retryCount !== undefined &&
      originalRequest.retryCount < 2 &&
      error.response?.status &&
      error.response.status >= 500
    ) {
      originalRequest.retryCount += 1;

      // Add exponential backoff
      const delay = Math.pow(2, originalRequest.retryCount) * 1000;

      return new Promise((resolve) => {
        setTimeout(() => resolve(myAxios(originalRequest)), delay);
      });
    }

    return Promise.reject(error);
  }
);

export default myAxios;
