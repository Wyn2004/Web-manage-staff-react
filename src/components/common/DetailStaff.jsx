import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getStaffById } from "../../apis/StaffServices";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/system";
import dayjs from "dayjs";

const DetailStaff = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { staff } = location.state || {};

  return (
    <div>
      <Grid container justifyContent="center" alignItems="center" padding={5}>
        <Card sx={{ maxWidth: 400 }}>
          <CardHeader
            avatar={<Avatar aria-label="recipe" src={staff?.avatar}></Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            variant="h1"
            title={<Typography variant="h6">Staff Information</Typography>}
          />
          <CardMedia
            component="img"
            className="h-[40vh] object-cover w-full"
            image={staff?.avatar}
            alt="avatar"
          />
          <CardContent>
            <Typography variant="body1" sx={{ color: "text.main" }}>
              Full Name: {staff?.name}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Address: {staff?.address}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Age: {staff?.age}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Create At: {dayjs(staff?.createdAt).format("DD-MM-YYYY")}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default DetailStaff;
