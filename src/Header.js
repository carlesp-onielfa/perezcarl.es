import React from "react"
import { Trans } from "react-i18next";
import {Typography} from "@material-ui/core";
import i18next from "./i18n";

export default function Header(){
    const width = window.innerWidth;
    const headerText = "Carles Pérez Onielfa";
    console.log(width)
    if (width > 768) {
        console.log(width)
        return(
            <Typography variant="h2" component="h1" color = "primary" style={{margin:'20px'}}>
                {headerText}
                <Trans>Welcome</Trans>
            </Typography>
        );
    }
    else{
        return(
            <Typography variant="h3" component="h1" color = "primary" style={{margin:'20px'}}>
                {headerText}
            </Typography>
        );
    }
}