import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      opacity: 0.75,
      paddingLeft: "15px"
    },
    paper: {
      display: "flex",
      padding: theme.spacing(1, 2)
    }
  })
);
