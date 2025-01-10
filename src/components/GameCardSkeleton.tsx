import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

// Component to render a skeleton placeholder for a game card while data is loading
const GameCardSkeleton = () => {
  return (
    <Card>
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
