import Box from './components/Box.js';
import Grid from './components/Grid.js';
import { Ruler } from './components/Grid.js';

function App() {
  return (
    <div className='relative h-screen overflow-hidden'>
      <Ruler spacing={'sm'} />
      <Grid container spacing={'sm'} alignItems={'flex-end'}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
