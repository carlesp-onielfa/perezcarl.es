import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import profile from './images/profile.jpg'
import { useTranslation } from "react-i18next";
import { CardMedia, CardContent , Card} from "@material-ui/core";
import { MdEmail, MdSchool} from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
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
    return (
      <div>
        <Card >
            <CardMedia className={classes.media}
              image={profile}
            />
            <CardContent className={classes.root}>
              <Typography variant="h4" component="h2">
                {t('About me')}
              </Typography>
              <br/>
              <div>
                <Typography variant='h6'>
                  <MdEmail  style={iconStyle}/> {t('email')}
                </Typography>
                <Typography variant='h6'>
                  <GoMarkGithub  style={iconStyle} /> <a href="https://github.com/carlesp-onielfa">Github</a>
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
     </div>
    );
}