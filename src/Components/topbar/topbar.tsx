import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { useStyles } from "./style";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { LoginForm } from "../login-form/login-form";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const CustomizeTopbar: FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const toBuggyPage = () => {
    history.push("/buggypage");
  };

  const toLogin = () => {
    history.push("/login");
  };

  return (
    <div className={classes.topbar}>
      <div className={classes.wrap}>
        <div className={classes.queryinfo}>
          訪客，您好
          <LoginForm /> 或
          <Button href="#text-buttons" className={classes.button}>
            加入會員
          </Button>
        </div>
        <div className={classes.user}>
          {/* can add the stylebadge due to the amounts of items in the buggy */}
          <IconButton aria-label="Cart" onClick={toBuggyPage}>
            <ShoppingCartIcon />
          </IconButton>

          <div className={classes.dropitem}>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick}
              className={classes.topbarbtn}
            >
              Open Menu
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem onClick={toLogin}>
                <ListItemText primary="登入會員" />
              </StyledMenuItem>

              <StyledMenuItem>
                <ListItemText primary="登出" />
              </StyledMenuItem>
            </StyledMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Topbar = withRouter(CustomizeTopbar);
