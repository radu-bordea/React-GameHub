import { Badge } from "@chakra-ui/react"; // Chakra UI Badge component for displaying scores

interface Props {
  score: number; // The critic score to be displayed
}

const CriticScore = ({ score }: Props) => {
  // Determine the color scheme based on the score value
  let color = score > 75 ? "green" : score > 60 ? "yellow" : ""; // Green for scores above 75, yellow for scores above 60

  return (
    // Display the score inside a Badge with the appropriate color scheme
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score} {/* Display the critic score */}
    </Badge>
  );
};

export default CriticScore;
