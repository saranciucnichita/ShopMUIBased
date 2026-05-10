"use client";

import { use, useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const itemid = use(params);

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
            <div>
                <h1>{item.Name}</h1>
                <p>{item.Brand} - {item.Model}</p>
                <p>{item.Description?.[0]?.children?.[0]?.text || ""}</p>
            </div>
        ) : (
            <Box sx={{ display: 'flex', padding: '10px' }}>
                <CircularProgress aria-label="Loading…" />
            </Box>
        )
    );
}

{/*"use client"
import { use, useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

async function getCachedData(item) {
  'use cache: remote'
  // Data fetching logic using the passed query
  const res = await fetch(`https://tasteful-angel-9db2a6bb3b.strapiapp.com/api/items?filters[id][$eq]=${item}&populate=*`);
  return res.json();
}

export default function ProductPage({ params }) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const itemid = use(params);
const data = getCachedData(itemid || 'default');
useEffect(() => {
setItem(data[0])
}, []);
    useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller.signal;
        (async () => {
            'use cache: remote';
            if (!itemid) return;
            try {
                const res = await fetch(`https://tasteful-angel-9db2a6bb3b.strapiapp.com/api/items?filters[id][$eq]=${itemid.id}&populate=*`, {signal});
                const response = await res.json();
                setItem(response.data[0] || null);
            } catch (error) {
                console.error("Failed to fetch: ", error);
            } finally {
                setLoading(false);
            }
        })();
        return() => controller.abort();
    }, [itemid]);

    return (
        (!loading && item) ? (
            <div>
                <h1>{item.Name}</h1>
                <p>{item.Brand} - {item.Model}</p>
                <p>{item.Description?.[0]?.children?.[0]?.text || ""}</p>
            </div>
        ) : (
            <Box sx={{ display: 'flex', padding: '10px' }}>
                <CircularProgress aria-label="Loading…" />
            </Box>
        )
    );
}
 */}
