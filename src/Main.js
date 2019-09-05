import React, { Component } from "react";
import Experience from "./Experience";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

import { makeStyles } from '@material-ui/core/styles';
import {Typography, Paper, Tabs, Tab} from "@material-ui/core";

import { BrowserRouter} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';

import {Sticky, StickyContainer} from 'react-sticky'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingTop : 0,
    marginTop:0,
  },
});


export default function Main(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const divStyle = {
        marginBottom : "400px", 
        marginTop: '20px'
    }
    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });    
    }
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    const headerSize = 60;
    return (
    <div>
        <header style={{margin : '20px'}}>
            <Typography variant="h2" component="h1" >
                Carles Pérez Onielfa
            </Typography>
        </header>
        <StickyContainer>
            <BrowserRouter>
                <Sticky>{({ style }) => <div style={style}>
                    <Paper className={classes.root}>
                        
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                            >
                                <Tab label="About me" component={Link} to="#about" scroll={el => scrollWithOffset(el, headerSize)}/>
                                <Tab label="Experience" component={Link} to="#experience" scroll={el => scrollWithOffset(el, headerSize)}/>
                                <Tab label="Skills" component={Link} smooth to="#skills" scroll={el => scrollWithOffset(el, headerSize)}/>
                                <Tab label="Contact" component={Link} smooth to="#contact" scroll={el => scrollWithOffset(el, headerSize)}/>
                            </Tabs>
                        
                    </Paper>
                </div>}</Sticky>

                <div style={divStyle} id = 'about'>   
                    <AboutMe/>
                </div>
                <div style={divStyle} id = 'experience'>
                    <Experience/>
                </div>
                <div style={divStyle} id = 'skills'>
                    <Skills/>
                </div>
                <div style={divStyle} id = 'contact'>
                    <Contact/>
                </div>
            </BrowserRouter>
        </StickyContainer>
    </div>
    );
}