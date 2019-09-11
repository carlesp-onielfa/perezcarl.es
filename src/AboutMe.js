import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import profile from './images/profile.jpg'
import { Trans } from "react-i18next";
import { CardMedia, CardContent , Card} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
  },
  media: {
    height: 500,
  },
}))

export default function AboutMe() {
    const classes = useStyles();
    return (
      <div>
        <Card >
            <CardMedia className={classes.media}
              image={profile}
            />
            <CardContent className={classes.root}>
              <Typography variant="h4" component="h2">
                <Trans>About me</Trans>
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography>
            </CardContent>
        </Card>
     </div>
    );
}