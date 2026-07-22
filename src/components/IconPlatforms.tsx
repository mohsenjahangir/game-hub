import { HStack, Icon } from "@chakra-ui/react"
import type{ Platform } from "../hooks/useGame"
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { BsNintendoSwitch } from "react-icons/bs";
import { BsGlobe } from 'react-icons/bs'
import type{ IconType } from "react-icons"

const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    apple: FaApple,
    nintendo: BsNintendoSwitch,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
}

interface Props {
    platforms: Platform[]
}

const IconPlatforms = ({ platforms }: Props) => {
    return (
        <HStack marginY={2}>
            {platforms.map((p) => {
                const IconComponent = iconMap[p.slug.toLowerCase()];
                if (!IconComponent) return null;
                return (
                    <Icon
                        key={p.id}
                        as={IconComponent}
                        color="gray.500"
                        boxSize={5}
                    />
                );
            })}
        </HStack>
    )
}

export default IconPlatforms
