import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  console.log("App Rendered");
  return (
    <Grid
      // h="50px"
      templateRows={{ base: "repeat(2, 1fr)", lg: "repeat(2, 1fr)" }} // Two rows for mobile and desktop
      templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} // One column on mobile, three on desktop
      
    >
      <GridItem rowSpan={1} colSpan={3}>
        <Navbar/>
      </GridItem>
      <GridItem bg="lightblue" rowSpan={1} colSpan={1}>
        Main
      </GridItem>
      {/* Aside will be hidden on mobile by setting display: none on base breakpoint */}
      <GridItem
        bg="yellow"
        rowSpan={1}
        colSpan={1}
        display={{ base: "none", lg: "block" }} // Hide aside on mobile, show on larger screens
      >
        Aside
      </GridItem>
    </Grid>
  );
}

export default App;
