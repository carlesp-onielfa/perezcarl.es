import React, { Component } from "react";
import Experience from "./Experience";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Typography} from '@material-ui/core'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


export default function Main(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
      <HashRouter>
          <div>
          <Typography variant="h1" component="h1">
            Carles Pérez Onielfa
          </Typography>
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="About me" />
              <Tab label="Experience" />
              <Tab label="Contact" />
            </Tabs>
          </Paper>
          <div className="content">
              <Route exact path="/" component={AboutMe}/>
              <Route path="/experience" component={Experience}/>
              <Route path="/contact" component={Contact}/>
          </div>
          </div>
      </HashRouter>
    );
}


//old navigation code
/*
<ul className="header">
  <li><NavLink to="/">About me</NavLink></li>
  <li><NavLink to="/experience">Experience</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
</ul>
*/