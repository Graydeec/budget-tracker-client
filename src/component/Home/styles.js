import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    color: "pink",
    margin: theme.spacing(20, 0, 0),
    padding: theme.spacing(10),
  },
  welcomeText: {
    fontWeight: 600,
  },
}));
