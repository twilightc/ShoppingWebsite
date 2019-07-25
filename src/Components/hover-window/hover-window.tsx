import React, { FC } from "react";
import { useStyles } from "./style";

const dummylist1 = [
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
      <ul className={classes.root}>
        {dummylist1.map(list1 => (
          <li key={list1.number}>
            <div>{list1.name}</div>
            <ul>
              <li>tes1</li>
              <li>tes2</li>
              <li>tes3</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
