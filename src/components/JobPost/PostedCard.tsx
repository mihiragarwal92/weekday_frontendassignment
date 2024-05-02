import { FC } from "react";
import { Card } from "@mui/material";

interface Props {
  days: number;
}

const PostedCard: FC<Props> = ({ days }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 50,
        fontSize: 12,
        p: "4px 8px",
        width: "fit-content",
      }}
    >
      &#9203;
      {`Posted 
      ${days} day${days > 1 ? "s" : ""} ago`}
    </Card>
  );
};

export default PostedCard;
