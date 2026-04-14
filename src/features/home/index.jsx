"use client";

import { useTranslation } from 'react-i18next';
import ListItemButton from "@/features/home/ListItemButton.jsx";
import styles from './About.module.css';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HeadsetIcon from '@mui/icons-material/Headset';
import WashMashineIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import TvIcon from '@mui/icons-material/TvOutlined';
import WatchIcon from '@mui/icons-material/WatchOutlined';
import MediaCard from "@/features/home/MediaCard.jsx";
import Grid from '@mui/material/Grid';
import Image from 'next/image'

import ScrollTop from "@/features/home/ScrollTopButton.jsx";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const setbackground = {
  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5)), url("/background.jpg")',
  minHeight: '100vh',
  backgroundSize: 'contain',
  backgroundRepeat: 'repeat',
  backgroundAttachment: 'fixed',
  padding: '40px',
};

export default function HomeComponent() {
  const { t } = useTranslation();

  return (
    <div style={setbackground}>
      <h1 id="back-to-top-anchor">{t('home.welcome_message')}</h1>
      <div id={styles.categories}>
        <ListItemButton icon={<SmartphoneIcon sx={{ fontSize: '32px' }} />}>{t('home.categories.smartphone')}</ListItemButton>

        <ListItemButton
          icon={<HeadsetIcon sx={{ fontSize: '32px' }} />}
        >{t('home.categories.headphones')}</ListItemButton>

        <ListItemButton
          icon={<WashMashineIcon sx={{ fontSize: '32px' }} />}
        >{t('home.categories.washing_machines')}</ListItemButton>

        <ListItemButton
          icon={<TvIcon sx={{ fontSize: '32px' }} />}
        >{t('home.categories.televisions')}</ListItemButton>

        <ListItemButton
          icon={<WatchIcon sx={{ fontSize: '32px' }} />}
        >{t('home.categories.smartwatches')}</ListItemButton>
      </div>
      <div id={styles.sales}>
        <Image className={styles.banners} src="/sale.png" alt="Sale banner" width={1662} height={574}/>
        <Image className={styles.banners} src="/sale2.jpg" alt="Second sale banner" width={2894} height={1006}/>
      </div>

      <h1 id="special-offers">{t('home.special_offers')}</h1>
      <Grid container spacing={2} sx={{ justifyContent: 'center', '& > .MuiGrid-root': { display: 'flex' } }}> {/* spacing adds a gap between cards */}
        <Grid>
          <MediaCard
            item="TV PANASONIC 4LJBT3"
            desc="Performant. Elegant. Brilliant."
            image="/static/images/cards/tvcard1.jpg"
            href="/products/tv/panasonic-4ljbt3"
          />
        </Grid>
        <Grid>
          <MediaCard
            item="TV KONKA OXM9C3YT9"
            desc={t('home.promo_desc.oxm9c3')}
            image="/static/images/cards/tvcard3.jpg"
            href="/products/tv/konka-oxm9c3yt9"
          />
        </Grid>
        <Grid>
          <MediaCard
            item="TV ROLSEN 4C9T7N"
            desc={t('home.promo_desc.4c9t7n')}
            image="/static/images/cards/tvcard2.jpg"
            href="/products/tv/rolsen-4c9t7n"
          />
        </Grid>
      </Grid>
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  )
}
