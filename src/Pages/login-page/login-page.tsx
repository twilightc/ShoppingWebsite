import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style";
import Button from "@material-ui/core/Button";

export const LoginPage: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.palm}>
        <div className={classes.formRegion}>
          <img
            src="https://i.imgur.com/bkSACyj.png"
            alt="pepe the frog"
            height="300"
            width="300"
          />
          <TextField
            id="standard-textarea"
            label="Account"
            placeholder="Placeholder"
            multiline
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-textarea"
            label="With placeholder multiline"
            placeholder="Placeholder"
            multiline
            className={classes.textField}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            會員登入
          </Button>
          <div className={classes.btnfield}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              成為會員
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              忘記密碼?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
