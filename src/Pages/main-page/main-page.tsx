import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  makeStyles,
  Theme,
  createStyles,
  useTheme
} from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { useStyles } from "./style";
import { ComplexBtn } from "../../Components/complex-button/complex-button";
import { PictureSwipeable } from "../../Components/stepper/mobile-stepper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { HoverWindow } from "../../Components/hover-window/hover-window";

export const MainPage: FC<RouteComponentProps> = ({ history, match }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <Box
        width="80%"
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="space-evenly"
      >
        <HoverWindow />
        <PictureSwipeable />
      </Box>
      <Button
        variant="outlined"
        color="secondary"
        className={isMobile ? classes.buttonMobile : classes.button}
      >
        Secondary
      </Button>
      <ComplexBtn />
    </>
  );
};

{
  /* <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List> */
}
