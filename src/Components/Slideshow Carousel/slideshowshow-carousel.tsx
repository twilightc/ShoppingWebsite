import React, { FC } from "react";
import { classes } from "./style";
import img1 from "https://i.imgur.com/Z9rJ27g.jpg";
import img2 from "https://i.imgur.com/Yd6v5NE.jpg";

const slides = [img1, img2];

export const ShowCarousel: FC = () => {


    return (<div className={classes.container}>
        <div className={classes.header}>Automatic Slideshow Carousel</div>
        <div className={classes.main}>
            <Slideshow slides={slides} />
        </div>
        <div className={classes.footer}>Built in React - by Ashwanth A R</div>
    </div>);
}
