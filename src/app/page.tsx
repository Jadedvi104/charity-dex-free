import Header from "@/components/HeaderUsage";
import Body from "@/components/BodyUsage";
import Footer from "@/components/FooterUsage";
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <Header />
      <Body />
      <Footer />
    </Box>
  );
}
