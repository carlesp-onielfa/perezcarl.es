import React from "react";
import { BrowserRouter} from "react-router-dom";

import Experience from "./Experience";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import NavTabs from "./NavTabs";

import {Typography, Paper, Tab, Tabs} from "@material-ui/core";
import { HashLink as Link } from 'react-router-hash-link';

import ScrollableSection from './custom_scrollable-section';
import {configureAnchors} from "./custom_scrollable-section";

import {Sticky, StickyContainer} from 'react-sticky';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
  
const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop : 0,
        marginTop:0,
        },
});
class Main extends React.Component{

    state = {
        activeTabIndex: 'about',
    };

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
        const divStyle = {
            marginBottom : "400px", 
            marginTop: '20px'
        }
        const { classes } = this.props;
        const headerSize = 70;
        configureAnchors({offset: 90, keepLastAnchorHash : true, onChange : (newValue) => this.navigate(newValue)})
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
                                    value={this.state.activeTabIndex}
                                    onChange={this.handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    centered
                                >
                                    <Tab label="About me" value  = 'about' component={Link} to="#about" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                    <Tab label="Experience" value  = 'experience' component={Link} to="#experience" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                    <Tab label="Skills" value  = 'skills' component={Link} to="#skills" scroll={el => this.scrollWithOffset(el, headerSize)}/>
                                    <Tab label="Contact" value = 'contact' component={Link} to="#contact" scroll={el => this.scrollWithOffset(el, headerSize)}/>
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
                        <div style={divStyle}>
                            <Skills/>
                        </div>
                    </ScrollableSection>
                    <ScrollableSection hash={'contact'} id = 'contact'>
                        <div style={divStyle}>
                            <Contact/>
                        </div>
                    </ScrollableSection>
                </StickyContainer>
            </div>
        );
    }
}
Main.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Main);