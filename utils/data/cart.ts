import { CartItem } from "@/constants/types";

export const cartData: CartItem[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 30000,
    discount: 26000,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618366712010-f33e662e78f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571172964276-91faaa25c3b7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598662779094-110c2b40e9a6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
    category: "Electronics",
    quantity: 1, // One pair of headphones
    selectedSize: undefined, // No size for electronics
    addedAt: "2025-03-19T10:00:00Z", // Added today at 10:00 UTC
  },
  {
    id: "2",
    name: "Cotton T-Shirt",
    price: 150000,
    discount: 130000,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562157873-8182c0e05f26?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f998b7e6?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594032190588-14d76399ebfc?q=80&w=2080&auto=format&fit=crop",
    ],
    description:
      "Soft, breathable cotton T-shirt available in multiple colors.",
    category: "Clothing",
    quantity: 2, // Two T-shirts
    selectedSize: "Medium", // Selected size
    addedAt: "2025-03-19T09:30:00Z", // Added today at 09:30 UTC
  },
  {
    id: "5",
    name: "Leather Sneakers",
    price: 34000,
    discount: 25000,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2124&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594032190588-14d76399ebfc?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601333145499-9fdef4f67b59?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578935473454-6519db9f0a4f?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Stylish leather sneakers with cushioned soles for all-day comfort.",
    category: "Clothing",
    quantity: 1, // One pair of sneakers
    selectedSize: "9", // Shoe size
    addedAt: "2025-03-18T15:45:00Z", // Added yesterday at 15:45 UTC
  },
  {
    id: "9",
    name: "Bluetooth Speaker",
    price: 35000,
    discount: 30000,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618366712010-f33e662e78f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571172964276-91faaa25c3b7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598662779094-110c2b40e9a6?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Portable Bluetooth speaker with deep bass and waterproof design.",
    category: "Electronics",
    quantity: 1, // One speaker
    selectedSize: undefined, // No size for electronics
    addedAt: "2025-03-19T11:15:00Z", // Added today at 11:15 UTC
  },
  {
    id: "11",
    name: "Yoga Mat",
    price: 25000,
    discount: 22000,
    images: [
      "https://images.unsplash.com/photo-1601925267898-12e64b62bd16?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591115769230-9f0915b8eacd?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585421514738-017d31b073e5?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "Non-slip yoga mat with extra cushioning for workouts.",
    category: "Sports",
    quantity: 1, // One yoga mat
    selectedSize: undefined, // No size needed
    addedAt: "2025-03-19T08:00:00Z", // Added today at 08:00 UTC
  },
  {
    id: "14",
    name: "Leather Wallet",
    price: 15000,
    discount: 12000,
    images: [
      "https://images.unsplash.com/photo-1618449840665-8eddc75a4c54?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576874208548-9f425c77d180?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601333145499-9fdef4f67b59?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578935473454-6519db9f0a4f?q=80&w=2070&auto=format&fit=crop",
    ],
    description: "Slim leather wallet with RFID protection.",
    category: "Accessories",
    quantity: 1, // One wallet
    selectedSize: undefined, // No size needed
    addedAt: "2025-03-19T12:00:00Z", // Added today at 12:00 UTC
  },
];
