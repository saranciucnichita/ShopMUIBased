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
      const fetchData = async () => {
          try {
              const res = await fetch(`https://tasteful-angel-9db2a6bb3b.strapiapp.com/api/items?filters[id][$eq]=${params.id}&populate=*`);
              const response = await res.json();
              if (!response.ok) throw new Error('Network response was not ok');
              setItem(response.data || null);
          } catch (error) {
              console.error("Failed to fetch: ", error);
          } finally {
              setLoading(false);
          }
      };
      fetchData();
  }, [params.id]);

  return (
            (!loading && item) ? (
            <div>
                <h1>{item.Name}</h1>
                <p>{item.Brand} - {item.Model}</p>
            </div>
          ) : (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress aria-label="Loading…" />
          </Box>
      )
  );
}
