import useData from "./useData";
import { Genre } from "./useGenres";

// Define the structure of the Platform object.
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Define the structure of the Game object, which includes the Platform structure.
export interface Game {
  background_image: string;
  id: number;
  name: string;
  parent_platforms: {
    platform: Platform;
  }[];
  metacritic: number;
}

// Custom hook that fetches a list of games based on filter using the generic `useData` hook.
const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id },
      platforms: selectedPlatform?.id,
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
