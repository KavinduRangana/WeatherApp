// import dependencies
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import SearchAppBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <Box>
        <Toolbar display="flex" justifyContent="space-between">
          <Typography variant="h6">Weather Data</Typography>
        </Toolbar>
        <Divider />
        <Toolbar>
          <SearchAppBar />
        </Toolbar>
      </Box>
    </>
  );
};

export default Header;
