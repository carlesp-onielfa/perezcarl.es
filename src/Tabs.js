import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Tab, Tabs, Paper} from '@material-ui/core/';
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop : 0,
        marginTop:0,
      },
  }))

/**
 * Navigation tabs, scroll to desired hash on click, always visible at the top
 */
export default function NavTabs(){
    const [value, setValue] = React.useState(0);
    //Handle change in tab selection
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    //Scroll to desired hash with offset for the header
    const scrollWithOffset = (el, offset) => {
        const elementPosition = el.offsetTop - offset;
        window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
        });    
    }
    const headerSize = 60;
    const classes = useStyles();
    return(
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
                <Tab label="Skills" component={Link} to="#skills" scroll={el => scrollWithOffset(el, headerSize)}/>
                <Tab label="Contact" component={Link} to="#contact" scroll={el => scrollWithOffset(el, headerSize)}/>
            </Tabs>
        
        </Paper>
    );
}