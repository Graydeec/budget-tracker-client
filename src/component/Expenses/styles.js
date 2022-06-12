import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    minHeight: "20vw",
    maxHeight: "40vw",
  },
  paper: {
    padding: theme.spacing(2),
  },
  text: {
    margin: theme.spacing(0, 0, 2),
  },
  title: {
    flexGrow: 1,
  },
}));
