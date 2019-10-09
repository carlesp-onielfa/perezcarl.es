import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import profile from './images/profile.jpg'
import { useTranslation } from "react-i18next";
import { CardMedia, CardContent , Card, Fade, Grow} from "@material-ui/core";
import { MdEmail, MdSchool} from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
import {FaArtstation} from "react-icons/fa";
import VizSensor from "react-visibility-sensor";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 3),
  },
  media: {
    height: 0,
    paddingTop: '42.86%'
  },
}))

export default function AboutMe() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const iconStyle = {marginRight:'12px', size:'1.7em', "vertical-align": "middle"}
    const [visible, setVisible] = React.useState(false);

    return (
      <div>
        <VizSensor onChange={(isVisible)=>{setVisible(!isVisible)}} partialVisibility>
          <Fade in={!visible} timeout={1000}>
            <Card >
                <Fade in={!visible} timeout={3000}>
                  <CardMedia className={classes.media}
                    image={profile}
                  />
                </Fade>
                <CardContent className={classes.root}>
                  <Typography variant="h4" component="h2">
                    {t('CARLES PÉREZ ONIELFA')}
                  </Typography>
                  <br/>
                  <div>
                    <Typography variant='h6'>
                      <MdEmail  style={iconStyle}/>
                      <Link href={"mailto:"+t('email')}>{t('email')}</Link>
                    </Typography>
                    <Typography variant='h6'>
                      <GoMarkGithub  style={iconStyle} />
                      <Link href={t('github')}>Github</Link>
                    </Typography>
                    <Typography variant='h6'>
                      <FaArtstation  style={iconStyle} />
                      <Link href={t('artstation')}>Artstation</Link>
                    </Typography>
                    <br/><br/>
                    <Typography variant='h6'>
                      <MdSchool style={iconStyle} /> {t('education')}
                    </Typography>
                  </div>
                  <br/>
                  {t("about description").split('\n').map(c => {
                      return (<Typography paragraph component="p"> {c} </Typography>)
                  })}
                  
                </CardContent>
            </Card>
          </Fade>
        </VizSensor>
     </div>
    );
}