import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#5A6268'),
  backgroundColor: '#5A6268',
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '1.2rem',
  padding: '12px 24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    padding: '8px 12px',
  },
  '&:hover': {
    backgroundColor: grey[700],
  },
  '& .MuiButton-startIcon': {
    marginRight: '16px',
  }
}));

export default function ListItemButton({ children, icon }) {
  return (
    <ColorButton
      variant="contained"
      startIcon={icon}>{children}</ColorButton>
  );
}
