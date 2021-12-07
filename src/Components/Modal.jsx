// import React, { useState, useContext } from 'react';
// import {
//   Button,
//   TextField,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   CssBaseline,
// } from '@material-ui/core';

// const actionModal = () => {
//   const ctx = useContext(StateContext);
//   const [open, setOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const onChange = (e) => {
//     e.preventDefault();
//     const value = e.target.value;
//     setEmail(value);
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <CssBaseline />
//       <Button
//         variant="contained"
//         //   disabled={ctx.thereIsFile !== true ? true : false}
//         color="primary"
//         onClick={handleClickOpen}
//       >
//         Open
//       </Button>
//       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//         <DialogContent>
//           <DialogContentText>What would you like to do?</DialogContentText>
//           <TextField autoFocus margin="dense" onChange={onChange} fullWidth />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Save
//           </Button>
//           <Button
//             type="submit"
//             onClick={() => {
//               setIsLoading(true);
//               postEmail();
//               ctx.setIsDisabledOnUp(false);
//             }}
//             color="primary"
//           >
//             Munch
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default actionModal;
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
