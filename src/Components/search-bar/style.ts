import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { width } from "@material-ui/system";

export const useStyles = makeStyles(
  createStyles({
    searchbar: {
      display: "flex",
      width: "80%",
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    root: {
      padding: "2px 4px",
      display: "flex",
      width: 400
    },
    input: {
      marginLeft: 8,
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4
    }
  })
);
