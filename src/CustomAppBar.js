import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";
import { Tab, Tabs, Typography, AppBar, Toolbar, Collapse } from "@material-ui/core";
import { HashLink as Link } from 'react-router-hash-link';
import { pink } from "@material-ui/core/colors";
import { withTranslation } from 'react-i18next';
import { configureAnchors } from "./custom_scrollable-section";


class CustomAppBar extends React.Component {
    state = {
        activeTabIndex: 'about',
        visible: 'false'
    };
    
    navigate(newValue) {
        this.setState((prevState, props) => ({
            activeTabIndex: newValue
        }));
    }
    //Handle change in tab selection
    handleChange = (event, value) => {
        this.setState({ activeTabIndex: value });
    };
    //Scroll to desired hash with offset for the header
    scrollWithOffset(el, offset) {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
            top: elementPosition,
            left: 0,
            behavior: "smooth"
        });
    }
    render() {
        const isMobile = window.innerWidth <= 500;
        const headerSize = 100;
        configureAnchors({ offset: headerSize + 20, keepLastAnchorHash: true, onChange: (newValue) => this.navigate(newValue) })
        const NavTabs = () => (
            <BrowserRouter>
                <Tabs
                    value={this.state.activeTabIndex}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    scrollButtons="auto"
                    variant='scrollable'
                    scrollButtons='on'
                    style={{ flexGrow: '1' }}
                    TabIndicatorProps={{ style: { backgroundColor: pink[200] } }}
                >
                    <Tab style={{ height: "5em" }} label={this.props.t("About me")} value='about' disableFocusRipple component={Link} to="#about" scroll={el => this.scrollWithOffset(el, headerSize)} />
                    <Tab label={this.props.t("Experience")} value='experience' disableFocusRipple component={Link} to="#experience" scroll={el => this.scrollWithOffset(el, headerSize)} />
                    <Tab label={this.props.t("Skills")} value='skills' disableFocusRipple component={Link} to="#skills" scroll={el => this.scrollWithOffset(el, headerSize)} />
                    <Tab label={this.props.t("Portfolio")} value='portfolio' disableFocusRipple component={Link} to="#portfolio" scroll={el => this.scrollWithOffset(el, headerSize)} />
                </Tabs>
            </BrowserRouter>);
        return (
            <AppBar position='fixed'>
                <Toolbar style={{ flexGrow: 1 }}>
                    <div>
                        <Typography variant="h6" component="h1">
                            {"CARLES PÉREZ ONIELFA"}
                        </Typography>
                    </div>
                    {!isMobile && <NavTabs />}
                    <HeaderButtons />
                </Toolbar>
            </AppBar>
        );
    }
}

export default withTranslation()(CustomAppBar);