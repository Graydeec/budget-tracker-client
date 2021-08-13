import React, { useState } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Modal,
  TextField,
  Button,
} from "@material-ui/core";

import People from "./People/People";
import useStyles from "./styles";

const PeopleList = ({ people }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [peopleList, setPeopleList] = useState(people);
  const [peopleName, setPeopleName] = useState("");
  const handleChange = (e) => {
    setPeopleName(e.target.value);
  };

  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleAddPerson = () => {
    setPeopleList([...peopleList, peopleName]);
    setPeopleName("");
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
            <People key={idx} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default PeopleList;
