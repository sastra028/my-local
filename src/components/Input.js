import React,{Component} from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export class Input extends Component{
    
render(){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return(
        
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={24}>
        <Grid xs={24}>
          <TextField id="outlined-basic" label="งวดที่" variant="outlined" size="small" fullWidth />
          </Grid>
          <Grid xs={24}>
            <TextField id="outlined-basic" label="ชื่อ" variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={2} columns={24}>
          <Grid xs={8}>
          <TextField id="outlined-basic" label="เลข" variant="outlined" fullWidth />
          </Grid>
          <Grid xs={8}>
          <TextField id="outlined-basic" label="ราคา" variant="outlined" fullWidth />
          </Grid>
          <Grid xs={8}>
          <TextField id="outlined-basic" label="โตด/กลับ" variant="outlined" fullWidth />
          </Grid>

          <Grid xs={15}/>
          <Grid xs={9}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="3 ตัว" />
          </Grid>
        </Grid>

        <Grid container spacing={2} columns={24}>
          <Grid xs={24}>
          </Grid>
        </Grid>
      </Box>

    )
}
}