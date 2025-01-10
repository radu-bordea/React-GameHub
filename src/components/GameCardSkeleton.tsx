import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

// Component to render a skeleton placeholder for a game card while data is loading
const GameCardSkeleton = () => {
  return (
    <Card
      width="300px" // Set the card width
      borderRadius={10} // Add rounded corners to the card
      overflow="hidden" // Ensure content doesn't overflow the card's boundaries
    >
      {/* Skeleton for the game's image */}
      <Skeleton height="200px" />

      <CardBody>
        {/* Skeleton text to simulate loading game details */}
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
