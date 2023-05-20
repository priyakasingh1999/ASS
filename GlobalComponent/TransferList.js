import React, { useState } from 'react';
import { List, ListItem, Checkbox, Button, Typography } from '@mui/material';

const TransferList = () => {
  const [checked, setChecked] = useState([]);

  const [leftList, setLeftList] = useState([
    { id: 1, name: 'ericlink@associatenetwork.com' },
    { id: 2, name: 'info@associatenetwork.com' },
    { id: 3, name: 'JimSmith121234@gmail.com' },
    { id: 4, name: 'joesmith1234@hotmail.com' },
    { id: 5, name: 'KJones1212@Associatenetwork.com' },
    { id: 6, name: 'marvinfriend1212@gmail.com' },
    { id: 7, name: 'mpujapatel@gmail.com' },
    { id: 8, name: 'patricia@ixertia.com' },
    // Add more items as needed
  ]);

  const [rightList, setRightList] = useState([]);

  const handleToggle = (id) => () => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRightClick = () => {
    const itemsToMove = leftList.filter((item) => checked.includes(item.id));
    const updatedLeftList = leftList.filter((item) => !checked.includes(item.id));
   
    setRightList([...rightList, ...itemsToMove]);
    setLeftList(updatedLeftList);
  };

  const handleAllLeftClick = () => {
    
    setChecked([]);
  };

  const handleRightClick = () => {
    const itemsToMove = leftList.filter((item) => !checked.includes(item.id));
    const updatedLeftList = leftList.filter((item) => checked.includes(item.id));
   
    setRightList([...rightList, ...itemsToMove]);
    setLeftList(updatedLeftList);
  };

  const handleLeftClick = () => {
    const itemsToMove = rightList.filter((item) => !checked.includes(item.id));
    const updatedRightList = leftList.filter((item) => checked.includes(item.id));
   
    setLeftList([...leftList, ...itemsToMove]);
    setRightList(updatedRightList);
  };

  return (
    <div className='d-flex justify-content-between'>
      <List dense component="div" role="list" sx={{border:"1px solid black",maxHeight:120,minWidth:220,maxWidth:270,overflowY:"auto"}}>
        {leftList.map((item) => (
          <ListItem key={item.id} role="listitem"  onClick={handleToggle(item.id)} sx={{p:0}}>
            <Checkbox hidden checked={checked.indexOf(item.id) !== -1} tabIndex={-1} disableRipple />
            <Typography sx={{color:"#858585",fontSize:"14px"}}> {item.name}</Typography>
           
          </ListItem>
        ))}
      </List>
      <div className='d-flex justify-content-between flex-column'> 
        <Button sx={{p:0}} variant="outlined" onClick={handleAllRightClick}>&gt;</Button>
        <Button sx={{p:0}} variant="outlined" onClick={handleRightClick}> ≫</Button>
        <Button sx={{p:0}} variant="outlined" onClick={handleLeftClick}>≪</Button>
        <Button sx={{p:0}} variant="outlined" onClick={handleAllLeftClick}>&lt;</Button>
      </div>
      <List dense component="div" role="list" sx={{border:"1px solid black",maxHeight:120,minWidth:220,maxWidth:270,overflowY:"auto"}}>
        {rightList.map((item) => (
          <ListItem key={item.id} role="listitem"  onClick={handleToggle(item.id)}>
            <Checkbox hidden checked={checked.indexOf(item.id) !== -1} tabIndex={-1} disableRipple />
            <Typography sx={{color:"#858585",fontSize:"14px"}}> {item.name}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TransferList;
