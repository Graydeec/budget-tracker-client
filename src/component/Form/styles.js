import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(2),
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(236,175,203,1) 22%, rgba(234,175,203,1) 38%, rgba(199,206,222,1) 68%, rgba(191,213,226,1) 75%, rgba(175,226,234,1) 88%)",
    padding: theme.spacing(5),
  },
  form: {
    margin: theme.spacing(2, 0, 0),
    display: "flex",
    "& > *": {
      margin: theme.spacing(1, 0, 0),
    },
  },
  payerField: {
    display: "flex",
  },
}));
