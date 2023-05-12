import { List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import{createGlobalStyle} from 'styled-components'
import React,{useContext, useState} from 'react'
import { Icon } from '../../../Context/Sideicon';
import { Sessionform } from '../../../Context/Session';

const Iconstyle = createGlobalStyle`
.profile_icon{
    position: absolute !important;
    left: -35px;
}
`;



const IconList = () => {
    let global=true;
    const[cvalue,setcvalue]=useState(0)
    const {sessionform,setsessionform} = useContext( Sessionform);
    const{ modalShow,id}=sessionform
    const { iconaction,seticonaction } = useContext(Icon)
    const{aeditstation,  stationfile,search,  actionsearch, messageoption,event,countvalue,editstation}=iconaction
    console.log(stationfile,"stattion file");
  console.log(aeditstation,"aaaaaaaaaaaaaaaaaaaa","wjebrfkgut3,",event,"event",iconaction.station,search,"dhf","messaheoption", messageoption);
  return (
    <div>
        <List className='profile_icon px-1' sx={{backgroundColor:'#fff',mt:1,zIndex:'9999'}}>
            <Iconstyle/>
            
            <ListItem sx={{padding:'0'}}>
                <ListItemButton className='profile_icon1' sx={{padding:'0',display:"flex",justifyContent:"center",alignItems:"center",mb:1}}>
                    <img src='./img/associate_icon1.png' className='img-fluid w-100' onClick={(e)=>{
                        setcvalue((value)=>{
                          return value+1;
                        })
                    
                      
                   seticonaction({...iconaction,countvalue:cvalue})   
                   iconaction.addstation((value)=>{
                    if(value===true) {
                        return false
                    }
                    return true
                   })
                   }   }/>
                  {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Addstation</Typography> */}
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}} className='w-100'>
                <ListItemButton className='profile_icon1 w-100' sx={{padding:'0',display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src='./img/associate_icon2.png' className="img-fluid w-100" onClick={(e)=>{
                       setcvalue((value)=>{
                        return value+1;
                      })
                    
                      seticonaction({...iconaction,countvalue:cvalue})   
                  
                        iconaction.aeditstation(!editstation)
                    
                 
                }}/>
                  {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Editstation</Typography> */}
               
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton sx={{padding:'0'}}>
                <img src='./img/AddNewSession.svg'  onClick={()=>setsessionform({...sessionform,modalShow:true})} className='img-fluid w-100' />
                {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Editstation</Typography> */}
               
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton sx={{padding:'0'}}>
                <img src='./img/Huddle.svg' style={{maxWidth:'32px'}}/>
                {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Huddle</Typography> */}
               
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton sx={{padding:'0'}} >
                <img src='./img/PriotiySessions.svg' style={{maxWidth:'32px'}}/>
                {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Priority Session</Typography> */}
               
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton sx={{padding:'0'}}>
                <img src='./img/StationFiles.svg'  style={{maxWidth:'32px'}}onClick={(e)=>{iconaction.actionstationfile(true)
                   seticonaction({...iconaction,event:e}) 
                }}/>
                {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Station File</Typography> */}
               
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton  sx={{padding:'0'}}>
                <img src='./img/StationSessions.svg' style={{maxWidth:'32px'}} />
                {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}> Station Session </Typography> */}
              
                </ListItemButton>
             
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton sx={{padding:'0'}} >
                <img src='./img/MyStations.svg' style={{maxWidth:'32px'}} />
                {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>My Station</Typography> */}
              
                </ListItemButton>
             
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton sx={{padding:'0'}} >
                <img src='./img/DirectSessions.svg' style={{maxWidth:'32px'}} />
                {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Direct Session</Typography> */}
              
                </ListItemButton>
             
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton sx={{padding:'0'}}>
                <img src='./img/FullScreen.svg' style={{maxWidth:'32px'}} />
                {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Full Screen</Typography> */}
              
                </ListItemButton>
             
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton sx={{padding:'0'}}>
                <img src='./img/Search.svg' style={{maxWidth:'32px'}} onClick={(e)=>{ 
                     seticonaction({...iconaction,event:e}) 
                    actionsearch( (search)=>{
                        if(search){
                            console.log(search,"inside the search");
                            return false;
                        }else{
                            return true
                        }
                    })
                
                }}/>
                 {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Search</Typography> */}
               
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton sx={{padding:'0'}}>
                <img src='./img/Option.svg' onClick={()=>alert("Please check off Priority Box on Station")}/>
                {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Priority</Typography> */}
               
                </ListItemButton>
            </ListItem>
            <ListItem sx={{padding:'0'}}>
                <ListItemButton sx={{padding:'0'}}   onClick={()=>seticonaction((iconaction)=>{
                if(iconaction.messageoption ===true){
                  return{...iconaction,messageoption:false}
                }
                return{...iconaction,messageoption:true}
                })}>
                <img src='./img/Option.svg'/>
                  {/* <Typography variant="body1" color="initial" sx={{fontSize:'12px'}}>Option</Typography> */}
               
                </ListItemButton>
            </ListItem>
        </List>
    </div>
  )
}

export default IconList