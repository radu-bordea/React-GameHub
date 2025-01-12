import useData from "./useData";

// Interface representing a genre with an id, a name and a imageUrl.
export interface Genre {
  id: number;
  name: String;
  image_background: string
}

// Custom hook to fetch and manage genres data.
const useGenres = () => useData<Genre>('/genres')

export default useGenres;
