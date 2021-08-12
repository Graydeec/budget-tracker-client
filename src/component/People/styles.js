import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
  },
  list: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));
