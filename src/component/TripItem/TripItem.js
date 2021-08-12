import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import { userInfo } from "../../api";
import { useDispatch } from "react-redux";
import { TRIP_CURRENT } from "../../constants/actionTypes";

const TripItem = ({ trip }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [creatorName, setCreatorName] = useState("");
  console.log(trip, "trip");
  const { name, createdAt, creator, _id } = trip;

  useEffect(async () => {
    console.log("creator", creator);
    const info = await userInfo({ id: creator });
    setCreatorName(info?.data?.existingUser.name);
  });

  const handleRedirect = (id) => {
    dispatch({ type: TRIP_CURRENT, payload: id });
    history.push("/trip");
  };

  return (
    <div className={classes.card} onClick={() => handleRedirect(_id)}>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="h6">{creatorName}</Typography>
      <Typography variant="h6">Created at: {createdAt}</Typography>
    </div>
  );
};

export default TripItem;
