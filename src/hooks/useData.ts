import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number; // Total number of items in the response
  results: T[]; // Array of results of type T
}


// Custom hook to fetch data from an API
const useData = <T>(
  endpoint: string, // API endpoint to fetch data from
  requestConfig?: AxiosRequestConfig, // Optional Axios request configuration
  deps?: any[] // Optional dependency array for re-fetching data
) => {
  const [data, setData] = useState<T[]>([]); // State to store the fetched data
  const [error, setError] = useState(""); // State to store any error messages
  const [isLoading, setLoading] = useState(false); // State to indicate loading status

  useEffect(
    () => {
      const controller = new AbortController(); // Controller to handle request cancellation

      setLoading(true); // Set loading to true before making the request
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        }) // Make the API call
        .then((res) => {
          setData(res.data.results); // Update the data state with results
          setLoading(false); // Set loading to false after data is fetched
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; // Ignore cancellation errors
          setError(err.message); // Set error message if there's an error
          setLoading(false); // Set loading to false even on error
        });

      return () => controller.abort(); // Cleanup: abort the request on component unmount
    },
    deps ? [...deps] : []
  ); // Add dependencies to trigger effect re-run if provided

  return { data, error, isLoading }; // Return the data, error, and loading state
};

export default useData;
