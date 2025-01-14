import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game; // The game object containing all the necessary game data to be displayed
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      {/* Display the cropped background image for the game */}
      <Image src={getCroppedImageUrl(game.background_image)} />

      <CardBody>
        {/* Display platform icons and critic score */}
        <HStack justifyContent="space-between" marginBottom={3}>
          {/* Show platform icons based on the platforms the game supports */}
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />

          {/* Show the critic score for the game */}
          <CriticScore score={game.metacritic} />
        </HStack>

        {/* Show the game name along with an emoji based on the game's rating */}
        <Heading fontSize="2xl">
          {game.name} {/* Display the name of the game */}
          <Emoji rating={game.rating_top} />{" "}
          {/* Display an emoji based on the game's rating */}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
