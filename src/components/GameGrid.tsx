import { SimpleGrid, Text } from '@chakra-ui/react'
import useGame from '../hooks/useGame'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import type{ Genre } from '../hooks/useGenre'

interface Props {
    selectedGenre: Genre | null
}


const GameGrid = ({ selectedGenre }: Props) => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const { errors, data, loading } = useGame(selectedGenre)
    return (
        <>
            {errors && <Text color={'red.500'}>{errors}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4, xl: 5 }} padding='10px' gap={5}>
                {loading
                    ? skeletons.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>))
                    : data.map((game) =>
                        <GameCardContainer key={game.id} >
                            <GameCard game={game} />
                        </GameCardContainer>)
                }
            </SimpleGrid>
        </>
    )
}

export default GameGrid