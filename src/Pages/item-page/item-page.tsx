import React, { FC } from "react";
import { useStyles } from "./style";
import Box from "@material-ui/core/Box";
import { ImgContainer } from "../../Components/imgcontainer/imgcontainer";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export const ItemPage: FC = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  const handleadding = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("add");
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="400px"
          height="500px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
          mr={1}
        >
          <ImgContainer
            width="400px"
            height="500px"
            src={"https://i.imgur.com/236iGBg.jpg"}
            defaultImg={"https://i.imgur.com/d0MQ2T2.jpg"}
          />
          {/* <img src="https://i.imgur.com//naWI0OR.jpg" alt="" /> */}
        </Box>
        <Box
          borderRadius="10px"
          height="500px"
          width="40%"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          bgcolor="aliceblue"
          ml={1}
          pl={3}
          fontSize={20}
        >
          <Box>
            商品價格:<h4 className={classes.redfont}> $28900</h4>
          </Box>
          <Box>庫存數量: 5</Box>
          {/* an input with edit and plus/sub func*/}
          <Box display="flex" flexDirection="row" flexWrap="nowrap">
            購買數量:
            <form className={classes.amountform}>
              <a href="#" onClick={handleadding} className={classes.amount}>
                -
              </a>
              <input type="text" className={classes.amountInput} />
              <a href="#" className={classes.amount}>
                +
              </a>
            </form>
          </Box>
          {/* two btns of buy */}
          <Box>付款方式:信用卡 貨到付款</Box>
          <Box>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
            >
              <ShoppingCartIcon />
              放入購物車
            </Button>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
            >
              立即結帳
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        // height="90%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          mt={5}
          width="62%"
          // height="70%"
          display="flex"
          flexDirection="row"
          flexWrap="nowrap"
          borderRadius="2px"
          bgcolor="#ffffff"
        >
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="商品資訊" />
              <Tab label="問與答" />
              <Tab label="購買狀況" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <img src="https://i.imgur.com/UfO9UB7.jpg" alt="#" />
              <img src="https://i.imgur.com/WJgNwH6.jpg" alt="#" />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </AppBar>
        </Box>
      </Box>
    </>
  );
};
