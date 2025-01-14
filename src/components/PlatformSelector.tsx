import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void; // Callback function to handle platform selection
  selectedPlatform: Platform | null; // Currently selected platform or null if none is selected
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms(); // Fetch platform data using a custom hook

  if (error) return null; // Return nothing if there is an error fetching platforms

  return (
    <Menu>
      {/* Button to open the menu, displaying the selected platform name or a default label */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {/* List of platforms rendered as menu items */}
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)} // Trigger callback with the selected platform
            key={platform.id} // Unique key for each platform
          >
            {platform.name} {/* Display the platform name */}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
