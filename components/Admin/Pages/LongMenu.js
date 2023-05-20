import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {Menu,Box} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';

const options = [
   'Dashboard',
  'Pages',
  'Stations',
  'User Profile',
  'Enable Programs',
  'Station & Discussions',
  'Text Messages',
  'Project Boards',
  'Change Password',
  'New User Registration',
  'Change User Name',
  'Login History',
  'Login Attempts',
  'Company Logo',
  'Website Hits',
  'Edit Help',
  'My Account',
  'Update Traninig PPT',
  'Update Training Videos',
  'Time Settings',
  'Login Page Photo',
  'Domain List',
  'Help',
  'All Profiles',
  'Email Subscriptions',
  'Social Network',
  'Logout',
];

const ITEM_HEIGHT = 150;

export default function LongMenu() {
  const [opendropdown, setOpenDropdown] = React.useState(false);
 
  

  return (
    <div className='position-relative'>
      <IconButton
        aria-label="more"
        id="long-button"
        onClick={()=>{setOpenDropdown(!opendropdown)}}
      >
       <MenuIcon sx={{fontSize:"40px",color:"black"}} />
        
      </IconButton>
      { opendropdown &&
        <Box  sx={{position:'absolute', left:'0',top:'0',bgcolor:"#fff",boxShadow:24,minWidth:"250px",py:1}}>

        
        <Box sx={{position:"relative",width:"100%",maxHeight:"500px",overflowY:"auto"}}>
        <Box  onClick={()=>{setOpenDropdown(false)}} sx={{position:"absolute",top:0,right:0,zIndex:9999}}><CancelIcon sx={{fontSize:"30px",color:"black"}}/></Box>
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} >
              {option}
            </MenuItem>
          ))}
        </Box>
  
        </Box>
      }
     
     
    </div>
  );
}