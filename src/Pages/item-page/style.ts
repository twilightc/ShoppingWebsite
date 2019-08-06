import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    redfont: {
      display: "inline",
      color: "#ff0000",
      fontSize: "20px"
    },
    amountform: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap"
    },
    amount: {
      height: "29px",
      width: "29px",
      textAlign: "center",
      textDecoration: "none",
      backgroundColor: "#f2f2f2",
      border: "1px solid #d9d9d9",
      cursor: "pointer",
      hover: {
        color: "ff0000"
      }
    },
    amountInput: {
      width: "50px"
    },
    button: {
      marginLeft: "15px"
    }
  })
);
