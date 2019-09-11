import React from "react";
import { Typography, Collapse, GridList, Card,CardActions, CardContent, IconButton, GridListTile } from "@material-ui/core";
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
    card:{
        marginBottom: '5px',
        padding: '0px'
    }
  }));

/**
 * Icons that represent current skill level
 * @param {*} level current level to represent
 * @param {*} maxLevel max skill level to represent
 * @param {*} color color of the icons
 */
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
/**
 * Card that represents one skill
 * @param {*} title Name of the skill
 * @param {*} data data containing the level of the skill, description . . .
 * @param {*} maxLevel maximum skill level (for the icon representation of the skill)
 * @param {*} variant typography variant
 */
function SkillCard({title, data, maxLevel = 3, variant='h6'}){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }
    let cardDesc;
    let cardActions
    //If it has description we add buttons
    //Should destinguish with length of text
    if(data.desc)
    {
        cardActions = (
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
        )
        cardDesc = (            
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography paragraph>
                    {data.desc}
                </Typography>
            </Collapse>
        );
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
                    </Typography>
                    {cardDesc}
                </CardContent>
                {cardActions}
                
            </Card>
        </div>
    );
}

/**
 * Represents a set of skills in the form of cards in a grid
 * @param {*} skillSection object containing the data for the skills
 */
export default function SkillCards({skillSection}){
    return(
        <div style={{padding:'20px',paddingBottom:'5px'}}>
            <GridList cols = {4} spacing = {30} cellHeight='auto'>
                {Object.keys(skillSection.values).map(value => (
                    <GridListTile key={value}>
                        <SkillCard title = {value} data = {skillSection.values[value]} maxLevel = {skillSection.maxLevel}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}