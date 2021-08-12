import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
    background: "linear-gradient(45deg, #5d9ff7 30%, #42e7e7 90%)",
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
  welcomeText: {
    marginBottom: theme.spacing(5),
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
  tripItem: {
    marginTop: theme.spacing(3),
  },
}));
