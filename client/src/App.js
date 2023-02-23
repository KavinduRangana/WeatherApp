// import dependencies
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import Header from "./Components/Header";
import MainPost from "./Components/MainPost";
import SubPost from "./Components/SubPost";
import Store from "./Components/Store";

function App() {
  const store = Store();
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Container maxWidth="lg">
            <Stack>
              <Header />
              <MainPost />
              <Grid
                container
                coumns={{ xs: 1, sm: 4 }}
                display="flex"
                justifyContent="center"
              >
                <SubPost
                  temp={store.forcast[0].temp}
                  feels_like={store.forcast[0].feels_like}
                  date={store.forcast[0].date}
                  sky={store.forcast[0].sky}
                />
                <SubPost
                  temp={store.forcast[1].temp}
                  feels_like={store.forcast[1].feels_like}
                  date={store.forcast[1].date}
                  sky={store.forcast[1].sky}
                />
                <SubPost
                  temp={store.forcast[2].temp}
                  feels_like={store.forcast[2].feels_like}
                  date={store.forcast[2].date}
                  sky={store.forcast[2].sky}
                />
                <SubPost
                  temp={store.forcast[3].temp}
                  feels_like={store.forcast[3].feels_like}
                  date={store.forcast[3].date}
                  sky={store.forcast[3].sky}
                />
              </Grid>
            </Stack>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
