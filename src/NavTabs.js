import React from "react";
import {Tab, Tabs, Paper} from '@material-ui/core/';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
  
const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop : 0,
        marginTop:0,
        },
});

/**
 * Navigation tabs, scroll to desired hash on click, always visible at the top
 */
class NavTabs extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeTabIndex: props.value,
        };
    }
    
    navigate(newValue){
        this.state.activeTabIndex = newValue
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
    render()
    {
        const { classes } = this.props;
        const headerSize = 70;
        //const { activeTabIndex } = this.state;
        const tabs = (
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
        )

        
        return(
            <Paper className={classes.root}>       
                {tabs}
            </Paper>
        );
    }
}

NavTabs.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(NavTabs);