import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type { Genre } from './hooks/useGenre'
import PlatfromFilter from './components/PlatfromFilter'
import type { Platform } from './hooks/useGame'
import SortSelector from './components/SortSelector'
import GamesHeading from './components/GamesHeading'

export interface GameQuery {
  platform: Platform | null;
  genre: Genre | null;
  sortOrder: string
  searchText: string;
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
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <Show when='lg'>

        <GridItem  margin={5} >
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>

      </Show>
      <GridItem area={'main'}>

        <Box paddingX={3}>
          <GamesHeading gameQuary={gameQuery} />
          <HStack gap={4} marginBottom={2}>
            <PlatfromFilter onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} selectedPlatform={gameQuery.platform} />
            <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSort={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  )
}

export default App