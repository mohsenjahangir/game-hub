import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type { Genre } from './hooks/useGenre'
import PlatfromFilter from './components/PlatfromFilter'
import type { Platform } from './hooks/useGame'

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatfrom] = useState<Platform | null>(null)

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
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>

      </Show>
      <GridItem area={'main'} >
        <PlatfromFilter onSelectedPlatform={(platform) => setSelectedPlatfrom(platform)} selectedPlatform={selectedPlatform} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  )
}

export default App