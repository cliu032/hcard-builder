import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    paddingBottom: 3,
    color: theme.palette.text.disabled,
    borderBottom: "1px solid #bdc5c8",
  },
}));

export const UnderlinedTitle = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5">{children}</Typography>
    </div>
  );
};
