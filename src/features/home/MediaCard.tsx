import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea'; 
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

interface MediaCardProps {
  item: string;
  desc: string;
  image: string;
  href: URL;
}

export default function MediaCard({ item, desc, image, href }: MediaCardProps) {
  const { t } = useTranslation();

  return (
    <Card sx={{
      maxWidth: 345, margin: '10px', padding: '10px', display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.1s ease-in-out',
      '&:hover': {
        transition: 'transform 0.3s ease-in-out',
        transform: 'scale(1.05)',
      },
    }}>
      <CardActionArea
        component={Link}
        href={href}
        sx={{ flexGrow: 1 }}
      >
        <CardMedia
          component="img"
          sx={{ height: 240, objectFit: 'contain', marginTop: '10px' }}
          image={image}
          alt={`TV on sale ${item}`}
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
        <Button size="small" variant="outlined" startIcon={<AddShoppingCartIcon/>}>
          {t('home.promo_desc.cart')}
        </Button>
      </CardActions>
    </Card>
  );
}
