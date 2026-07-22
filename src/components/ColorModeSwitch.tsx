import { HStack, Switch, Text } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'


const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack padding={'20px'}>
            <Switch.Root colorPalette='green' checked={colorMode === 'dark'} onChange={toggleColorMode}>
                <Switch.HiddenInput colorscheme='green' />
                <Switch.Control />
                <Text>{colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}</Text>
            </Switch.Root>
        </HStack>
    )
}

export default ColorModeSwitch