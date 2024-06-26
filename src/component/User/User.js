import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Button,
  Card,
  Typography,
  Modal,
  TextField,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import TripItem from "../TripItem/TripItem";
import { getUserTrips, createTrip } from "../../actions/trip";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import useStyle from "./styles";
import UserNotSignIn from "../Error/UserNotSignIn/UserNotSignIn";

const initialFormData = { name: "", createdAt: "", creator: "", creatorId: "" };
const User = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const trips = useSelector((state) => state.trip.trips);
  const dispatch = useDispatch();
  const classes = useStyle();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (user?.result?._id) dispatch(getUserTrips(user?.result?._id));
  }, [dispatch, user?.result?._id]);

  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleAddTrip = () => {
    dispatch(
      createTrip({
        ...formData,
        createdAt: getToday(),
        creator: user?.result?.name,
        creatorId: user?.result?._id,
      })
    );
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
                    type="submit"
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
            {trips?.length === 0 ? (
              <div className={classes.newUserField}>
                <Typography variant="h4" className={classes.newUserText}>
                  Add Your First Trip
                </Typography>
                <Button
                  className={classes.addBtn}
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={handleOpenModal}
                >
                  <AddCircleOutlineOutlinedIcon
                    className={classes.buttonIcon}
                  />{" "}
                  Trip
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  onClick={handleOpenModal}
                >
                  <AddCircleOutlineOutlinedIcon
                    className={classes.buttonIcon}
                  />{" "}
                  Trip
                </Button>
                {trips?.map((trip, idx) => (
                  <Card key={idx} className={classes.tripItem}>
                    <TripItem trip={trip} />
                  </Card>
                ))}
              </div>
            )}
          </Paper>
        </Container>
      </div>
    );
  }

  return <UserNotSignIn />;
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
