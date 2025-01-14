import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null
}

// PlatformSelector component definition
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  // Using the custom hook to fetch platform data and handle errors
  const { data, error } = usePlatforms();

  // If there is an error, return nothing (null)
  if (error) return null;

  return (
    <Menu>
      {" "}
      {/* Menu component to display dropdown */}
      {/* Button that triggers the dropdown with an icon */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {" "}
        {/* List of items in the dropdown */}
        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

// Exporting the component to be used in other parts of the application
export default PlatformSelector;
