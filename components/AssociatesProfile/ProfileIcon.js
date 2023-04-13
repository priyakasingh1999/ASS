import { Avatar, Container, Grid, Stack } from "@mui/material";
import * as React from "react";

const ProfileIcon = ({icon}) => {
    return (
        <>
            <Avatar sx={{height: "20px", width: "20px",fontSize:'12px',bgcolor:"#fff",color:'#000'}}>{icon}</Avatar>
        </>
    )
}
export default ProfileIcon