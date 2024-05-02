import { FC } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 700,
  width: "70%",
  bgcolor: "background.paper",
  p: "16px",
  fontFamily: "Lexend, sans-serif",
  height: "70%",
  maxHeight: 600,
  overflow: "auto",
  borderRadius: "40px",
  outline: "solid 0px",
};

interface Props {
  open: boolean;
  onClose: () => void;
  details: string;
}

const JobDescriptionModal: FC<Props> = ({ open, onClose, details }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <p style={{ textAlign: "center", fontSize: 20, marginTop: 0 }}>
          Job Description
        </p>
        <p style={{ marginBottom: 0 }}>About the Company:</p>
        <p style={{ marginTop: 0 }}>About us</p>
        <span style={{ fontWeight: 300 }}>{details}</span>
        <span style={{ fontWeight: 300 }}>{details}</span>
        <span style={{ fontWeight: 300 }}>{details}</span>
        <span style={{ fontWeight: 300 }}>{details}</span>
      </Box>
    </Modal>
  );
};

export default JobDescriptionModal;
