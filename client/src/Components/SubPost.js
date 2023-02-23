// import dependencies
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import Store from "./Store";

const SubPost = (props) => {
  const store = Store();
  return (
    <Box display="flex" p={2} justifyContent="center">
      <Card>
        <CardContent>
          <Typography variant="h5"> {props.date.split(" ")[1]}</Typography>
          <Typography> {props.date.split(" ")[0]}</Typography>
          <Box flex={2} p={2}>
            <Box
              display="flex"
              justifyContent="center"
              marginTop={2}
              marginBottom={1}
            >
              <Stack direction="column">
                {/* <Typography>{props.date.split(" ")[1]}</Typography> */}
                <Stack direction="row">
                  <Typography variant="h3">{props.temp}</Typography>
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
                    {props.feels_like}
                  </Typography>
                  <Stack direction="column">
                    <Typography>o</Typography>
                    <Typography variant="h6">c</Typography>
                  </Stack>
                </Stack>
                <Typography>{props.sky}</Typography>
              </Stack>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SubPost;
