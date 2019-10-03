import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Trans } from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h2">
          <Trans>Portfolio</Trans>
        </Typography>
        <Typography component="p">
          WIP
        </Typography>
      </Paper>
   </div>
  );
}