import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minHeight: "20vm",
  },
  list: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2, 2, 1),
    },
    overflowX: "auto",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 2),
  },
  modalButtons: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(2, 2, 0),
    },
  },
  modalNameInput: {
    flexGlow: 1,
  },
}));
