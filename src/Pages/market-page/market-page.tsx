import React, { FC } from "react";
import { useStyles } from "./style";
import { BreadcrumbInfo } from "../../Components/breadcrumbs/breadcrumbs";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { ItemDetail } from "../../Components/itemdetail/itemdetail";

const ListItemLink = (props: ListItemProps<"a", { button?: true }>) => {
  return <ListItem button component="a" {...props} />;
};

export const MarketPage: FC = () => {
  const classes = useStyles();

  return (
    <>
      <BreadcrumbInfo />
      <div className={classes.root}>
        {/* left part*/}
        <div className={classes.leftPart}>
          {/* nested list */}
          <div className={classes.shortcut}>
            <List component="nav" aria-label="Main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
          </div>
          {/* Maybe can use Grid List */}
          <div>
            <ItemDetail />
            <ItemDetail />
            <ItemDetail />
          </div>
        </div>
        {/* right part*/}
        <div className={classes.itemDetailList}>
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
          <ItemDetail />
        </div>
      </div>
    </>
  );
};
