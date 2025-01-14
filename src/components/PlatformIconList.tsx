import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[]; // Array of platforms to display icons for
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  // Map platform slugs to corresponding icons
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows, // Icon for Windows
    playstation: FaPlaystation, // Icon for PlayStation
    xbox: FaXbox, // Icon for Xbox
    nintendo: SiNintendo, // Icon for Nintendo
    mac: FaApple, // Icon for macOS
    linux: FaLinux, // Icon for Linux
    android: FaAndroid, // Icon for Android
    ios: MdPhoneIphone, // Icon for iOS
    web: BsGlobe, // Icon for Web
  };

  return (
    <HStack marginY={1}>
      {/* Render an icon for each platform in the platforms array */}
      {platforms.map((platform) => (
        <Icon
          key={platform.id} // Unique key for each platform
          as={iconMap[platform.slug]} // Map platform slug to its icon
          color="gray.500" // Set the icon color to gray
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
