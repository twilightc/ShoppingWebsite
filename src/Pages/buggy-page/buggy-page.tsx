import React, { FC } from "react";
import { useStyles } from "./style";
import { Box, Divider, Checkbox, Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export const BuggyPage: FC = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      flexWrap="nowrap"
      alignItems="center"
    >
      <Box bgcolor="#ffffff" height="60%" width="80%" borderRadius="10px">
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          fontSize="18px"
          height="75px"
          paddingLeft="20px"
        >
          向賣家(seller 1)購買以下商品:
        </Box>
        <Divider className={classes.divider} />
        <Box>
          <div className={classes.root}>
            <List component="nav">
              <ListItem className={classes.listItem}>
                <Checkbox
                  checked={state.checkedF}
                  onChange={handleChange("checkedF")}
                  value="checkedF"
                  indeterminate
                  inputProps={{
                    "aria-label": "indeterminate checkbox"
                  }}
                />
                <ListItemText primary="商品" />
                <ListItemText primary="詳細規格" />
                <ListItemText primary="單價" />
                <ListItemText primary="購買數量" />
                <ListItemText primary="金額" />
              </ListItem>
              <Divider />
              {/* using loop to print out */}
              <ListItem className={classes.listItem}>
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange("checkedB")}
                  value="checkedB"
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox"
                  }}
                />
                <ListItemText primary="小丁z" />
              </ListItem>
              <Divider />
              <ListItem className={classes.listItem}>
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange("checkedA")}
                  value="checkedA"
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox"
                  }}
                />
                <ListItemText primary="如果能重來 我要生出來" />
              </ListItem>
            </List>
          </div>
        </Box>
        <Divider className={classes.divider} />
        <Box
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          fontSize="18px"
          height="75px"
        >
          <Button variant="outlined" color="primary" className={classes.button}>
            取消這筆購買
          </Button>
          <p>
            總金額: <span className={classes.redfont}>$10000</span>
          </p>
          <Button variant="outlined" color="primary" className={classes.button}>
            購買
          </Button>
        </Box>
      </Box>
      {/* <Box bgcolor="#ffffff" height="60%" width="100%">
        <Box>向賣家(seller 2)購買以下商品</Box>
      </Box> */}
    </Box>
  );
};
