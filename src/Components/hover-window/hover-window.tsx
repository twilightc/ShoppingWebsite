import React, { FC } from "react";
import { useStyles } from "./style";

const dummydata = [
  { name: "flo", number: 1 },
  { name: "wer", number: 2 },
  { name: "whyjustgonnahappened", number: 3 },
  { name: "fatthickoilslipper", number: 4 },
  { name: "thin", number: 4 }
];

export const HoverWindow: FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        {dummydata.map(data => (
          <li key={data.name}>{data.name}</li>
        ))}
      </div>
    </>
  );
};
