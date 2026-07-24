import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type { Genre } from './hooks/useGenre'
import PlatfromFilter from './components/PlatfromFilter'
import type { Platform } from './hooks/useGame'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (

    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav "  "aside main"`
    }}
      gridTemplateColumns={{
        base: '1fr',
        lg: "200px 1fr"
      }}

    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show when='lg'>

        <GridItem padding={2}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>

      </Show>
      <GridItem area={'main'} >
        <HStack gap={4} padding={3} marginBottom={2}>
          <PlatfromFilter onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
          <SortSelector />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App