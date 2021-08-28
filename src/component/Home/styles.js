import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "pink",
    padding: theme.spacing(0, 5, 0),
  },
  welcomeText: {
    fontWeight: 600,
  },
}));
