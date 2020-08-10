import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
} from "@material-ui/core";
import { UnderlinedDetail } from "./UI/UnderlinedDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(6),
    flexGrow: 1,
  },
  title: {
    position: "absolute",
    textAlign: "end",
    color: theme.palette.text.disabled,
    top: theme.spacing(2),
    right: theme.spacing(6),
  },
  card: {
    borderRadius: 0,
  },
  cardHeader: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    position: "relative",
    height: theme.spacing(8),
    alignItems: "flex-end",
  },
  headerAvatar: {
    position: "absolute",
    right: 0,
    top: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(11),
    height: theme.spacing(14),
  },
  cardContent: {
    padding: theme.spacing(3),
  },
}));

export const CardPreview = ({ user }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        HCARD PREVIEW
      </Typography>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              src={user?.avatar}
              variant="square"
              className={classes.avatar}
            />
          }
          title={
            <Typography variant="h2">
              {user.firstName} {user.lastName}
            </Typography>
          }
          classes={{
            avatar: classes.headerAvatar,
          }}
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <UnderlinedDetail label="EMAIL">{user.email}</UnderlinedDetail>
          <UnderlinedDetail label="PHONE">{user.phone}</UnderlinedDetail>
          <UnderlinedDetail label="ADDRESS">
            {user.number} {user.street}
          </UnderlinedDetail>
          <UnderlinedDetail>
            {user.suburb}
            {user.suburb && user.state ? ", " : ""}
            {user.state}
          </UnderlinedDetail>
          <Grid container>
            <Grid item xs={6}>
              <UnderlinedDetail label="POSTCODE">
                {user.postcode}
              </UnderlinedDetail>
            </Grid>
            <Grid item xs={6}>
              <UnderlinedDetail label="COUNTRY">
                {user.country}
              </UnderlinedDetail>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
