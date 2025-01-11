import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

// Interface representing a genre with an id and a name.
interface Genre {
  id: number;
  name: String;
}

// Interface representing the structure of the response from the API.
interface FetchGenresResponse {
  count: number; // Total count of genres.
  results: Genre[]; // Array of genres.
}

// Custom hook to fetch and manage genres data.
const useGenre = () => {
  // State to store the list of genres.
  const [genres, setGenres] = useState<Genre[]>([]);

  // State to store any error messages.
  const [error, setError] = useState("");

  // State to track the loading status of the request.
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // Create an AbortController to handle request cancellation.
    const controller = new AbortController();

    // Set loading state to true before making the API call.
    setLoading(true);

    // Fetch genres from the API.
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal }) // Pass the abort signal to the request.
      .then((res) => {
        setGenres(res.data.results); // Update genres state with the fetched data.
        setLoading(false); // Set loading state to false after the request completes.
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore errors caused by request cancellation.
        setError(err.message); // Update error state with the error message.
        setLoading(false); // Set loading state to false after the request fails.
      });

    // Cleanup function to abort the request when the component unmounts or effect re-runs.
    return () => controller.abort();
  }, []); // Empty dependency array ensures the effect runs only once.

  // Return the fetched genres, error state, and loading state.
  return { genres, error, isLoading };
};

export default useGenre;
