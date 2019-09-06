import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import 'typeface-roboto';
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import { teal, orange } from "@material-ui/core/colors";
//import "./index.css";

const globalTheme = createMuiTheme({
  palette:{
    type: 'dark',
    primary: teal,
    secondary : orange,
  },
})
const theme = createMuiTheme({
  palette : globalTheme.palette,
});


ReactDOM.render(
  <ThemeProvider theme = {theme}> 
  <CssBaseline/>
    <Main/>
  </ThemeProvider>
  , 
  document.getElementById("root")
);