import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Button,
  Card,
  Typography,
  Modal,
  TextField,
  Grid,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import TripItem from "../TripItem/TripItem";
import { getTrips, createTrip, deleteTrip } from "../../actions/trip";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import useStyle from "./styles";

const initialFormData = { name: "", date: "", creator: "", users: [] };
const User = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const trips = useSelector((state) => state.trip.trips);
  const dispatch = useDispatch();
  const classes = useStyle();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    console.log(trips);
  }, [trips]);

  const handleChange = (e) => {
    setFormData({ ...formData, date: getToday(), name: e.target.value });
  };

  const handleAddTrip = () => {
    dispatch(createTrip(formData));
    handleOpenModal();
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  if (user?.result?.name) {
    return (
      <div>
        <Container component="main" maxWidth="xl">
          <Paper className={classes.paper}>
            <Modal
              className={classes.modal}
              open={openModal}
              onClose={handleOpenModal}
            >
              <div className={classes.modalContent}>
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Enter a name for the trip"
                  onChange={handleChange}
                  fullWidth
                />
                <div className={classes.modalButtons}>
                  <Button
                    onClick={handleAddTrip}
                    variant="contained"
                    color="primary"
                  >
                    Add
                  </Button>
                  <Button
                    onClick={handleOpenModal}
                    variant="contained"
                    color="secondary"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Modal>
            <Typography variant="h4" className={classes.welcomeText}>
              Welcome Back! {user?.result.name.toUpperCase()}
            </Typography>
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={handleOpenModal}
            >
              <AddCircleOutlineOutlinedIcon className={classes.buttonIcon} />{" "}
              Trip
            </Button>

            <Button onClick={() => dispatch(getTrips())}>FetchTrips</Button>
            <div>
              {trips?.map((trip, idx) => (
                <Card key={idx} className={classes.tripItem}>
                  <TripItem trip={trip} />
                </Card>
              ))}
            </div>
          </Paper>
        </Container>
      </div>
    );
  }

  return <div>Please sign in to view your account</div>;
};

export default User;

const getToday = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
};
