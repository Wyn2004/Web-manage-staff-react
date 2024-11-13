import React from "react";
import { Link, useLocation } from "react-router-dom";
import path from "../../utils/path";
import { AppBar, Toolbar, Stack, Button } from "@mui/material";
const Navigation = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} to={path.HOMEPAGE}>
            Home
          </Button>
          <Button color="inherit" component={Link} to={path.DASHBOARD}>
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to={path.CONTACT}>
            Contact
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
