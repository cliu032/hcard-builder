import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
}));

export const PageLayout = ({ left, right }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          {left}
        </Grid>
        <Grid item xs={12} md={6} className={classes.right}>
          {right}
        </Grid>
      </Grid>
    </div>
  );
};
