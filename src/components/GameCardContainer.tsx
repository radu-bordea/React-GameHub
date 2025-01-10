import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // Accepts any valid React child elements
}

// Component to provide a container with consistent styling for game cards
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="300px" // Set the container width to 300px
      borderRadius={10} // Apply rounded corners to the container
      overflow="hidden" // Ensure that child elements don't overflow the container
    >
      {children} {/* Render the child components passed to this container */}
    </Box>
  );
};

export default GameCardContainer;
