import React from "react";
import { BrowserRouter} from "react-router-dom";

import Experience from "./Experience";
import Portfolio from "./Portfolio";
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
import { teal, pink } from "@material-ui/core/colors";
import RootRef from '@material-ui/core/RootRef';

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
    },
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
        const NavTabs = () => ( 
            <BrowserRouter  style = {{flexGrow:1}}> 
                <Tabs
                    value={this.state.activeTabIndex}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    scrollButtons="auto"
                    style = {{flexGrow:'1'}}
                    TabIndicatorProps={{style:{backgroundColor:pink[200]}}}
                >
                    <Tab style={{height: "70px"}} label={this.props.t("About me")} value  = 'about' disableFocusRipple component={Link} to="#about" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                    <Tab label={this.props.t("Experience")} value  = 'experience' disableFocusRipple component={Link} to="#experience" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                    <Tab label={this.props.t("Skills")} value  = 'skills' disableFocusRipple component={Link} to="#skills" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                    <Tab label={this.props.t("Portfolio")} value = 'portfolio' disableFocusRipple component={Link} to="#portfolio" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                </Tabs>
            </BrowserRouter>);
        
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
                                <NavTabs/>
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
                            <ScrollableSection hash={'portfolio'} id = 'portfolio'>
                                <div style={divStyle}>
                                    <Portfolio/>
                                </div>
                            </ScrollableSection>
                    </Container>
                </ThemeProvider>
            </div>
        );
    }
}

export default withTranslation()(Main);