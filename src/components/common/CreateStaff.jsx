import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { createStaff, updateStaff } from "../../apis/StaffServices";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

const CreateStaff = () => {
  const [staffData, setStaffData] = useState({
    name: "",
    address: "",
    age: "",
    avatar: "",
  });
  const navigate = useNavigate();
  const [nameError, setNameError] = useState(false);

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
    try {
      const response = await createStaff(staffData);
      console.log(response);

      if (response?.status === 201) {
        navigate("/dashboard");
        Swal.fire({
          title: "Create Successful!",
          text: `Create staff successfully.`,
          icon: "success",
          confirmButtonText: "OK",
          timer: 2000,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Create failed!",
        text: `Create staff failed.`,
        icon: "error",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
      console.error("Error creating staff:", error);
    }
  };

  return (
    <Box padding={2} className="flex justify-center my-auto">
      <Card className="w-[60vw]">
        <CardContent className="w-[60vw]">
          <Typography variant="h4" marginBottom={2}>
            Create Staff
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
              error={nameError}
              helperText={
                nameError
                  ? "Please enter your name (letters and spaces only)"
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
              disabled={nameError}
            >
              Create Staff
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateStaff;
