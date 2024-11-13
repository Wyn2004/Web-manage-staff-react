import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function StaffItem({
  avatar,
  name,
  age,
  createdAt,
  address,
  id,
}) {
  const navigate = useNavigate();
  const handleDetail = () => {
    const staff = {
      avatar: avatar,
      name: name,
      age: age,
      address: address,
      id: id,
      createdAt: createdAt,
    };
    navigate("/staff-detail", { state: { staff } });
  };

  return (
    <Card sx={{ maxWidth: 330 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={avatar}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Name: {name}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Address: {address}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Age: {age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDetail}>
          Detail
        </Button>
      </CardActions>
    </Card>
  );
}
