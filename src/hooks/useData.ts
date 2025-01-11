import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

// Generic interface representing the structure of the API response.
interface FetchResponse<T> {
  count: number; // Total count of items in the response.
  results: T[]; // Array of items of type T.
}

// Custom hook to fetch data from a specified API endpoint.
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]); // State to store the fetched data.
  const [error, setError] = useState(""); // State to store any error messages.
  const [isLoading, setLoading] = useState(false); // State to track loading status.

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController to handle request cancellation.

    setLoading(true); // Set loading state to true before making the API call.

    // Fetch data from the specified endpoint.
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal }) // Pass the abort signal to the request.
      .then((res) => {
        setData(res.data.results); // Update state with the fetched data.
        setLoading(false); // Set loading state to false after the request completes.
      })
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore errors caused by request cancellation.
        setError(err.message); // Update error state with the error message.
        setLoading(false); // Set loading state to false after the request fails.
      });

    // Cleanup function to abort the request when the component unmounts or the effect re-runs.
    return () => controller.abort();
  }, [endpoint]); // Dependency array ensures the effect re-runs when the endpoint changes.

  // Return the fetched data, error state, and loading state.
  return { data, error, isLoading };
};

export default useData;
