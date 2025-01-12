import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  // Use the custom hook `useGenres` to fetch genre data.
  const { data, isLoading, error } = useGenres();

  // Show spinner before fetching data
  if (isLoading) return <Spinner />;

  // return null if error
  if (error) return null;

  return (
    <List>
      {/* Map through the fetched genres and render each one as a list item. */}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
