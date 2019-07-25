import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { fontFamily, positions } from "@material-ui/system";
import { NONAME } from "dns";

export const useStyles = makeStyles(
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      // border: "#ccc 1px solid",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      fontFamily: "'Open Sans',Arial,sans-serif",
      fontSize: "14px",
      "&  li": {
        listStyle: "none",
        position: "relative",
        whiteSpace: "nowrap"
        // borderRight: "#ccc 1px solid",
      },
      "&:hover": {
        color: "#000"
      },
      "& div": {
        backgroundColor: "#fff",
        color: "#333",
        display: "flex",
        padding: "0 20px",
        textDecoration: "none",
        lineHeight: "50px"
      },
      "& div:hover": {
        backgroundColor: "#ef5c28",
        color: "#fff"
      },
      "& div:hover>div": {
        backgroundColor: "#ef5c28",
        color: "#fff"
      },
      "& ul": {
        margin: 0,
        padding: 0,
        display: "none",
        border: "#ccc 1px solid",
        position: "absolute",
        zIndex: 99,
        right: "-191px",
        top: 0,
        minWidth: "191px"
      },

      "& li:hover>ul": {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        fontFamily: "'Open Sans',Arial,sans-serif",
        backgroundColor: "#fff"
      },
      "& li:hover>ul>li:hover": {
        backgroundColor: "#ef5c28"
      },
      "& ul li": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "60px",
        borderBottom: "#ccc 1px solid"
      },
      "& ul li:last-child": {
        borderBottom: "none"
      }
    }
  })
);
