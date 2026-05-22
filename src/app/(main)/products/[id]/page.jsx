"use client";

import { use, useState, useEffect } from 'react';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import useStore from '../../../../features/home/LinkMediaCard';

export default function ProductPage({ params }) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const itemid = use(params);
    const incrItems = useStore(state => state.incrItems);
    useEffect(() => {
        (async () => {
            if (!itemid) return;
            try {
                const res = await fetch(`https://tasteful-angel-9db2a6bb3b.strapiapp.com/api/items?filters[id][$eq]=${itemid.id}&populate=*`);
                const response = await res.json();
                setItem(response.data[0] || null);
            } catch (error) {
                console.error("Failed to fetch: ", error);
            } finally {
                setLoading(false);
            }
        })();
    }, [itemid]);

    return (
        (!loading && item) ? (
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Grid container spacing={4}>
                    <Grid xs={12} md={6}>
                        <Card
                            variant="outlined"
                            sx={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bg: 'grey.50',
                                borderRadius: 2,
                                minHeight: 300,
                                backgroundColor: '#f8f9fa',
                                borderStyle: 'dashed'
                            }}
                        >
                            <Typography variant="subtitle1" color="text.secondary">

                                <Image src={item.Image?.formats?.medium?.url || item.Image?.url} alt={item.Name} width="550" height="200" sizes="(max-width: 500px) 100vw, 500px"
                                    style={{
                                        width: 'auto'
                                    }} loading="eager" />
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Chip
                                    label={item.Brand}
                                    color="primary"
                                    variant="outlined"
                                    size="small"
                                    sx={{ fontWeight: 'bold' }}
                                />
                                <Typography variant="body2" color="text.secondary">
                                    Model: {item.Model}
                                </Typography>
                            </Box>

                            <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
                                {item.Name}
                            </Typography>


                            <Divider />

                            <Box sx={{ my: 1 }}>
                                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                    Description
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                                    {item.Description?.[0]?.children?.[0]?.text || ""}
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 1 }} />

                            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={incrItems}
                                    startIcon={<ShoppingCartIcon />}
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        fontWeight: 'normal'
                                    }}
                                >
                                    ADD TO CART
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        ) : (
            <Box sx={{ display: 'flex', padding: '10px' }}>
                <Skeleton
                    variant="rectangular"
                    sx={{
                        width: {
                            xs: '100%', // Mobile
                            sm: '80%',  // Tablets
                            md: '60%',  // Desktop
                        },
                        height: 150
                    }}
                />
            </Box>
        )
    );
}
