import React from "react";
import { BrowserRouter} from "react-router-dom";

import Experience from "./Experience";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import HeaderButtons from "./HeaderButtons";
import {Tab, Tabs, Container, Button, Typography, AppBar, Toolbar} from "@material-ui/core";
import { HashLink as Link } from 'react-router-hash-link';

import ScrollableSection from './custom_scrollable-section';
import {configureAnchors} from "./custom_scrollable-section";

import { withTranslation } from 'react-i18next';

import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import { teal, pink, green } from "@material-ui/core/colors";


const globalTheme = createMuiTheme({
    palette:{
      type: 'dark',
      primary: teal,
      secondary : pink,
    },
    
  })
let theme = createMuiTheme({
    palette : globalTheme.palette,
    typography: {
        fontFamily: [
            'Roboto',
            'Montserrat',
            'Arial',
            'sans-serif',
          ].join(','),
        h6:{
            fontFamily: 'Montserrat'
        }
    }
});

class Main extends React.Component{

    state = {
        activeTabIndex: 'about',
        activeTheme : theme,
    };
    toggleTheme(){
        let newTheme = this.state.activeTheme
        newTheme.palette.type == 'dark' ? newTheme.palette.type = 'light' : newTheme.palette.type = 'dark' 
        this.setState({theme:newTheme})
    }
    navigate(newValue){
        this.setState((prevState,props)=>({
            activeTabIndex: newValue
        }));
    }
    //Handle change in tab selection
    handleChange = (event, value) => {
        this.setState({ activeTabIndex: value });
    };
    //Scroll to desired hash with offset for the header
    scrollWithOffset (el, offset)
    {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });    
    }

    render(){  
        const {activeTheme} = this.state;
        const divStyle = {
            marginTop : "20px", 
            marginBottom: '200px'
        }
        const headerSize = 100;
        configureAnchors({offset: headerSize+20, keepLastAnchorHash : true, onChange : (newValue) => this.navigate(newValue)})
        console.log("Changed palette to " + activeTheme.palette.type)
        return (
            <div>
                <ThemeProvider theme = {activeTheme}> 
                    <CssBaseline/>
                    <AppBar position='fixed'>
                        <Toolbar style={{flexGrow:1}}>
                            <div>
                                <Typography variant="h6" component="h1" style={{marginRight:'50px', flexGrow:1}}>
                                    {"CARLES PÉREZ ONIELFA"}
                                </Typography>
                            </div>
                            <BrowserRouter>    
                                <Tabs
                                    value={this.state.activeTabIndex}
                                    onChange={this.handleChange}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                    scrollButtons="auto"
                                    TabIndicatorProps={{style:{backgroundColor:pink[200]}}}
                                    style={{height: "70px"}}
                                >
                                    <Tab style={{height: "70px"}} label={this.props.t("About me")} value  = 'about' disableFocusRipple component={Link} to="#about" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                    <Tab label={this.props.t("Experience")} value  = 'experience' disableFocusRipple component={Link} to="#experience" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                    <Tab label={this.props.t("Skills")} value  = 'skills' disableFocusRipple component={Link} to="#skills" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                    <Tab label={this.props.t("Contact")} value = 'contact' disableFocusRipple component={Link} to="#contact" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                </Tabs>
                            </BrowserRouter>
                            <HeaderButtons/>
                        </Toolbar>
                    </AppBar>
                    <Container style={{marginTop:'100px', marginBottom:'1000px'}}>
                            <ScrollableSection hash={'about'} id = 'about'>
                                <div style={divStyle}>   
                                    <AboutMe/>
                                </div>
                            </ScrollableSection>

                            <ScrollableSection hash={'experience'} id = 'experience'>
                                <div style={divStyle}>
                                    <Experience/>
                                </div>
                            </ScrollableSection>

                            <ScrollableSection hash={'skills'} id = 'skills'>
                                <div style={divStyle}>
                                    <Skills/>
                                </div>
                            </ScrollableSection>
                            <ScrollableSection hash={'contact'} id = 'contact'>
                                <div style={divStyle}>
                                    <Contact/>
                                </div>
                            </ScrollableSection>
                    </Container>
                </ThemeProvider>
            </div>
        );
    }
}

export default withTranslation()(Main);