import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center"
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: "100%",

    maxWidth: 600,
    overflow: "hidden",
    width: "100%"
  }
}));
