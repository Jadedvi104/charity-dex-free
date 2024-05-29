import React from 'react';
import { Grid as MuiGrid } from '@mui/material';
import { GridItem as GridItemType } from '@/types/types';
import GridItem from './BodyGridItem';

interface GridProps {
  items: GridItemType[][];
}

const BodyGrid: React.FC<GridProps> = ({ items }) => {
  return (
    <MuiGrid container spacing={2}>
    {items.map((row, rowIndex) => (
      <MuiGrid container item spacing={2} key={rowIndex}>
        {row.map((item, itemIndex) => (
          <MuiGrid item xs={12} sm={6} md={4} key={itemIndex}>
            <GridItem item={item} />
          </MuiGrid>
        ))}
      </MuiGrid>
    ))}
  </MuiGrid>
  );
};

export default BodyGrid;