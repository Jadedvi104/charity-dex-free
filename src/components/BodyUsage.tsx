import React from 'react';
import Container from '@mui/material/Container';
import BodyGrid from './bodyComponents/BodyGrid'
import BodyBanner from './bodyComponents/BodyBanner';

const Body = () => {
  return (
    <Container maxWidth="lg" sx={{backgroundColor: "#000000"}}>
      <BodyBanner/>
      <BodyGrid/>
    </Container>
  );
};

export default Body;