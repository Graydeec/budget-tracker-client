import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userField: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(0, 1, 0),
    },
  },
  button: {
    margin: theme.spacing(0, 1, 0),
  },
}));
