import { Card } from "@mui/material";

const LoadingCard = () => {
  return (
    <Card
      sx={{
        position: "fixed",
        p: "4px 8px",
        width: "100px",
        height: "30px",
        bottom: 10,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
      }}
    >
      Loading...
    </Card>
  );
};

export default LoadingCard;
