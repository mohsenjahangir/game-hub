import { Input, InputGroup } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'


const SearchInput = () => {
    return (
        <InputGroup startElement={<LuSearch />}>
            <Input borderRadius={10} placeholder='Search games...' variant='subtle' />
        </InputGroup>
    )
}

export default SearchInput