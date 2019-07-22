import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { height } from "@material-ui/system";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topbar: {
      borderBottom: "1px solid #dcdcdc",
      height: "26px",
      width: "100%",
      backgroundColor: "#f3f3f3"
      // backgroundColor: theme.palette.background.paper
    },
    wrap: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "nowrap",
      lineHeight: "26px",
      margin: "0 auto"
    },
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    }
  })
);
