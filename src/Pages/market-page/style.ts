import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      alignContent: "flex-start",
      padding: "15px"
    },
    leftPart: {
      display: "flex",
      flexDirection: "column"
    },
    shortcut: {
      display: "flex",
      width: "98%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      marginBottom: "10px",
      opacity: 0.5
    },
    itemDetailList: {
      padding: "0 5px",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignContent: "center"
    }
  })
);
