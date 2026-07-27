import { Card, Heading, HStack, Image } from "@chakra-ui/react"
import type { Game } from "../hooks/useGame"
import IconPlatforms from "./IconPlatforms"
import Metacritic from "./Metacritic"
import getCroppedImageUrl from "../services/imageUrl"
import Emoji from "./Emoji"



interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root h={'full'}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <Card.Body>
                <HStack justifyContent={'space-between'} marginBottom={3}>
                    <IconPlatforms platforms={game.parent_platforms.map(p => p.platform)} />
                    <Metacritic score={game.metacritic} />
                </HStack>
                <Heading fontSize={"2xl"}>{game.name}<Emoji rating={game.rating_top} /></Heading>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard