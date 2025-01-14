import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void; // Callback function to handle genre selection
  selectedGenre: Genre | null; // Currently selected genre, or null if none is selected
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres(); // Custom hook to fetch genres

  if (error) return null; // Return nothing if there is an error

  if (isLoading) return <Spinner />; // Show a spinner while data is loading

  return (
    <>
      {/* Heading for the genre list */}
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {/* Render each genre as a list item */}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              {/* Genre image with a cropped URL */}
              <Image
                boxSize="32px" // Set the size of the image
                borderRadius={8} // Add rounded corners to the image
                objectFit="cover" // Ensure the image covers the box dimensions
                src={getCroppedImageUrl(genre.image_background)} // Cropped background image for the genre
              />
              {/* Button to select the genre */}
              <Button
                whiteSpace="normal" // Allow text to wrap within the button
                textAlign="left" // Align text to the left
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} // Highlight the selected genre
                onClick={() => onSelectGenre(genre)} // Trigger callback with the selected genre
                fontSize="md" // Medium font size for the button
                variant="link" // Use a link-style button
              >
                {genre.name} {/* Display the genre name */}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
