import React from "react";
import { Typography, Paper } from "@material-ui/core";

import People from "./People/People";
import useStyles from "./styles";

const PeopleList = () => {
  const classes = useStyles();

  const peopleList = ["John", "Billy", "Kelly", "Shuyi"];
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography variant="h6">People</Typography>
        <div className={classes.list}>
          {peopleList?.map((people, idx) => (
            <People key={idx} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default PeopleList;
