import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem  area="aside" paddingX={5}>
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
