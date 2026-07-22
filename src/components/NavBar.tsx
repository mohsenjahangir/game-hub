import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/images.jpg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'}>
            <Image src={logo} borderRadius={10} boxSize={'60px'} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar