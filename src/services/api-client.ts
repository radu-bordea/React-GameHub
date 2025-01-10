import axios from "axios";

// Create a pre-configured Axios instance for making API requests
export default axios.create({
  // Base URL for the RAWG API
  baseURL: "https://api.rawg.io/api",

  // Default parameters to include with every request
  params: {
    // API key is retrieved from environment variables for security
    key: import.meta.env.VITE_API_KEY, // Ensure the environment variable is correctly set up
  },
});
