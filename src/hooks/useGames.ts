import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

// Define the structure of the Platform object
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Define the structure of the Game object, which includes the Platform structure
export interface Game {
  background_image: string;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// Define the structure of the API response when fetching games
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

// Custom hook to fetch and manage games data
const useGames = () => {
  // State to store the list of games
  const [games, setGames] = useState<Game[]>([]);
  // State to store error messages
  const [error, setError] = useState("");
  // State to track loading status
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Create an AbortController to manage and cancel fetch requests if needed
    const controller = new AbortController();

    setLoading(true); // Start loading when the request is initiated

    // Fetch games data from the API
    apiClient
      .get("/games", { signal: controller.signal }) // Pass the abort signal to the request
      .then((res) => {
        setGames(res.data.results); // Update the games state with fetched data
        setLoading(false); // Set loading to false after data is fetched successfully
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore errors caused by request cancellation
        setError(err.message); // Set error message for other types of errors
        setLoading(false); // Set loading to false in case of an error
      });

    // Cleanup function to cancel the request if the component unmounts
    return () => controller.abort();
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  // Return the games, error, and loading states to be used by consuming components
  return { games, error, isLoading };
};

export default useGames;
