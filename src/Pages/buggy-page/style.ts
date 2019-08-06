import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      // maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    divider: {
      height: "5px"
    },
    redfont: {
      color: "#ff0000",
      fontSize: "20px"
    },
    listItem: {
      display: "flex",
      justifyContent: "space-evenly",
      fontSize: "16px"
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);
