export type TextItem = {
    type: 'text';
    content: string;
  };
  
  export type ImageItem = {
    type: 'image';
    src: string;
    alt: string;
  };
  
  export type GridItem = TextItem | ImageItem;