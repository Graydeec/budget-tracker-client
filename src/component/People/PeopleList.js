import React, { useState } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Modal,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

import People from "./People/People";
import { createPerson } from "../../actions/person";
import useStyles from "./styles";

const PeopleList = ({ updateData }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState("");
  const [peopleName, setPeopleName] = useState("");
  const peopleList = useSelector((state) => state.person.persons);
  const tripid = useSelector((state) => state.trip.trip);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setPeopleName(e.target.value);
  };

  const handleOpenModal = (modeValue = "") => {
    setModalOpen(!modalOpen);
    setMode(modeValue);
  };

  const handleAddPerson = () => {
    dispatch(createPerson({ name: peopleName, tripId: tripid }));
    setPeopleName("");
    handleOpenModal("add");
  };

  if (modalOpen && mode === "delete" && peopleList.length === 0) {
    setModalOpen(false);
  }

  return (
    <div>
      <Paper className={classes.root}>
        <Modal
          className={classes.modal}
          open={modalOpen}
          onClose={handleOpenModal}
        >
          {mode === "add" ? (
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
          ) : (
            <div className={classes.modalContent}>
              <Grid container spacing={2}>
                {peopleList?.map((p) => (
                  <Grid item xs={3}>
                    <People key={p._id} person={p} editMode={true} />
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </Modal>
        <Typography variant="h6">People</Typography>
        <div className={classes.list}>
          <Avatar onClick={() => handleOpenModal("add")}>+</Avatar>
          {peopleList.length !== 0 && (
            <Avatar onClick={() => handleOpenModal("delete")}>-</Avatar>
          )}
          {peopleList?.map((p) => (
            <People key={p._id} person={p} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default PeopleList;
