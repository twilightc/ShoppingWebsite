import React from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useStyles } from './breadcrumb';



export default function CustomSeparator() {
    const classes = useStyles();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        alert('You clicked a breadcrumb.');
    }


    return (
        <div className={classes.root}>
            <Paper elevation={0} className={classes.paper}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="Breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Material-UI
          </Link>
                    <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                        Core
          </Link>
                    <Typography color="textPrimary">Breadcrumb</Typography>
                </Breadcrumbs>
            </Paper>
        </div>
    );
}