import React, { useEffect, useState } from "react";
import { StaffItem } from "../components";
import { getAllStaff } from "../apis/StaffServices";
import { Grid } from "@mui/system";
import { Typography } from "@mui/material";

const Home = () => {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllStaff = async () => {
      try {
        const response = await getAllStaff();
        console.log(response);
        response?.status === 200 && setStaffs(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllStaff();
  }, []);

  if (loading) return <p>Loading...</p>; // Hiển thị khi đang load dữ liệu
  if (error) return <p>Error: {error.message}</p>; // Hiển thị nếu có lỗi

  return (
    <div>
      <Typography variant="h4" padding={2}>
        Home Page
      </Typography>
      <Grid container spacing={2} padding={2} justifyContent="center">
        {staffs &&
          staffs.map((staff, index) => (
            <Grid xs={12} sm={6} md={3} key={index}>
              <StaffItem
                avatar={staff?.avatar}
                name={staff?.name}
                age={staff?.age}
                address={staff?.address}
                id={staff?.id}
                createdAt={staff?.createdAt}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Home;
