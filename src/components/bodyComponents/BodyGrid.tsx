import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { gridItems } from '@/Data/gridItems';

const BodyGrid = () => {
  return (
      <Grid container spacing={0}>
        {gridItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Box
              sx={{
                mt: 8,
                height: 200,
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontSize: '5rem', fontWeight: 'bold', fontFamily: 'sans-serif', color: "#C2F2EF" }}
              >
                {item}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
  );
};

export default BodyGrid;