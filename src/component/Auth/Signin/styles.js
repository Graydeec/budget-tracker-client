import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justify: "center",
  },
  textfield: {
    margin: theme.spacing(1),
  },
  button: { margin: theme.spacing(1) },
  label: {
    margin: theme.spacing(1),
  },
  text: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
  },
  avatar: {
    alignSelf: "center",
  },
}));
