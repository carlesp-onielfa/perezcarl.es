import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography, Box, Stepper, Step, StepButton, StepLabel,StepContent, SvgIcon} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import VizSensor from "react-visibility-sensor";
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles(theme => ({
  rootPaper: {
    padding: theme.spacing(3, 3),
  },
  root: {
    width: '100%',
  },
  stepButton:{
    icon:{
      minWidth:100,
    }
  }
}))
//Translations in i18n.js
function getSteps() {
  return {'experience 3 title':{
    time:'09/2018 - ',
    content: 'experience 3 desc'
  },
  'experience 2 title':
  {
    time:'07/2019 - 09/2019',
    content: 'experience 2 desc'
  },
  'experience 1 title':{
    time:'2015',
    content: 'experience 1 desc'
  }};
}

const useQontoStepIconStyles = makeStyles(theme =>({
  root: {
    background: theme.palette.grey['600'],
    borderRadius: 3,
    border: 0,
    padding: theme.spacing(.8,.8),
    color: 'white',
    boxShadow: 2,
  },
  active: {
    background: theme.palette.primary.main,
  },
  /* Styles applied to the SVG text element. */
  text: {
    fill: theme.palette.primary.contrastText,
    fontSize: theme.typography.caption.fontSize,
    fontFamily: theme.typography.fontFamily,
  },
}));

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, icon='year'} = props;
  return (
    <Box className={clsx(classes.root, {[classes.active]: active,})} >
      <Typography variant='caption' align='center'>
        {icon}
      </Typography>
    </Box>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};


function ExperienceStepper(){
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(-1);
  const steps = getSteps();
  const { t, i18n } = useTranslation();
  //CHANGE TO SELECT
  const handleStep = step => () => {
    setActiveStep(step);
  };
  console.log(activeStep)
  return(
    <div className={classes.root}>
      <VizSensor onChange={(isVisible)=>{if(isVisible && activeStep==-1) setActiveStep(0)}}> 
        <Stepper activeStep={activeStep} nonLinear orientation="vertical">
          {Object.keys(steps).map((label, index) => (
            <Step key={label}>
              <StepButton icon = {steps[label]['time']} onClick={handleStep(index)} >
                <StepLabel  StepIconComponent={QontoStepIcon} >
                  <Typography variant = 'h6' align='left'>{t(label)}</Typography>
                </StepLabel>
              </StepButton>
              <StepContent>
                {t(steps[label]['content']).split('\n').map((value)=>{
                  return <Typography paragraph align='justify'>{value}</Typography>;
                })}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </VizSensor>
    </div>
  );
}
export default function Experience(){
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = React.useState(false);
    return (
      <div>
        <VizSensor onChange={(isVisible)=>{setVisible(!isVisible)}} partialVisibility>
          <Fade in={!visible} timeout={1000}>
            <Paper className={classes.rootPaper}>
              <Typography variant="h4" component="h2">
                {t('Experience')}
              </Typography>
              <ExperienceStepper/>
            </Paper>
          </Fade>
        </VizSensor>
            
     </div>
    );
}