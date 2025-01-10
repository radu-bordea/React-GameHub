import { Badge } from "@chakra-ui/react";

interface Props {
  score: number; // Props interface defining the expected critic score
}

// Component to display a critic score with color-coded styling
const CriticScore = ({ score }: Props) => {
  // Determine the badge color based on the score value
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <div>
      {/* Render a Badge with the score and dynamic color */}
      <Badge
        colorScheme={color} // Apply color scheme dynamically
        fontSize="14px" // Set font size for the badge
        paddingX={2} // Add horizontal padding for better appearance
        borderRadius="4px" // Slightly round the edges of the badge
      >
        {score} {/* Display the critic score */}
      </Badge>
    </div>
  );
};

export default CriticScore;
