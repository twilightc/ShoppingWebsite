import React, { FC } from "react";
import { useStyles } from "./style";
import Box from "@material-ui/core/Box";
import { ImgContainer } from "../../Components/imgcontainer/imgcontainer";
import Divider from "@material-ui/core/Divider";

export const ItemPage: FC = () => {
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
          borderRadius="2px"
          mr={3}
        >
          <ImgContainer
            width="400px"
            height="500px"
            src={"https://i.imgur.com/d0MQ2T2.jpg"}
            defaultImg={"https://i.imgur.com//naWI0OR.jpg"}
          />
          {/* <img src="https://i.imgur.com//naWI0OR.jpg" alt="" /> */}
        </Box>
        <Box
          borderRadius="20px"
          height="500px"
          width="40%"
          display="flex"
          flexDirection="column"
          bgcolor="#ffffff"
          ml={3}
        >
          <div>商品價格</div>
          <Box>庫存數量</Box>
          <Box>銷售數量</Box>
          <Box>付款方式</Box>
          {/* an button with edit and plus/sub func*/}
          <Divider />
          <Box>購買數量</Box>
          {/* two btns of buy */}
          <Box />
        </Box>
      </Box>
      <Box
        width="90%"
        // height="90%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          mt={10}
          width="70%"
          // height="70%"
          display="flex"
          flexDirection="row"
          flexWrap="nowrap"
          borderRadius="2px"
          bgcolor="#ffffff"
        >
          爸爸我好冷，買就送小丁z四歲冥誕紀念套組
        </Box>
      </Box>
    </>
  );
};
