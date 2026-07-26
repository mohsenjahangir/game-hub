
import useGenre, {type Genre } from '../hooks/useGenre'

import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/imageUrl';

interface Props {
    onSelectGenre: (genre: Genre | null) => void
    selectedGenre:Genre |null
}

const GenreList = ({ onSelectGenre,selectedGenre }: Props) => {
    const { data, loading, errors } = useGenre();

    if (loading) return <Spinner />
    if (errors) return null;
    return (
        <List.Root>
            {data.map((genre) =>
                <ListItem key={genre.id} padding={1}>
                    <HStack>
                        <Image boxSize='32px' borderRadius={10} src={getCroppedImageUrl(genre.image_background)} />
                        <Button fontWeight={genre.id===selectedGenre?.id?'bold':'normal'} onClick={() => onSelectGenre(genre)} variant='ghost' fontSize={'lg'}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List.Root>
    )
}

export default GenreList