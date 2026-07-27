
import useGenre, { type Genre } from '../hooks/useGenre'

import { Button, Heading, HStack, Image, List, Stack } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/imageUrl';

interface Props {
    onSelectGenre: (genre: Genre | null) => void
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data } = useGenre();

    // if (loading) return <Spinner />
    // if (errors) return null;
    return (
        <>
            <Heading fontSize={'3xl'} marginBottom={3}>Genres</Heading>
            <List.Root>
                {data.map((genre) =>
                    <Stack key={genre.id} padding={1}>
                        <HStack>
                            <Image boxSize='32px' borderRadius={10} src={getCroppedImageUrl(genre.image_background)} />
                            <Button
                                flex="1"
                                justifyContent="flex-start"
                                whiteSpace="normal"
                                textAlign="left"
                                height="auto"
                                padding={0}
                                variant="ghost"
                                fontSize="lg"
                                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                                onClick={() => onSelectGenre(genre)}
                            >{genre.name}</Button>
                        </HStack>
                    </Stack>
                )}
            </List.Root>
        </>
    )
}

export default GenreList