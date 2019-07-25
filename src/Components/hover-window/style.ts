import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NONAME } from "dns";

export const useStyles = makeStyles(
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      color: "#FFFF33",
      "&>li": {
        listStyle: "none"
      },
      "&:hover": {
        color: "#33FFFF"
      }
    },
    windows: {}
  })
);
