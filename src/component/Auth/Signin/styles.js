import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
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
  text: {
    alignSelf: "center",
    margin: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
}));
