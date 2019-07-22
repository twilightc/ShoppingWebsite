import React, { FC } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../search-bar/style";
import Tooltip from "@material-ui/core/Tooltip";

export const Searchbar: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.searchbar}>
      <img src="https://placem.at/things?w=300&h=110&random=hello" />
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Merchandise"
          inputProps={{ "aria-label": "Search Merchandise" }}
        />
        <Tooltip title="Search" aria-label="Search">
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Paper>
      <div />
    </div>
  );
};
