import React from "react";
import { BrowserRouter} from "react-router-dom";

import Experience from "./Experience";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Header from "./Header";
import {Paper, Tab, Tabs, Container, Button} from "@material-ui/core";
import { HashLink as Link } from 'react-router-hash-link';

import ScrollableSection from './custom_scrollable-section';
import {configureAnchors} from "./custom_scrollable-section";

import {Sticky, StickyContainer} from 'react-sticky';

import { withTranslation } from 'react-i18next';

import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import { teal, orange } from "@material-ui/core/colors";


const globalTheme = createMuiTheme({
    palette:{
      type: 'dark',
      primary: teal,
      secondary : orange,
    },
  })
let theme = createMuiTheme({
    palette : globalTheme.palette,
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
            marginBottom : "400px", 
            marginTop: '20px'
        }
        const headerSize = 70;
        configureAnchors({offset: 90, keepLastAnchorHash : true, onChange : (newValue) => this.navigate(newValue)})
        console.log("Changed palette to " + activeTheme.palette.type)
        return (
            <div>
                <ThemeProvider theme = {activeTheme}> 
                    <CssBaseline/>
                    <Container>
                        <Button onClick={() => this.toggleTheme()}>Prova</Button>
                        <ScrollableSection hash={''} id = 'main'>
                            <div>   
                                <Header/>
                            </div>
                        </ScrollableSection>
                        <StickyContainer>
                            <BrowserRouter>
                                <Sticky>{({ style }) => <div style={style}>
                                    <Paper >       
                                        <Tabs
                                            value={this.state.activeTabIndex}
                                            onChange={this.handleChange}
                                            indicatorColor="primary"
                                            textColor="primary"
                                            scrollButtons="auto"
                                            centered
                                        >
                                            <Tab label={this.props.t("About me")} value  = 'about' disableFocusRipple component={Link} to="#about" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                            <Tab label={this.props.t("Experience")} value  = 'experience' disableFocusRipple component={Link} to="#experience" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                            <Tab label={this.props.t("Skills")} value  = 'skills' disableFocusRipple component={Link} to="#skills" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                            <Tab label={this.props.t("Contact")} value = 'contact' disableFocusRipple component={Link} to="#contact" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                        </Tabs>
                                    </Paper>
                                </div>}</Sticky>
                            </BrowserRouter>

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
                                <div>
                                    <Skills/>
                                </div>
                            </ScrollableSection>
                            <ScrollableSection hash={'contact'} id = 'contact'>
                                <div style={divStyle}>
                                    <Contact/>
                                </div>
                            </ScrollableSection>
                        </StickyContainer>
                    </Container>
                </ThemeProvider>
            </div>
        );
    }
}

export default withTranslation()(Main);