import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

// Represents a gaming platform (e.g., PC, PlayStation).
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Represents a game and its details.
export interface Game {
  background_image: string; // Game's background image.
  id: number; // Game ID.
  name: string; // Game name.
  parent_platforms: {
    platform: Platform; // Platforms the game supports.
  }[];
  metacritic: number; // Game's Metacritic score.
}

// Fetches games filtered by genre and platform.
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games", // API endpoint.
    {
      params: {
        genres: gameQuery.genre?.id, // Filter by genre.
        platforms: gameQuery.platform?.id, // Filter by platform.
      },
    },
    [gameQuery] // Refetch when `gameQuery` changes.
  );

export default useGames;
