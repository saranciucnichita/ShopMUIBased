import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea'; 
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function MediaCard({ item, desc, image, href, setItem }) {
  const { t } = useTranslation();

  return (
    <Card sx={{
      maxWidth: 345, display: 'block', margin: '10px', padding: '10px', width: '100%', display: 'flex',
      flexDirection: 'column'
    }}>
      <CardActionArea
        component={Link}
        href={href}
      >
        <CardMedia
          sx={{ height: 240, backgroundSize: 'contain', marginTop: '10px' }}
          image={image}
          title="Product"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {item}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" onClick={() => setItem(item => item + 1)}>
          {t('home.promo_desc.cart')}
        </Button>
      </CardActions>
    </Card>
  );
}