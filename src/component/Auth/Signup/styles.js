import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    margin: theme.spacing(10, 0, 0),
  },
  header: {
    alignSelf: "center",
    margin: theme.spacing(3),
    fontFamily: "Sans-serif",
    fontWeight: "600",
  },
  button: {
    alignSelf: "center",
    marginTop: theme.spacing(1),
  },
  errorText: {
    alignSelf: "center",
    color: "red",
    margin: theme.spacing(2),
  },
  text: {
    alignSelf: "center",
    margin: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  modalContainter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 2),
    display: "flex",
    flexDirection: "column",
    width: "50vh",
  },
}));
