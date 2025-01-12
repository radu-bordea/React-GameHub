import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

// Interface for API response structure.
interface FetchResponse<T> {
  count: number; // Total items count.
  results: T[]; // Items array.
}

// Custom hook for fetching data.
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]); // Stores fetched data.
  const [error, setError] = useState(""); // Stores error messages.
  const [isLoading, setLoading] = useState(false); // Tracks loading status.

  useEffect(
    () => {
      const controller = new AbortController(); // Handles request cancellation.

      setLoading(true); // Start loading.

      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results); // Save fetched data.
          setLoading(false); // Stop loading.
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; // Skip canceled errors.
          setError(err.message); // Save error message.
          setLoading(false); // Stop loading.
        });

      return () => controller.abort(); // Cleanup on unmount or effect re-run.
    },
    deps ? [...deps] : []
  ); // Re-run when dependencies change.

  return { data, error, isLoading }; // Return hook state.
};

export default useData;
