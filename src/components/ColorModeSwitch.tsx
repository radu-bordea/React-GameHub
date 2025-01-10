import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

// Component to toggle between light and dark color modes
const ColorModeSwitch = () => {
  // Access the Chakra UI color mode context
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {/* Switch to toggle between light and dark modes */}
      <Switch
        colorScheme="green" // Use a green color scheme for the switch
        isChecked={colorMode === "dark"} // Bind the switch state to the current color mode
        onChange={toggleColorMode} // Toggle color mode on switch change
      />
      {/* Label indicating "Dark Mode" */}
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
