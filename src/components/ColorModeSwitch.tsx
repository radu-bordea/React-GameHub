import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"; // Import Chakra UI components

const ColorModeSwitch = () => {
  // Destructure `toggleColorMode` and `colorMode` from Chakra's `useColorMode` hook
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {/* Switch component to toggle color mode */}
      <Switch
        colorScheme="green" // Green color for the switch
        isChecked={colorMode === "dark"} // If current color mode is 'dark', the switch is checked
        onChange={toggleColorMode} // Toggle color mode when the switch is clicked
      />

      {/* Text label to display "Dark Mode" */}
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
