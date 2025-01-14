import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void; // Callback function to handle the search input
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null); // Ref to access the input element's value

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (ref.current) onSearch(ref.current.value); // Trigger the onSearch callback with the input value
      }}
    >
      <InputGroup>
        {/* Left element of the input, displaying a search icon */}
        <InputLeftElement children={<BsSearch />} />
        {/* Input field with a ref for retrieving the value */}
        <Input
          ref={ref}
          borderRadius={20} // Rounded corners for the input
          placeholder="Search games..." // Placeholder text for the input
          variant="filled" // Chakra UI input variant
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

