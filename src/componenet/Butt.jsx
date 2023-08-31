import React from "react";
import { Button } from "@mui/material"

 export const Butt=()=>{
    return(
        <div className="child">
  <h1>All Buttons Type in MUI</h1>
  
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
  <Button variant="text">Text</Button>
        </div>
    )

}