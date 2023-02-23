//import dependancies
import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { Button, TextField } from "@mui/material";
import Store from "./Store";

export default function SearchAppBar() {
  const store = Store();

  useEffect(() => {
    store.searchData();
  }, []);

  const handleSubmit = () => {
    store.searchData();
  };

  // const [data, setData] = useState([]);
  // const [state, setStates] = useState([]);
  // const [selectedOptions, setSelectedOptions] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
  //     )
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // //console.log(data);

  // const countries = [...new Set(data.map((item) => item.country))];
  // const cities = [...new Set(data.map((item) => item.name))];

  // const handleCountry = (e, value) => {
  //   setSelectedOptions(value);
  //   let states = data.filter((state) => state.country === selectedOptions);
  //   states = [...new Set(states.map((item) => item.name))];
  //   states.sort();
  //   setStates(states);
  // };

  //console.log("///////////////////////////////////////////");
  //console.log(cities);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar color="secondary">
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          name="searchKey"
          onChange={store.updateSearch}
          value={store.searchKey}
          sx={{ height: "40%" }}
        />

        <Button variant="outlined" color="inherit" onClick={handleSubmit}>
          Search
        </Button>
        {/* <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
          onChange={handleCountry}
        /> */}
      </Toolbar>
    </Box>
  );
}
