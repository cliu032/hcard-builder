import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { UnderlinedTitle } from "./UI/UnderlinedTitle";
import { DebouncedInput } from "./DebouncedInput";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(8),
    backgroundColor: theme.palette.background.paper,
  },
  heading: {
    color: theme.palette.secondary.dark,
  },
  button: {
    fontSize: "100%",
  },
  fileInput: {
    display: "none",
  },
}));

export const CardBuilder = ({ title, user, setUser }) => {
  const classes = useStyles();

  const handleFirstNameChange = useCallback(
    (value) => {
      setUser((user) => ({
        ...user,
        firstName: value,
      }));
    },
    [setUser]
  );

  const handleLastNameChange = useCallback(
    (value) => {
      setUser((user) => ({
        ...user,
        lastName: value,
      }));
    },
    [setUser]
  );

  const handleEmailChange = useCallback(
    (value) => {
      setUser((user) => ({
        ...user,
        email: value,
      }));
    },
    [setUser]
  );

  const handlePhoneChange = useCallback(
    (value) => {
      setUser((user) => ({
        ...user,
        phone: value,
      }));
    },
    [setUser]
  );

  const handleNumberChange = useCallback(
    (value) => {
      setUser((user) => ({
        ...user,
        number: value,
      }));
    },
    [setUser]
  );

  const handleStreetChange = useCallback(
    (value) => {
      setUser((user) => ({
        ...user,
        street: value,
      }));
    },
    [setUser]
  );

  const handleSuburbChange = useCallback(
    (value) => {
      setUser((user) => ({
        ...user,
        suburb: value,
      }));
    },
    [setUser]
  );

  const handleStateChange = useCallback(
    (value) => {
      setUser((user) => ({
        ...user,
        state: value,
      }));
    },
    [setUser]
  );

  const handlePostcodeChange = useCallback(
    (value) => {
      setUser((user) => ({
        ...user,
        postcode: value,
      }));
    },
    [setUser]
  );

  const handleCountryChange = useCallback(
    (value) => {
      setUser((user) => ({
        ...user,
        country: value,
      }));
    },
    [setUser]
  );

  const handleUpload = useCallback(
    (e) => {
      if (e.target.files.length) {
        setUser((user) => ({
          ...user,
          avatar: URL.createObjectURL(e.target.files[0]),
        }));
      }
    },
    [setUser]
  );

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Typography variant="h1" gutterBottom>
          {title}
        </Typography>
      </div>
      <UnderlinedTitle>PERSONAL DETAILS</UnderlinedTitle>
      <form noValidate>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <DebouncedInput
              label={"GIVEN NAME"}
              defaultValue={user?.firstName}
              onChange={handleFirstNameChange}
            />
          </Grid>
          <Grid item xs={6}>
            <DebouncedInput
              label={"SURNAME"}
              defaultValue={user?.lastName}
              onChange={handleLastNameChange}
            />
          </Grid>
          <Grid item xs={6}>
            <DebouncedInput
              label={"EMAIL"}
              defaultValue={user?.email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={6}>
            <DebouncedInput
              label={"PHONE"}
              defaultValue={user?.phone}
              onChange={handlePhoneChange}
            />
          </Grid>
        </Grid>
      </form>

      <UnderlinedTitle>ADDRESS</UnderlinedTitle>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <DebouncedInput
            label={"HOUSE NAME OR #"}
            defaultValue={user?.number}
            onChange={handleNumberChange}
          />
        </Grid>
        <Grid item xs={6}>
          <DebouncedInput
            label={"STREET"}
            defaultValue={user?.street}
            onChange={handleStreetChange}
          />
        </Grid>
        <Grid item xs={6}>
          <DebouncedInput
            label={"SUBURB"}
            defaultValue={user?.suburb}
            onChange={handleSuburbChange}
          />
        </Grid>
        <Grid item xs={6}>
          <DebouncedInput
            label={"STATE"}
            defaultValue={user?.state}
            onChange={handleStateChange}
          />
        </Grid>
        <Grid item xs={6}>
          <DebouncedInput
            label={"POSTCODE"}
            defaultValue={user?.postcode}
            onChange={handlePostcodeChange}
          />
        </Grid>
        <Grid item xs={6}>
          <DebouncedInput
            label={"COUNTRY"}
            defaultValue={user?.country}
            onChange={handleCountryChange}
          />
        </Grid>
        <Grid item xs={6}>
          <div>
            <input
              type="file"
              accept="image/*"
              id="upload-avatar"
              className={classes.fileInput}
              onChange={handleUpload}
            />
            <label htmlFor="upload-avatar">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                component="span"
              >
                <Typography variant="button">Upload Avatar</Typography>
              </Button>
            </label>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary" fullWidth>
            <Typography variant="button">Create hCard</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
