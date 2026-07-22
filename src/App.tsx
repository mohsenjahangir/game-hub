import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type{ Genre } from './hooks/useGenre'
import PlatfromFilter from './components/PlatfromFilter'

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

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
        <PlatfromFilter/>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App