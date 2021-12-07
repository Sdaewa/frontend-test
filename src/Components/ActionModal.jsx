import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Typography, Modal } from '@mui/material';
import { openSlot } from '../slice';
import { eatChoc } from '../slice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const actionModal = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onOpen = () => {
    dispatch(
      openSlot({
        day: props.day,
      })
    );
    handleOpen();
  };

  const onEat = () => {
    dispatch(
      eatChoc({
        day: props.day,
      })
    );
    handleClose();
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  const handleSave = () => {
    handleClose();
    setTimeout(() => {
      window.location.reload(false);
    }, 1000);
  };

  const itsTime = () => {
    let today = new Date().toLocaleString().split(',')[0];
    if (today >= props.date) {
      return false;
    } else {
      return true;
    }
  };

  const status = props.status;

  return (
    <div>
      {status === 'open' ? (
        <Button onClick={onEat}>Eat</Button>
      ) : (
        <Button disabled={itsTime(props.date)} onClick={onOpen}>
          Open
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You have 1 chocolate, what would you like to do?
          </Typography>
          <Button onClick={onEat}>Eat</Button>
          <Button onClick={handleSave}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default actionModal;
