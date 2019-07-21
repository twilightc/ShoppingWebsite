
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        paper: {
            padding: theme.spacing(1, 2),
        },
    }),
);