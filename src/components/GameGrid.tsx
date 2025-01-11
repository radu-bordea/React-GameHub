import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";

// Component to render a grid layout of game cards
const GameGrid = () => {
  // Fetch games and handle any potential errors
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {/* Display error message if an error occurs */}
      {error && <Text>{error}</Text>}

      {/* Grid layout to display game cards */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} // Responsive grid column configuration
        padding={10} // Padding around the grid
        spacing={10} // Space between grid items
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {/* Map over the games array to render a GameCard for each game */}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer> // Use game ID as the key
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
