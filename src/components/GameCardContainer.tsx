import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // The content (React components) to be wrapped inside the container
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {" "}
      {/* Apply border radius and hide overflowing content */}
      {children}{" "}
      {/* Render the child elements (usually game cards) inside this container */}
    </Box>
  );
};

export default GameCardContainer;

