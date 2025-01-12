import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

// Component to render a grid layout of game cards
const GameGrid = () => {
  // Fetch game data, handle loading state, and potential errors
  const { data, error, isLoading } = useGames();

  // Placeholder skeletons for loading state
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {/* Display an error message if an error occurs */}
      {error && <Text>{error}</Text>}

      {/* Grid layout to display game cards */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} // Define responsive grid columns
        padding={10} // Add padding around the grid
        spacing={3} // Add spacing between grid items
      >
        {/* Render skeleton placeholders while data is loading */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {/* Map through the data array to render game cards */}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
