import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: "90vh",
    display: "flex",
  },
  contaner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: "60vh",
    textAlign: "center",
    color: "pink",
    margin: theme.spacing(0, 0, 3),
  },
}));
