import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    borderBottom: "1px solid #bdc5c8",
    display: "flex",
    alignItems: "flex-end",
    minHeight: "1.8rem",
  },
  label: {
    color: theme.palette.secondary.dark,
    minWidth: theme.spacing(12),
    lineHeight: "1.2rem",
  },
}));

export const UnderlinedDetail = ({ label, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.label} variant="h3">
        {label}
      </Typography>
      <Typography variant="h4">{children}</Typography>
    </div>
  );
};
