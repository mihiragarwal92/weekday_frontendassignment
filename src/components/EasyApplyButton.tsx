import { Button } from "@mui/material";

const EasyApplyButton = () => {
  return (
    <Button
      sx={{
        height: 40,
        backgroundColor: "#77d2f9",
        borderRadius: "20px",
        fontWeight: 500,
        color: "black",
        textTransform: "none",
        fontSize: 16,
        "&:hover": {
          backgroundColor: "#55efc4",
        },
      }}
    >
      ⚡ Easy Apply
    </Button>
  );
};

export default EasyApplyButton;
