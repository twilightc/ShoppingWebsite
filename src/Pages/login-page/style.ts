import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { borderRadius, display } from "@material-ui/system";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    palm: {
      display: "flex",
      width: "40vw",
      height: "70vh",
      justifyContent: "center",
      alignItems: "Center",
      backgroundColor: "#fff",
      flexWrap: "wrap",
      opacity: 0.75,
      borderRadius: "10px",
      paddingBottom: "5px"
    },
    root: {
      width: "100%",
      height: "77vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "Center"
      // height: 250,
      // flexGrow: 1
    },
    container: {
      display: "flex",

      position: "relative"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "10vw"
    },
    formRegion: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    divider: {
      height: theme.spacing(2)
    },
    btnfield: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      margin: theme.spacing(3)
    }
  })
);
