import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery; // Object containing the query parameters like platform, genre, etc.
}

const GameGrid = ({ gameQuery }: Props) => {
  // Fetch game data based on the gameQuery using the useGames hook
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6]; // Array to represent skeleton loading states while fetching data

  // If an error occurs during data fetch, display the error message
  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} // Defines grid columns based on screen size (responsive)
      padding="10px" // Padding around the grid container
      spacing={6} // Space between grid items
    >
      {/* If data is still loading, display skeleton loaders */}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton /> {/* Display a skeleton loader for each game */}
          </GameCardContainer>
        ))}
      {/* Once the data is loaded, render actual game cards */}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />{" "}
          {/* Display each game in a GameCard component */}
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
