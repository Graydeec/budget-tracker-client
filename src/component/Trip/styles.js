import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    margin: theme.spacing(2, 2, 0),
    " & > *": {
      margin: theme.spacing(2, 2, 2),
    },
  },
  contentPanel: {
    display: "flex",

    padding: theme.spacing(1),
    "& > *": {
      margin: theme.spacing(2),
    },
  },

  form: { alignSelf: "end" },

  contentLeftPanel: { flexGrow: 1, "&> *": { margin: theme.spacing(0, 2, 2) } },
}));
