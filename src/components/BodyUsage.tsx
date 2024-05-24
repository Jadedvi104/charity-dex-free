import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from "next/image";

const Body = () => {
  return (
    <Container maxWidth="lg" sx={{backgroundColor: "#000000"}}>
      {/* 16:9 Banner */}
      <Box
        sx={{
          width: '100%',
          height: 0,
          paddingBottom: '56.25%', // 16:9 ratio
          backgroundColor: '#ccc', // Placeholder color for banner
          marginBottom: 4
        }}
      >
        {/* Add your banner content/image here */}
        <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={1080}
            height={768}
            priority
          />
      </Box>

      {/* Grid of 6 blocks */}
      <Grid container spacing={4}>
        {["Swap", "Pools", "Bridge"].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <Box
              sx={{
                height: 200,
                backgroundColor: '#eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ fontWeight: 'bold', fontFamily: 'sans-serif', color: "green" }}
              >
                {item}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Body;