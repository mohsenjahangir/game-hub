import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/images.jpg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void
}
const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack >
            <Image src={logo} borderRadius={10} boxSize={'60px'} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar