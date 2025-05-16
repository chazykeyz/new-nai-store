export const domain = "https://lokoleapps.online";
export const mainhost = `${domain}/api/v1`;

// authentication endpoints
export const SEND_OTP = `${mainhost}/auth/request-otp/`;
export const VERIFY_OTP = `${mainhost}/auth/verify-otp-register/`;
export const DELETE_USER = `${mainhost}/auth/delete-account/`;
export const REFRESH_TOKEN = `${mainhost}/auth/token/refresh/`;
// users
export const ALL_USERS = `${mainhost}/auth/users`;
export const FETCH_ME = `${mainhost}/auth/user/me/`;
export const UPDATE_USER = `${mainhost}/auth/users/update-user`;

export const ALL_POSTS = `${mainhost}/contents/posts/`;
export const TRENDING_POSTS = `${mainhost}/contents/posts/trending/`;
export const STREAM_VIDEO = `${mainhost}/contents/stream-video/`;
export const SEARCH_POSTS = `${mainhost}/contents/posts/search/?search=`;
export const BOOKMARKED_POSTS = `${mainhost}/contents/posts/bookmarked/`;
export const LIKED_POSTS = `${mainhost}/contents/posts/liked/`;

// subscription
export const GET_SUBSCRIPTION = `${mainhost}/subscriptions/my-subscription/`;
export const PAY_SUBSCRIPTION = `${mainhost}/subscriptions/payments/success/`;
