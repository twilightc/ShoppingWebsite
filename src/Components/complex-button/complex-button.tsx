import React, { FC } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./style";

const images = [
  {
    url: "/static/images/grid-list/breakfast.jpg",
    title: "Breakfast",
    width: "30%"
  },
  {
    url: "/static/images/grid-list/burgers.jpg",
    title: "Burgers",
    width: "30%"
  },
  {
    url: "/static/images/grid-list/camera.jpg",
    title: "Camera",
    width: "30%"
  }
];

export const ComplexBtn: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
};
