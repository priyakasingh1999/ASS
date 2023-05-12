import React, { Component } from "react";
import {Container,Grid,Box,List} from '@mui/material'
import SingleList from '../../GlobalComponent/SingleList'
import { createGlobalStyle } from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const CusStyle = createGlobalStyle`
.listwidth{
    width:calc(100% - 0px) !important;
}


`

export default class StationFolder extends Component {
    render(){
        var silkdata = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            ]
          };
  return (
    <Container maxWidth="lg">
        <CusStyle/>
        <Grid container  sx={{mt:3}}>
            <Grid item xs={12}>
                <Box>
                <Slider {...silkdata}>
                
                    
                       
                       <List sx={{p:0}}>
                       <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"All Associates"} listwidth={"listwidth"} hcolor="#23527c" />
                       </List>

                       <List sx={{p:0}}>
                       <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"Biomedical"} listwidth={"listwidth"} hcolor="#23527c"/>
                        </List>

                        <List sx={{p:0}}>
                        <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"Finance"} listwidth={"listwidth"} hcolor="#23527c"/>
                        </List>

                        <List sx={{p:0}}>
                        <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"Hospital Security"} listwidth={"listwidth"} hcolor="#23527c"/>
                        </List>

                        <List sx={{p:0}}>
                        <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"Human Resources"} listwidth={"listwidth"} hcolor="#23527c"/>
                        </List>

                        <List sx={{p:0}}>
                        <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"Information Technology"} listwidth={"listwidth"} hcolor="#23527c"/>
                        </List>

                        <List sx={{p:0}}>
                        <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"Leadership"} listwidth={"listwidth"} hcolor="#23527c"/>
                        </List>

                        <List sx={{p:0}}>
                        <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"Process Improvement"} listwidth={"listwidth"} hcolor="#23527c"/>
                        </List>

                        <List sx={{p:0}}>
                        <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"Productivity"} listwidth={"listwidth"} hcolor="#23527c"/>
                        </List>

                        <List sx={{p:0}}>
                        <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"Project Management"} listwidth={"listwidth"} hcolor="#23527c"/>
                        </List>

                        <List sx={{p:0}}>
                        <SingleList bgcolor={"#bdd7ee"} color={"#1280c2"} name={"Volunteers"} listwidth={"listwidth"} hcolor="#23527c"/>
                        </List>
                                         
                       
                      
                       
                      
                          
                   
                    

                    </Slider>
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}
}
