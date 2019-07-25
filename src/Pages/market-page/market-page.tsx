import React, { FC } from "react";
import { useStyles } from "./style";
import { BreadcrumbInfo } from "../../Components/breadcrumbs/breadcrumbs";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const ListItemLink = (props: ListItemProps<"a", { button?: true }>) => {
  return <ListItem button component="a" {...props} />;
};

export const MarketPage: FC = () => {
  const classes = useStyles();

  return (
    <>
      <BreadcrumbInfo />
      <div>MatketPage</div>
      {/* left part*/}
      <div>
        {/* nested list */}
        <div className={classes.root}>
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
      </div>
      {/* right part*/}
      <div>{/* almost use list to produce the data list */}</div>
    </>
  );
};
