import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { height } from "@material-ui/system";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topbar: {
      borderBottom: "1px solid #dcdcdc",
      height: "50px",
      width: "100%",
      backgroundColor: "#f3f3f3"
      // backgroundColor: theme.palette.background.paper
    },
    queryinfo: {
      display: "flex",
      paddingLeft: "5px",
      justifyContent: "center",
      alignItems: "center"
    },
    wrap: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      flexWrap: "nowrap",
      margin: "0 auto"
    },
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    },
    user: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap"
    },
    dropitem: {
      paddingTop: "5px",
      paddingRight: "5px"
    }
  })
);
