import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import BodyGrid from './bodyComponents/BodyGrid'
import BodyBanner from './bodyComponents/BodyBanner';
import { gridItems } from '@/Data/gridItems';
import { GridItem } from '@/types/types';

const items: GridItem[][] = [
  [
    gridItems[0],
    gridItems[1],
    gridItems[2],
  ],
  [
    gridItems[3],
    gridItems[4],
    gridItems[5],
  ]
];

const Body = () => {
  return (
    <Container maxWidth="lg" sx={{backgroundColor: "#000000"}}>
      <BodyBanner/>
      <CssBaseline />
      <BodyGrid items={items}/>
    </Container>
  );
};

export default Body;