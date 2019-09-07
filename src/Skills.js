import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Paper, Tab, Tabs, Box} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import { Trans } from "react-i18next";
import SkillCards from "./SkillCards";
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

//Object containing the data
const skills = {
  //Spoken languages
  langs:{
    title: 'Spoken Languages',
    maxLevel: 4,
    values: {
      'English' : {
        level: 3,
        levelDesc: 'High',
        acreditation: 'Cambridge Advanced Certificate (Grade A)',
      },
      'German' : {
        level: 2,
        levelDesc: 'Medium',
        acreditation: 'A2',
      },
      'Catalan' : {
        level: 4,
        levelDesc: 'Native'
      },
      'Spanish' : {
        level: 4,
        levelDesc: 'Native'
      }
    }
  },
  //Programing languages
  programmingLangs:{
    title: 'Programming Languages',
    maxLevel: 3,
    values:{
      'C#':{
        level: 3
      },
      'Java':{
        level: 3
      },
      'Python':{
        level: 3
      },
      'Javascript':{
        level: 2
      },
      'C/C++':{
        level: 2
      },
      'Kotlin':{
        level: 2
      },
      'Shell Scripting':{
        level: 2
      },
    }
  },
  //Libraries and Frameworks
  libraries:{
    title: "Libraries and Frameworks",
    maxLevel: 3,
    values: {
      'Scrapy':{
        level: 3
      },
      'React':{
        level: 2
      },
    }
  },
  //Programs and tools
  tools:{
    title: 'Programs and Tools',
    maxLevel: 3,
    values: {
      'Amazon web services':{
        level: 2
      },
      'Blender 3D':{
        level: 2
      },
      'Unity 3D':{
        level: 2
      },
      'Adobe Photoshop':{
        level: 3
      },
      'Adobe Illustrator':{
        level: 2
      },
    }
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      hidden={value !== index}
      {...other}
    >
      <SkillCards {...other}/>
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Skills() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div>
      <Paper>
        <Typography variant="h4" component="h2" style={{padding : '20px'}}>
          <Trans>Skills</Trans>
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="auto"
          variant="fullWidth"
          centered
        >
          {Object.keys(skills).map((value, index) => (
                <Tab label={t(skills[value]['title'])} disableFocusRipple/>
          ))}
        </Tabs>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {Object.keys(skills).map((key, index) => (
          <TabPanel value={value} index={index} dir={theme.direction} skillSection = {skills[key]}/>
        ))}
      </SwipeableViews>
   </div>
  );
}