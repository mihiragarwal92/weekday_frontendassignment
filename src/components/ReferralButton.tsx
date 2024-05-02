import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const ReferralButton = () => {
  return (
    <Button
      sx={{
        height: 40,
        backgroundColor: "#0930cf",
        borderRadius: "20px",
        fontWeight: 500,
        color: "white",
        textTransform: "none",
        fontSize: 16,
        gap: 1,
        "&:hover": {
          backgroundColor: "#2ebaf6 ",
        },
      }}
    >
      <Avatar
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{ width: 25, height: 25, filter: "blur(1px)" }}
      />{" "}
      <Avatar
        src="https://mui.com/static/images/avatar/3.jpg"
        sx={{ width: 25, height: 25, filter: "blur(2px)" }}
      />{" "}
      Unlock referral asks
    </Button>
  );
};

export default ReferralButton;
