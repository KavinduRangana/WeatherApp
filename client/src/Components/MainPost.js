//import dependencies
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import Store from "./Store";

const MainPost = () => {
  const store = Store();
  return (
    <Box display="flex" p={2} justifyContent="center">
      <Box flex={1} maxWidth="80%">
        <Card sx={{ marginBottom: 3 }}>
          <CardHeader
            title="Current Weather"
            subheader={store.forcast[0].date.split(" ")[0]}
          />
          <CardContent>
            <Typography marginTop={-4}>{store.weather.city}</Typography>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box flex={2} p={2}>
                <Box
                  display="flex"
                  justifyContent="center"
                  marginTop={2}
                  marginBottom={1}
                >
                  <Stack direction="column">
                    <Stack direction="row">
                      <Typography variant="h3">
                        {store.weather.temp_min}
                      </Typography>
                      <Stack direction="column">
                        <Typography variant="h6" marginTop={-1}>
                          o
                        </Typography>
                        <Typography variant="h5">c</Typography>
                      </Stack>
                    </Stack>

                    <Stack direction="row" marginTop={2} marginLeft={0}>
                      <Typography marginTop={2} marginRight={2}>
                        Real Feel
                      </Typography>
                      <Typography variant="h4" marginTop={1}>
                        {store.weather.temp_min}
                      </Typography>
                      <Stack direction="column">
                        <Typography>o</Typography>
                        <Typography variant="h6">c</Typography>
                      </Stack>
                    </Stack>
                    <Typography>{store.weather.sky}</Typography>
                  </Stack>
                </Box>
              </Box>
              <Box flex={3} p={2}>
                <Stack
                  direction={{ xs: "column", sm: "column", md: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  marginTop={2}
                >
                  <Stack
                    direction="row"
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    display="flex"
                    justifyContent="center"
                  >
                    <Box flex={1} p={1}>
                      <Typography>temp_min</Typography>
                      <Typography>temp_max</Typography>
                      <Typography>pressure</Typography>
                      <Typography>humidity</Typography>
                    </Box>
                    <Box flex={1} p={1}>
                      <Typography>{store.weather.temp_min}</Typography>
                      <Typography>{store.weather.temp_max}</Typography>
                      <Typography>{store.weather.pressure}</Typography>
                      <Typography>{store.weather.humidity}</Typography>
                    </Box>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    display="flex"
                    justifyContent="center"
                  >
                    <Box flex={1} p={1}>
                      <Typography>sea_level</Typography>
                      <Typography>grnd_level</Typography>
                      <Typography>wind_speed</Typography>
                      <Typography>wind_gust</Typography>
                    </Box>
                    <Box flex={1} p={1}>
                      <Typography>{store.weather.sea_level}</Typography>
                      <Typography>{store.weather.grnd_level}</Typography>
                      <Typography>{store.weather.speed}</Typography>
                      <Typography>{store.weather.gust}</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default MainPost;
