import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[]; // Array of platforms passed as props
}

// Component to render a list of platform icons
const PlatformIconList = ({ platforms }: Props) => {
  // Map platform slugs to corresponding icons
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    // Horizontal stack for aligning platform icons
    <HStack marginY={1}>
      {/* Map over the platforms array and render an icon for each platform */}
      {platforms.map((platform) => (
        <Icon
          key={platform.id} // Use platform ID as a unique key for each icon
          as={iconMap[platform.slug]} // Dynamically assign the icon based on the platform slug
          color="gray.500" // Set icon color to gray for a consistent look
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
