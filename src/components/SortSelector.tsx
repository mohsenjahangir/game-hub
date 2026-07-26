
import { Button, Menu, Portal } from '@chakra-ui/react'

interface Props {
    onSelectSort: (sortOrder: string) => void
    selectedSortOrder: string
}

const SortSelector = ({ onSelectSort, selectedSortOrder }: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' }
    ]
    const CurrentOrder = sortOrders.find((order) => order.value === selectedSortOrder)

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    Sort by: {CurrentOrder?.label||'Relevance'}
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortOrders.map((sort) =>
                            <Menu.Item onClick={() => onSelectSort(sort.value)} key={sort.value} value={sort.value}>{sort.label}</Menu.Item>
                        )}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortSelector