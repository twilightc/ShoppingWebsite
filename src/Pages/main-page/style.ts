import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    button: {
      right: "40px",
      position: "fixed",
      bottom: 0
    },
    buttonMobile: {
      right: 0,
      position: "fixed",
      bottom: 0
    },
    input: {
      display: "none"
    }
  })
);
