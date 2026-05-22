import Skeleton from '@mui/material/Skeleton';

export default function Loading() {

  return <Skeleton 
  variant="rectangular" 
  sx={{ 
    width: {
      xs: '100%', // Mobile
      sm: '80%',  // Tablets
      md: '60%',  // Desktop
    },
    height: 150 
  }} 
/>
}
