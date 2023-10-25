import React,{Component} from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
export class Sastra extends Component{
render(){
    return(
            //         <div className="mt-5 d-flex justify-content-left">
            //     <h3>Welcome to Employee Management Portal.
            //         This is home page.
            //     </h3>
            // </div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
    )
}
}
