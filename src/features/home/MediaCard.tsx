import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../i18n/i18n';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStore from './LinkMediaCard';

interface MediaCardProps {
  title: string;
  desc: string;
  image: string;
  href: URL;
}

export default function MediaCard({ title, desc, image, href }: MediaCardProps) {
  const { t } = useTranslation();
  const mode = useMediaQuery('(prefers-color-scheme: dark)');
  const incrItems = useStore(state => state.incrItems);
  const decrItems = useStore(state => state.decrItems);
  const count = useStore((state) => state.items);

  const activeCard = useStore((state) => state.activeCard);
  const setCard = useStore((state) => state.setCard);
  const isCardActive = activeCard === title;

  const handle = () => {
    incrItems();
    setCard(title);
  };

  return (
    <Card sx={{
      maxWidth: 345, margin: '10px', padding: '10px', display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.1s ease-in-out',
      '&:hover': {
        transition: 'transform 0.3s ease-in-out',
        transform: 'scale(1.05)',
      },
      backgroundColor: mode === true ? 'grey.900' : 'background.paper',
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
          alt={`TV on sale ${title}`}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: mode === true ? 'white' : 'inherit' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: mode === true ? 'white' : 'text.secondary' }}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outlined" startIcon={<AddShoppingCartIcon />} onClick={handle}>
          {t('home.promo_desc.cart')}
        </Button>
        {count > 0 && isCardActive && (<Button size="small" variant="outlined" startIcon={<BackspaceIcon />} color="error" onClick={decrItems}>
          {t('home.promo_desc.rem_cart')}
        </Button>
        )}
      </CardActions>
    </Card>
  );
}
