import React from "react";
import { Typography, GridList, Card,CardActions, CardContent, IconButton, GridListTile } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import clsx from 'clsx';
import {FiberManualRecord, FiberManualRecordOutlined, ExpandMore} from "@material-ui/icons";
import { Trans } from "react-i18next";

const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: 'left',
        alignItems: 'flex-start',
        marginTop:'5px'
    },
    paperLevel1: {
        background: theme.palette.text.primary
    },
    paperLevel2: {
        background: theme.palette.text.secondary,
        textColor: theme.palette.text.secondary,
    } ,
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
      },
    
  }));

function SkillLevelIcon({level, maxLevel = 3, color = 'primary'}){
    const classes = useStyles();
    console.log("LEVEL "+level+" MAXLEVEL "+maxLevel)
    return(
        <div className ={classes.root}>
            {[...Array(level).keys()].map(value => (
                <FiberManualRecord color = {color} style={{ fontSize: 16 }}/>
            ))}
            {[...Array(maxLevel-level).keys()].map(value => (
                <FiberManualRecordOutlined  color = {color} style={{ fontSize: 16 }}/>
            ))}
        </div>
    );
}

function SkillCard({title, data, maxLevel = 3, variant='h6'}){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return(
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5">
                        <Trans>{title}</Trans>
                    </Typography>
                    <SkillLevelIcon level = {data.level} maxLevel = {maxLevel}/>
                    <Typography variant="h7" color = 'textSecondary'>
                        <Trans>{data['levelDesc']}</Trans>
                        <br/>
                        <Trans>{data['acreditation']}</Trans>
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMore />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}

export default function SkillCards({skillSection}){
    console.log(Object.keys(skillSection.values))
    return(
        <div>
            <br/>
            <GridList cols = {4} spacing = {30}>
                {Object.keys(skillSection.values).map(value => (
                    <GridListTile key={value}>
                        <SkillCard title = {value} data = {skillSection.values[value]} maxLevel = {skillSection.maxLevel}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}