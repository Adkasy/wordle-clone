import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./NotificationModal.css";

export default function BasicModal({ openModal, wordleAnswer,numberOfGuess, isWin }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);
  
  function handleReload() {
    window.location.reload();
  }

  return (
    <>
      <Modal
        open={open}
      >
        <Box className="notification-modal">
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold"
            }}
          >
            {isWin ?
              "YEAAY CONGRATULATIONS! 😙" :
              "OOPS, SORRY... 😥"
            } 
          </Typography>

          <Typography
            id="modal-modal-description"
            style={{ marginTop: "10px" }}
          >
            {isWin ?
              `Your guess is correct, you managed to guess it in ${numberOfGuess} attempts.` :
              (
                <>
                  You're out of chances, the correct answer is{" "}
                  <span style={{ backgroundColor: "#18a4e0", color: "white", padding: "1.5px 5px", borderRadius: "4px" }}>
                    {wordleAnswer}
                  </span>.
                </>
              )
            }
          </Typography>
          
          <div style={{display: "flex", flexDirection: "row", gap: "25px", marginTop: "20px"}}>            
            <Button 
              onClick={handleReload} 
              variant="contained" 
              style={{ marginTop: "20px", width: "150px", height: "50px", backgroundColor: "#6aaa64" }}
            >
              Play Again
            </Button> 
            
            <Button 
              onClick={handleClose} 
              variant="contained" 
              style={{ marginTop: "20px", width: "150px", height: "50px", backgroundColor: "#e83a3a"}}
              >
              Close
            </Button>      
          </div>
        </Box>        
      </Modal>
    </>
  );
}
