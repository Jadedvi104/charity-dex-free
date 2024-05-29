import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import MediumIcon from '@mui/icons-material/Article';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000000', padding: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Social Media Icons */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href="https://medium.com" target="_blank" rel="noopener" sx={{ marginRight: 2 }}>
                <MediumIcon fontSize="large" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener" sx={{ marginRight: 2 }}>
                <TwitterIcon fontSize="large" />
              </Link>
              <Link href="https://telegram.org" target="_blank" rel="noopener" sx={{ marginRight: 2 }}>
                <TelegramIcon fontSize="large" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener">
                <YouTubeIcon fontSize="large" />
              </Link>
            </Box>
          </Grid>

          {/* List of Pages */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Box sx={{ textAlign: 'right' }}>
                {/* <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                  Pages
                </Typography> */}
                <Link href="#" sx={{ display: 'block', marginTop: 1 }}>Help</Link>
                <Link href="#" sx={{ display: 'block', marginTop: 1 }}>Academy</Link>
                <Link href="#" sx={{ display: 'block', marginTop: 1 }}>About Us</Link>
                <Link href="#" sx={{ display: 'block', marginTop: 1 }}>Discord Support</Link>
                <Link href="#" sx={{ display: 'block', marginTop: 1 }}>Twitter Support</Link>
                <Link href="#" sx={{ display: 'block', marginTop: 1 }}>Forum Support</Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
