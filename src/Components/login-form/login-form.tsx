import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import { useStyles } from "./style";
import IconButton from "@material-ui/core/IconButton";

export const LoginForm: FC = () => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>會員登入</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <IconButton aria-label="vintage">
          <FilterVintageIcon />
        </IconButton>
        {/* <DialogTitle id="form-dialog-title" /> */}
        <DialogContent>
          <DialogContentText>請登入以繼續</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="account"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            沒有帳號? 註冊
          </Button>
          <Button onClick={handleClose} color="primary">
            登入
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
