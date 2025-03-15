import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./NotificationModal.css";

export default function BasicModal({ openModal }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="notification-modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Berhasil
          </Typography>

          <Typography
            id="modal-modal-description"
            style={{ marginTop: "10px" }}
          >
            Tebakanmu Benar. Selamat Ya!
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
