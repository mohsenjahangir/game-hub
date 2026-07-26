import { Card, Heading, HStack, Image } from "@chakra-ui/react"
import type{ Game } from "../hooks/useGame"
import IconPlatforms from "./IconPlatforms"
import Metacritic from "./Metacritic"
import getCroppedImageUrl from "../services/imageUrl"



interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root h={'full'}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <Card.Body>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <IconPlatforms platforms={game.parent_platforms.map(p => p.platform)} />
                    <Metacritic score={game.metacritic} />
                </HStack>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard