import React, { FC } from "react";
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { number } from "prop-types";
import { RouteComponentProps } from "react-router";
import { withRouter, Route } from "react-router-dom";

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7"
    }
  }
})((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />
));

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      color: "#fff",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      "&:focus": {
        opacity: 1
      }
    }
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    demo2: {
      backgroundColor: "hsla(120, 100%, 20%, 0.4)",
      marginBottom: "15px"
    }
  })
);

enum NavBarItem {
  Main,
  Market,
  Buggy
}

const CustomizeTab: FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    switch (newValue) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/market");
        break;
      case 2:
        history.push("/buggy");

        break;
      default:
        console.log("invaild change from custonizeTab in navbar.tsx");
        break;
    }
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="首頁" />
          <StyledTab label="市集" />
          <StyledTab label="下殺特區" />
        </StyledTabs>
      </div>
    </div>
  );
};

export const Navbar = withRouter(CustomizeTab);
