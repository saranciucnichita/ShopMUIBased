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

  const setbackground = {
    backgroundImage: 'url("/b.jpg")',
    height: '100vh',
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
    padding: '40px',
  };

export default function HomeComponent() {
    const { t } = useTranslation();

    return (
      <div style={setbackground}>
            <h1>{t('home.welcome_message')}</h1>
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
            <img className={styles.banners} src="/sale.png" alt="Sale banner"></img>
            <img className={styles.banners} src="/sale2.jpg" alt="Second sale banner"></img>
          </div>

            <h1>{t('home.special_offers')}</h1>

        <MediaCard
        item="TV PANASONIC 4LJBT3"
        desc="Performant. Elegant. Brilliant."
        image="/static/images/cards/tvcard1.jpg"
        />

        <MediaCard
        item="TV KONKA OXM9C3YT9"
        desc={t('home.promo_desc.oxm9c3')}
        image="/static/images/cards/tvcard3.jpg"
        />

        <MediaCard
        item="TV ROLSEN 4C9T7N"
        desc={t('home.promo_desc.4c9t7n')}
        image="/static/images/cards/tvcard2.jpg"
        />

      </div>
    )
}

