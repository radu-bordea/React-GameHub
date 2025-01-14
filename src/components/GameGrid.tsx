import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import {Platform} from '../hooks/useGames'

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform); // Fetch games data.

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]; // Placeholder skeletons.

  return (
    <>
      {error && <Text>{error}</Text>}{" "}
      {/* Show error message if there's an error. */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} // Responsive grid layout.
        padding={10}
        spacing={3}
      >
        {isLoading && // Show skeletons while loading.
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map(
          (
            game // Render game cards.
          ) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
