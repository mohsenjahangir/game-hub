import { Button, Menu, Portal } from '@chakra-ui/react'
import { LuChevronRight } from 'react-icons/lu'
import usePlatform from '../hooks/usePlatform';

const PlatfromFilter = () => {
    const { data, errors } = usePlatform();
    if (errors) return null
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    Open <LuChevronRight />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data.map((platform)=>
                        <Menu.Item key={platform.id} value={platform.slug}>{
                            platform.name
                        }</Menu.Item>
                        )}
                        
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default PlatfromFilter