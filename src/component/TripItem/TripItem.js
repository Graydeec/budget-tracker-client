import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import { getUserInfo } from "../../api";
import { useDispatch } from "react-redux";
import { TRIP_CURRENT } from "../../constants/actionTypes";
import { deleteTrip } from "../../actions/trip";

const TripItem = ({ trip }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [creatorName, setCreatorName] = useState("");
  const { name, createdAt, creator, _id } = trip;

  useEffect(() => {
    async function fetchData() {
      const info = await getUserInfo(creator);

      setCreatorName(info?.data?.existingUser?.name);
    }
    fetchData();
  }, [creator]);

  const handleRedirect = (e, id) => {
    e.stopPropagation();
    dispatch({ type: TRIP_CURRENT, payload: id });
    history.push(`/trip/${trip._id}`);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteTrip(id));
  };

  return (
    <div className={classes.card} onClick={(e) => handleRedirect(e, _id)}>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="h6">{creatorName}</Typography>
      <Typography variant="h6">Created at: {createdAt}</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => handleDelete(e, trip._id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default TripItem;
