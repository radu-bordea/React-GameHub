import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number; // Unique identifier for the platform
  name: string; // Name of the platform
  slug: string; // URL-friendly identifier for the platform
}

export interface Game {
  id: number; // Unique identifier for the game
  name: string; // Name of the game
  background_image: string; // URL of the game's background image
  parent_platforms: { platform: Platform }[]; // List of platforms the game is available on
  metacritic: number; // Metacritic score of the game
  rating_top: number; // Top rating received by the game
}

// Custom hook to fetch a list of games based on the provided query
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games", // API endpoint to fetch games
    {
      params: {
        genres: gameQuery.genre?.id, // Genre filter
        platforms: gameQuery.platform?.id, // Platform filter
        ordering: gameQuery.sortOrder, // Sort order for the games
        search: gameQuery.searchText, // Search text for the games
      },
    },
    [gameQuery] // Dependencies for re-fetching data
  );

export default useGames;
