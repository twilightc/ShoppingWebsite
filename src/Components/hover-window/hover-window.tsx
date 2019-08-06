import React, { FC } from "react";
import { useStyles } from "./style";

const dummylist1 = [
  { name: "電腦及周邊產品", number: 1 },
  { name: "手機", number: 2 },
  { name: "家電及影音產品", number: 3 },
  { name: "相機、攝影機", number: 4 },
  { name: "生活用品", number: 4 }
];

export const HoverWindow: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.palm}>
      <ul className={classes.root}>
        {dummylist1.map((list, index) => (
          <li key={list.name}>
            <div>{list.name}</div>
            {index === 0 && (
              <ul>
                <li>電腦</li>
                <li>電腦周邊</li>
                <li>零件</li>}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
