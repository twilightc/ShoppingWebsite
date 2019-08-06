import React, { FC, useState } from "react";

interface IProps {
  src: string;
  defaultImg: string;
  className?: string;
  width?: string;
  height?: string;
  alt?: string;
}

export const ImgContainer: FC<IProps> = props => {
  const [imgSrc, setImgSrc] = useState(props.src);

  const changeImgSrcToDefault = () => setImgSrc(props.defaultImg);

  return (
    <img
      src={imgSrc}
      onError={changeImgSrcToDefault}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
};
