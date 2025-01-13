import useData from "./useData";

// Defining the Platform interface to structure the platform data
interface Platform {
  id: number; // Unique identifier for the platform
  name: string; // Name of the platform
  slug: string; // Slug (URL-friendly identifier) for the platform
}

// Custom hook to fetch platform data, using the useData hook
const usePlatforms = () => useData<Platform>("/platforms/lists/parents"); // Fetches platform data from the specified endpoint

// Exporting the usePlatforms hook to be used in other components
export default usePlatforms;
