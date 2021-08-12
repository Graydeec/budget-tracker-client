import React, { useEffect } from "react";
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import Expense from "./Expense/Expense";
import useStyles from "./styles";
import * as actionType from "../../constants/actionTypes";

const Expenses = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const createData = (name, amount, payer, numofpeople) => {
    return { name, amount, payer, numofpeople };
  };

  const rows = [
    createData("SuperMarket", 30.99, "Billy", 6),
    createData("Toll", 16.44, "Kelly", 5),
    createData("Airbnb", 12.32, "Shuyi", 6),
    createData("Food", 123.21, "Shuyi", 6),
    createData("SuperMarket", 30.99, "Billy", 6),
    createData("Toll", 16.44, "Kelly", 5),
    createData("Airbnb", 12.32, "Shuyi", 6),
    createData("Food", 123.21, "Shuyi", 6),
    createData("SuperMarket", 30.99, "Billy", 6),
    createData("Toll", 16.44, "Kelly", 5),
    createData("Airbnb", 12.32, "Shuyi", 6),
    createData("Food", 123.21, "Shuyi", 6),
  ];

  useEffect(() => {
    dispatch({ type: actionType.EXPENSE_FETCH_ALL, payload: rows });
  }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.text} variant="h3">
          Expenses
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Amount</StyledTableCell>
                <StyledTableCell>Payer</StyledTableCell>
                <StyledTableCell>#People</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <StyledTableRow key={row.name + idx}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.amount}</StyledTableCell>
                  <StyledTableCell>{row.payer}</StyledTableCell>
                  <StyledTableCell>{row.numofpeople}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Expenses;
