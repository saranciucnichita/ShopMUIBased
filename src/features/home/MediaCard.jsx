import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';

export default function MediaCard({item, desc, image}) {
  const { t } = useTranslation();

  return (
    <Card sx={{ maxWidth: 345, display: 'inline-block', margin: '10px', padding: '10px', width: '100%'}}>
      <CardMedia
        sx={{ height: 240, backgroundSize: 'contain', marginTop: '10px'}}
        image={image}
        title="Product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">{t('home.promo_desc.cart')}</Button>
        <Button size="small">{t('home.promo_desc.go_to_item')}</Button>
      </CardActions>
    </Card>
  );
}