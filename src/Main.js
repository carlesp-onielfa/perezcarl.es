import React from "react";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import { Container } from "@material-ui/core";
import ScrollableSection from './custom_scrollable-section';
import { withTranslation } from 'react-i18next';
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import { teal, pink } from "@material-ui/core/colors";
import CustomAppBar from "./CustomAppBar";

const globalTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: teal,
        secondary: pink,
    },

})
let theme = createMuiTheme({
    palette: globalTheme.palette,
    typography: {
        fontFamily: [
            'Roboto',
            'Montserrat',
            'Arial',
            'sans-serif',
        ].join(','),
        h6: {
            fontFamily: 'Montserrat'
        },
        h4: {
            fontFamily: 'Montserrat'
        }
    },
});

class Main extends React.Component {

    state = {
        activeTheme: theme,
    };
    toggleTheme() {
        let newTheme = this.state.activeTheme
        newTheme.palette.type == 'dark' ? newTheme.palette.type = 'light' : newTheme.palette.type = 'dark'
        this.setState({ theme: newTheme })
    }

    render() {
        const { activeTheme } = this.state;
        const divStyle = {
            marginTop: "20px",
            marginBottom: '200px'
        }

        console.log("Changed palette to " + activeTheme.palette.type)

        return (
            <div>
                <ThemeProvider theme={activeTheme}>
                    <CssBaseline />
                    <CustomAppBar />
                    <Container style={{ marginTop: '100px', marginBottom: '1000px' }}>
                        <ScrollableSection hash={'about'} id='about'>
                            <div style={divStyle}>
                                <AboutMe />
                            </div>
                        </ScrollableSection>

                        <ScrollableSection hash={'experience'} id='experience'>
                            <div style={divStyle}>
                                <Experience />
                            </div>
                        </ScrollableSection>

                        <ScrollableSection hash={'skills'} id='skills'>
                            <div style={divStyle}>
                                <Skills />
                            </div>
                        </ScrollableSection>
                        <ScrollableSection hash={'portfolio'} id='portfolio'>
                            <div style={divStyle}>
                                <Portfolio />
                            </div>
                        </ScrollableSection>
                    </Container>
                </ThemeProvider>
            </div>
        );
    }
}

export default withTranslation()(Main);