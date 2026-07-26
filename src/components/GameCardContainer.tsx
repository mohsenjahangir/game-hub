import { Box } from "@chakra-ui/react"
import type { ReactNode } from "react"

interface Porps {
    children: ReactNode
}

const GameCardContainer = ({ children }: Porps) => {
    return (
        <Box borderRadius={10} overflow={'hidden'} >
            {children}
        </Box>
    )
}

export default GameCardContainer