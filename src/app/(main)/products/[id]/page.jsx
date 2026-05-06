"use client";
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function ProductPage() {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const fetchData = async() => {
            const { id } = await params;
            if (!id) return;
            try {
                const res = await fetch(`https://tasteful-angel-9db2a6bb3b.strapiapp.com/api/items?filters[id][$eq]=${id}&populate=*`);
                const response = await res.json();
                setItem(response.data[0] || null);
            } catch (error) {
                console.error("Failed to fetch: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [params]);

    return (
        (!loading && item) ? (
            <div>
                <h1>{item.Name}</h1>
                <p>{item.Brand} - {item.Model}</p>
            </div>
        ) : (
            <Box sx={{ display: 'flex', padding: '10px' }}>
                <CircularProgress aria-label="Loading…" />
            </Box>
        )
    );
}
