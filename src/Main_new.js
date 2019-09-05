import React from "react";
import Experience from "./Experience";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import NavTabs from "./Tabs";
import {Typography, Paper} from "@material-ui/core";
import { BrowserRouter} from "react-router-dom";
import ScrollableSection from './custom_scrollable-section';
import {configureAnchors} from "./custom_scrollable-section";
import {Sticky, StickyContainer} from 'react-sticky'

class Main extends React.Component{

    render(){
        
        const divStyle = {
            marginBottom : "400px", 
            marginTop: '20px'
        }
        configureAnchors({offset: 90, keepLastAnchorHash : true})
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
                            <NavTabs/>
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
export default Main