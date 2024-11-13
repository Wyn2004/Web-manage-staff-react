import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteStaff, getAllStaff } from "../apis/StaffServices";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

  const handleCreateClick = () => {
    navigate("/dashboard/create");
  };

  const handleEdit = (staff) => {
    navigate("/dashboard/update", { state: { staff } });
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteStaff(id);
      if (response?.status === 200) {
        setStaffs((prevStaff) => prevStaff.filter((staff) => staff.id !== id));
        Swal.fire({
          title: "Delete Successful!",
          text: `Deleted staff successfully.`,
          icon: "success",
          confirmButtonText: "OK",
          timer: 2000,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Delete failed!",
        text: `Delete staff failed.`,
        icon: "error",
        confirmButtonText: "OK",
        timer: 2000,
        timerProgressBar: true,
      });
      console.log(error);
    }
  };

  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      html: `Are you delete this staff?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Cancelled reject booking!", "error");
      }
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      align: "center",
      width: 100,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 120,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <img
          src={params.row.avatar}
          alt={params.row.name}
          style={{ width: "100px", height: "120px" }}
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 270,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "address",
      headerName: "Address",
      width: 210,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 210,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "createdAt",
      headerName: "CreateAt",
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <span>{dayjs(params.row.createdAt).format("YYYY-MM-DD HH:mm")}</span>
      ),
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => (
        <div className="flex items-center justify-center gap-2 h-full">
          <Button
            variant="contained"
            color="primary"
            size="small"
            className="w-[7vw]"
            startIcon={<EditIcon />}
            onClick={() => handleEdit(params.row)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className="w-[7vw]"
            startIcon={<DeleteIcon />}
            onClick={() => handleDeleteClick(params.row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Box padding={1}>
      <Typography variant="h4" marginBottom={2}>
        Staff Management
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={handleCreateClick}
      >
        Create Staff
      </Button>
      <Paper sx={{ height: 550, width: "100%" }}>
        <DataGrid
          rows={staffs}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
          rowHeight={120}
        />
      </Paper>
    </Box>
  );
};

export default DashBoard;
