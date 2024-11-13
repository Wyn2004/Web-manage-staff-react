import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { updateStaff } from "../../apis/StaffServices";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateStaff = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nameError, setNameError] = useState(false);
  const [nameErrorUppercase, setNameErrorUppercase] = useState(false);

  const { staff } = location.state || {};

  const [staffData, setStaffData] = useState({
    name: "",
    address: "",
    age: "",
    avatar: "",
  });

  useEffect(() => {
    if (staff) {
      setStaffData({
        name: staff.name || "",
        address: staff.address || "",
        age: staff.age || "",
        avatar: staff.avatar || "",
      });
    }
    setNameError(staff?.name?.split(" ").length <= 2);
    setNameErrorUppercase(staff?.name !== staff?.name.toUpperCase());
  }, [staff]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setNameErrorUppercase(value !== value.toUpperCase());
      setNameError(value.split(" ").length <= 2);
    }
    setStaffData({ ...staffData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nameError) {
      setFormValid(false);
      Swal.fire({
        title: "Validation Error!",
        text: "Please ensure the name is valid (more than 2 words) and to uppercase.",
        icon: "warning",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
      return;
    }
    try {
      const response = await updateStaff(staff.id, staffData);
      console.log(response);
      if (response?.status === 200) {
        navigate("/dashboard");
        Swal.fire({
          title: "Update Successful!",
          text: `Update staff successfully.`,
          icon: "success",
          confirmButtonText: "OK",
          timer: 2000,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Update failed!",
        text: `Update staff failed.`,
        icon: "error",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
      console.error("Error update staff:", error);
    }
  };

  return (
    <Box padding={2} className="flex justify-center my-auto">
      <Card className="w-[60vw]">
        <CardContent className="w-[60vw]">
          <Typography variant="h4" marginBottom={2}>
            Update Staff
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              label="Name"
              name="name"
              value={staffData.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              error={nameError || nameErrorUppercase}
              helperText={
                nameError || nameErrorUppercase
                  ? "Please enter your name (letters, spaces only and toUpperCase)"
                  : ""
              }
            />
            <TextField
              label="Address"
              name="address"
              value={staffData.address}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Age"
              name="age"
              type="number"
              value={staffData.age}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Avatar URL"
              name="avatar"
              value={staffData.avatar}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              disabled={nameError || nameErrorUppercase}
            >
              Update Staff
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UpdateStaff;
