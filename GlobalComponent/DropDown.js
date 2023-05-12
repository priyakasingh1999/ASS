import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemName from "./ListItemName";


export default function DropDown({top,name1,name2,name3,name4,name5,maxWidth,bgcolor,border,color,display1,display2,display3,display4,display5}) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth:{maxWidth},
        bgcolor: `${bgcolor}`,
        border:`${border}`,
        position: "absolute",
        top: {top},
        zIndex: "999999",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List sx={{ p: 0 }}>
        <Box sx={{display:`${display1}`}}><ListItemName name={name1} color={color}/></Box>
        <Box sx={{display:`${display2}`}}><ListItemName name={name2} color={color}/></Box>
        <Box sx={{display:`${display3}`}}> <ListItemName name={name3} color={color} /></Box>
        <Box sx={{display:`${display4}`}}><ListItemName name={name4} color={color}/></Box>
        <Box sx={{display:`${display5}`}}><ListItemName name={name5} color={color}/></Box>
        
        </List>
      </nav>
    </Box>
  );
}
