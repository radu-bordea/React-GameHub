// Importing images for different rating emojis
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react"; // Chakra UI Image component

interface Props {
  rating: number; // The rating value passed in as a prop to determine which emoji to show
}

const Emoji = ({ rating }: Props) => {
  // If rating is less than 3, no emoji is displayed
  if (rating < 3) return null;

  // Map to associate rating values with corresponding emoji images
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" }, // Display "meh" emoji for rating 3
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" }, // Display thumbs-up for rating 4
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" }, // Display bulls-eye for rating 5
  };

  // Return the appropriate emoji based on the rating, passing the associated properties
  return (
    <Image {...emojiMap[rating]} marginTop={1} /> // Display the emoji with a top margin
  );
};

export default Emoji;
