import logo from './logo.svg';
import './App.css';
import {Input} from './components/Input' 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import {MyTable2} from './components/MyTable2'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  return (
    <div className="container">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={24}>
        <Grid xs={4}>
          {/* <Item>xs=8/24</Item> */}
        </Grid>
        <Grid container xs={20}>
          <Grid xs={20}>
            {/* <Item>nested xs=12/24</Item> */}
          </Grid>
          <Grid xs={4}>
            {/* <Item>nested xs=12/24</Item> */}
          </Grid>
        </Grid>

        <Grid xs={1}>
          {/* <Item>xs=8/24</Item> */}
        </Grid>
        <Grid container xs={23}>
          <Grid xs={23}>
            {/* <Item>nested xs=12/24</Item> */}
            <Input/>
          </Grid>
          <Grid xs={1}>
            
          </Grid>
        </Grid>
        
        <Grid xs={1}/>
        <Grid xs={22}>
          <MyTable2/>
        </Grid>
        <Grid xs={1}/>
      </Grid>
    </Box>
    </div>
  );
}

export default App;
