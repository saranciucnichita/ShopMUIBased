"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ListItemButton from "@/features/home/ListItemButton.jsx";
import styles from './About.module.css';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HeadsetIcon from '@mui/icons-material/Headset';
import WashMashineIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import TvIcon from '@mui/icons-material/TvOutlined';
import WatchIcon from '@mui/icons-material/WatchOutlined';
import MediaCard from "@/features/home/MediaCard.tsx";
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import ScrollTop from "@/features/home/ScrollTopButton.tsx";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';

export default function HomeComponent() {
  const { t } = useTranslation();
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    (async () => {
      try {
        const res = await fetch('https://tasteful-angel-9db2a6bb3b.strapiapp.com/api/items?populate=*');
        const response = await res.json();
        setItems(response.data || null);
      } catch (error) {
        console.error("Failed to fetch: ", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div style={{
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("/background.jpg")',
      minHeight: '100vh',
      backgroundSize: 'contain',
      backgroundRepeat: 'repeat',
      backgroundAttachment: 'fixed',
      padding: '40px',
    }}>
      <h1 id="back-to-top-anchor">{t('home.welcome_message')}</h1>
      <Box component="section" sx={{
        padding: '40px 100px',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',     /* Wrap to next line if screen is small */
        gap: '15px',
        justifyContent: 'center',
        '@media (max-width: 600px)': {
          padding: '0px',
        },
      }}>
        <ListItemButton icon={<SmartphoneIcon />}>{t('home.categories.smartphone')}</ListItemButton>

        <ListItemButton
          icon={<HeadsetIcon />}
        >{t('home.categories.headphones')}</ListItemButton>

        <ListItemButton
          icon={<WashMashineIcon />}
        >{t('home.categories.washing_machines')}</ListItemButton>

        <ListItemButton
          icon={<TvIcon />}
        >{t('home.categories.televisions')}</ListItemButton>

        <ListItemButton
          icon={<WatchIcon sx={{ fontSize: '32px' }} />}
        >{t('home.categories.smartwatches')}</ListItemButton>
      </Box>

      <div id={styles.sales}>
        <Image className={styles.banners} src="/sale.png" alt="Sale banner" width={1662} height={574} loading="eager" />
        <Image className={styles.banners} src="/sale2.jpg" alt="Second sale banner" width={2894} height={1006} />
      </div>

      <h1 id="special-offers">{t('home.special_offers')}</h1>
      {
        (!loading && (items !== null)) ? (
          <Grid container spacing={2} sx={{ justifyContent: 'center', '& > .MuiGrid-root': { display: 'flex' } }}> {/* spacing adds a gap between cards */}
            {items && items.map((item) => {
              const { Name, Brand, Model, Description, Image, id } = item;
              const descText = Description?.[0]?.children?.[0]?.text || "";
              const imageUrl = Image?.formats?.medium?.url || Image?.url;

              return (
                <Grid key={id} xs={12} sm={6} md={4}>
                  <MediaCard
                    title={`${Brand} ${Name} ${Model}`}
                    desc={descText}
                    image={imageUrl}
                    href={`/products/${id}`}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Skeleton variant="rounded" animation="wave" width="100%" height={118} />
        )
      }
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
