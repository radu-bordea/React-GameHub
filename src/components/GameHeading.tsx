import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery; // Object containing the selected platform and genre information
}

const GameHeading = ({ gameQuery }: Props) => {
  // Construct the heading text using the selected platform and genre names
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    // Display the heading with styles applied
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading} {/* Render the constructed heading text */}
    </Heading>
  );
};

export default GameHeading;
