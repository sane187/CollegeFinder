import * as React from "react";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import Stack from "@mui/material/Stack";
import "./header.css";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} className="nav">
      <AppBar position="static">
        <Toolbar className="menu">
          <Stack direction="row" alignItems="center">
            <IconButton
              className="icon"
              size="large"
              color="inherit"
              aria-label="menu"
            >
              <SchoolIcon />
            </IconButton>
            <Typography variant="h5" component="div" fontWeight="bold">
              College Finder
            </Typography>
          </Stack>
          <Stack spacing={1} direction="row">
            <Button variant="contained" className="btn">
              Services
            </Button>
            <Button className="btn" variant="contained">
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
