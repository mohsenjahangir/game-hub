import { Heading } from '@chakra-ui/react'
import type { GameQuery } from '../App'

interface Props {
    gameQuary: GameQuery
}
const GamesHeading = ({ gameQuary }: Props) => {

    const head = `${gameQuary.platform?.name || ''} ${gameQuary.genre?.name || ''} Games`
    return (
        <Heading as='h1' size='5xl' marginY={4}> 
            {head}
        </Heading>
    )
}

export default GamesHeading