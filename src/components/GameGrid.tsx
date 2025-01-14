import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery); // Fetch games.

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]; // Loading placeholders.

  return (
    <>
      {error && <Text>{error}</Text>} {/* Show error if loading fails. */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} // Responsive grid.
        padding={10}
        spacing={3}
      >
        {isLoading && // Show skeletons while data is loading.
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
