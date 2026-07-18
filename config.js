//true matlab local backend chalega, false matlab render wala live backend chalega
const LOCAL_MODE = true; 

const BASE_URL = LOCAL_MODE 
    ? "http://127.0.0.1:5000" 
    : "https://pothole-backend-ai-2.onrender.com";

export default BASE_URL;