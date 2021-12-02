import { Box, Typography, Grid } from "@mui/material";

import CollegeList from "./list";
import apiData from "./data";
import Header from "./header";

export default function DisplayCountryData() {
  const data = apiData;
  function getRand() {
    return (
      new Date().getTime().toString() + Math.floor(Math.random() * 1000000)
    );
  }
  return (
    <Box>
      <Header />
      <Box fullWidth>
        <Typography margin={4} className="heading" color="#4169e1" variant="h2">
          Find your dream College!
        </Typography>
        <Grid container spacing={2} padding="1rem">
          {data.map((value) => {
            return (
              <Grid item md={4} xs={6} key={getRand()}>
                <CollegeList value={value} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
