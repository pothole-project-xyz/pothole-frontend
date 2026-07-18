const LOCAL_MODE = false; // Live mode active!

// Core business logic backend ka URL
export const BASE_URL = LOCAL_MODE 
  ? "http://127.0.0.1:5000" 
  : "https://pothole-backend-70c2.onrender.com";

// AI/ML prediction backend ka URL
export const AI_BASE_URL = LOCAL_MODE 
  ? "http://127.0.0.1:5000" 
  : "https://pothole-backend-ai-2.onrender.com";