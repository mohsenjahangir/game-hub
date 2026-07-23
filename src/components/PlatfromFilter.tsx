import { Button, Menu, Portal } from '@chakra-ui/react'
import { LuChevronRight } from 'react-icons/lu'
import usePlatform from '../hooks/usePlatform';
import type { Platform } from '../hooks/useGame';

interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null
}

const PlatfromFilter = ({ onSelectedPlatform, selectedPlatform }: Props) => {
    const { data, errors } = usePlatform();

    if (errors) return null
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    {selectedPlatform?.name||"Platforms"} <LuChevronRight />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data.map((platform) =>
                            <Menu.Item onClick={() => onSelectedPlatform(platform)} key={platform.id} value={platform.slug}>{
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