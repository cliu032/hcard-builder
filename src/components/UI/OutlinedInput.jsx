import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  label: {
    marginBottom: 2,
    color: theme.palette.secondary.dark,
  },
}));

export const OutlinedInput = ({ label, ...rest }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.label}>
        <Typography variant="h3">{label}</Typography>
      </div>
      <TextField
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        fullWidth
        {...rest}
      />
    </>
  );
};
