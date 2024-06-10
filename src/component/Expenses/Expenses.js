import React from "react";
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
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { deleteExpense } from "../../actions/expense";

const Expenses = ({ tripId, expenses, handleEdit, updateData }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.person.persons);

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

  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
    updateData();
  };

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
                <StyledTableCell>Edit</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenses?.map((row, idx) => (
                <StyledTableRow key={row._id + idx}>
                  <StyledTableCell>{row?.description}</StyledTableCell>
                  <StyledTableCell>${row?.amount}</StyledTableCell>
                  <StyledTableCell>
                    {persons.find((p) => p._id === row.payer)?.name}
                  </StyledTableCell>
                  <StyledTableCell>{row?.persons?.length}</StyledTableCell>
                  <StyledTableCell>
                    <EditIcon onClick={() => handleEdit(row)} />
                    <DeleteIcon onClick={() => handleDelete(row._id)} />
                  </StyledTableCell>
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
