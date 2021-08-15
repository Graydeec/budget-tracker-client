import React, { useState } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Modal,
  TextField,
  Button,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

import People from "./People/People";
import { createPerson } from "../../actions/person";
import useStyles from "./styles";

const PeopleList = ({ updateData }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [peopleName, setPeopleName] = useState("");
  const peopleList = useSelector((state) => state.person.persons);
  const tripid = useSelector((state) => state.trip.trip);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPeopleName(e.target.value);
  };

  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleAddPerson = () => {
    dispatch(createPerson(tripid, { name: peopleName }));
    setPeopleName("");
    updateData();
    handleOpenModal();
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Modal
          className={classes.modal}
          open={modalOpen}
          onClose={handleOpenModal}
        >
          <div className={classes.modalContent}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Enter a name for the person"
              onChange={handleChange}
              fullWidth
            />
            <div className={classes.modalButtons}>
              <Button
                onClick={handleAddPerson}
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
        <Typography variant="h6">People</Typography>
        <div className={classes.list}>
          <Avatar onClick={handleOpenModal}>+</Avatar>
          {peopleList?.map((p, idx) => (
            <People key={idx} person={p} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default PeopleList;
