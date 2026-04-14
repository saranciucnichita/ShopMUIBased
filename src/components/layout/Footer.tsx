"use client";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const footerLinks = [
    { label: 'Promoții', url: '/promotions' },
    { label: 'Concursuri', url: '/contests' },
    { label: 'Livrare', url: '/shipping' },
    { label: 'Confidențialitate', url: '/policy' },
    { label: 'Întrebări', url: '/qa' },
];

const dark = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function Footer() {
    return (
        <>
            <Stack direction={{ xs: 'column', sm: 'row' }}
                sx={{ justifyContent: "space-evenly", alignItems: "flex-start" }}>
                <Box sx={{ display: 'grid', color: 'inherit', justifyItems: 'start', gap: 2, p: { xs: 2, md: 4, lg: 6 } }}>
                    <Typography variant="h5" component="div">
                        News
                    </Typography>
                    {footerLinks.map((item) => (
                        <Link key={item.label} href={item.url} underline="hover" color="inherit">
                            {item.label}
                        </Link>
                    ))}
                </Box>
                <Divider orientation="vertical" variant="middle" sx={{ borderColor: "common.white" }} flexItem />
                <Box sx={{
                    display: 'grid', color: 'inherit', p: { xs: 2, md: 4, lg: 6 },
                    gap: 1
                }}>
                    <Typography variant="h5" component="div" sx={{ mb: 0 }}>
                        Abonați-vă la mesajele noastre
                    </Typography>
                    <Typography variant="caption" component="div" sx={{ mb: 1 }}>
                        Rezumat lunar despre tehnologii noi
                    </Typography>
                    <ThemeProvider theme={dark}>
                        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" sx={{ input: { color: 'common.white' } }} />
                    </ThemeProvider>
                </Box>
            </Stack>

            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    color: 'inherit'
                }}
            >
                <Container>
                    <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
                        <IconButton color="inherit" aria-label="twitter">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="inherit" aria-label="instagram">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton color="inherit" aria-label="facebook">
                            <FacebookIcon />
                        </IconButton>
                    </Stack>
                    <Typography variant="body1" align="center">
                        Electro pentru toți
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="/">
                            Electro
                        </Link>{' '}
                        {new Date().getFullYear()}
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

{/* import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          My Website Footer
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://yourwebsite.com">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
*/}