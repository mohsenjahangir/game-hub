import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
    return (
        <Card.Root h={'full'} width={'300px'} >
            <Skeleton height={'200px'} />
            <Card.Body>
                <SkeletonText />
            </Card.Body>
        </Card.Root >
    )
}

export default GameCardSkeleton