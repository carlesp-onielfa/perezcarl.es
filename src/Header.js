import React from "react"
import {Typography, AppBar, IconButton, Toolbar, MenuItem, Menu} from "@material-ui/core";
import {Translate, InvertColors} from "@material-ui/icons";
import i18next from "./i18n";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,

    },
  }));

export default function Header(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const headerText = "Carles Pérez Onielfa";

    function handleClickLang(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }
    function changeLang(lang){
        handleClose()
        i18next.changeLanguage(lang)
    }

    return(
        <div>
            <Toolbar>
                <Typography variant="h2" component="h1" className={classes.title} color = 'primary' style={{margin:'20px'}}>
                    {headerText}
                </Typography>
                <IconButton className={classes.menuButton} color="inherit" aria-controls="lang-menu" aria-haspopup="true" onClick={handleClickLang}>
                    <Translate />
                </IconButton>
                <Menu
                    id="lang-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={()=>changeLang('en')}>English</MenuItem>
                    <MenuItem onClick={()=>changeLang('es')}>Español</MenuItem>
                    <MenuItem onClick={()=>changeLang('cat')}>Català</MenuItem>
                </Menu>
                

                <IconButton className={classes.menuButton} color="inherit" aria-label="darkmode">
                    <InvertColors />
                </IconButton>    
            </Toolbar>
        </div>
    );
}