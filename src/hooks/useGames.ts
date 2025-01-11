import useData from "./useData";

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

// Custom hook that fetches a list of games using the generic `useData` hook.
const useGames = () => useData<Game>("/games");

export default useGames;
