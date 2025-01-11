import useGenres from "../hooks/useGenres";

const GenreList = () => {
  // Use the custom hook `useGenres` to fetch genre data.
  const { data } = useGenres();

  return (
    <div>
      {/* Map through the fetched genres and render each one as a list item. */}
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </div>
  );
};

export default GenreList;
