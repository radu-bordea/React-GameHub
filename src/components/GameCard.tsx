import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game; // Props interface defining the expected Game object
}

// Component to render a card displaying game details
const GameCard = ({ game }: Props) => {
  return (
    <Card width='300px' borderRadius={10} overflow="hidden">
      {" "}
      {/* Styled card container */}
      {/* Game image with cropping applied */}
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        {/* Game title */}
        <Heading fontSize="2xl">{game.name}</Heading>

        {/* Container for platform icons and critic score */}
        <HStack justifyContent="space-between">
          {/* Render icons for each platform */}
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {/* Display critic score */}
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
