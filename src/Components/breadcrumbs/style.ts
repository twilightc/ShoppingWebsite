import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      opacity: 0.75
    },
    paper: {
      padding: theme.spacing(1, 2)
    }
  })
);
