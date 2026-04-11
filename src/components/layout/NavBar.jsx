"use client";
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import MenuItem from '@mui/material/MenuItem';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useTranslation } from 'react-i18next';
import { common } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: 4px;
  }
`;

export default function NavBar() {
  const router = useRouter();
  const { i18n, t } = useTranslation();
  const pages = [t('layout.navbar_msg.promo'), "Credit", t('layout.navbar_msg.about'), t('layout.navbar_msg.mission')];
  const links = ['/promo', '/credit', '/about', '/mission'];
  const settings = [t('layout.settings.profile'), t('layout.settings.account'), t('layout.settings.cart'), t('layout.settings.logout')];
  const languages = [
    { label: t('layout.language.english'), code: 'en' },
    { label: t('layout.language.romanian'), code: 'ro' },
  ];
  const toggleLang = (code) => {
    i18n.changeLanguage(code);
    handleCloseLangMenu();
  };

  const [anchorElLang, setAnchorElLang] = useState(null);

  const handleOpenLangMenu = (event) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (link) => {
    setAnchorElNav(null);
  if (link && typeof link === 'string') {
    router.push(link);
  }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
const SkipLink = styled('a')({
  position: 'absolute',
  left: '-10000px',
  top: 'auto',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  '&:focus': {
    position: 'fixed',
    top: '10px',
    left: '10px',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px 20px',
    zIndex: 9999,
    borderRadius: '4px',
    textDecoration: 'none',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
  },
});

  return (
    <>
    <SkipLink href="#special-offers">
      {t('layout.accessibility.skip_to_content')}
    </SkipLink>
    <AppBar position="sticky" sx={{ backgroundColor: common.black }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdsClickOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link} /*"a" */
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ELECTRO
          </Typography>

          <Box sx={{ flexGrow: { xs: 0, md: 1 } }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              disableScrollLock={true}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(links[index])}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdsClickOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ELECTRO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(links[index])}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <IconButton onClick={handleOpenLangMenu}
            size="large"
            aria-label="select language" // Description for screen readers
            aria-controls={anchorElLang ? 'language-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={anchorElLang ? 'true' : undefined}
            color="inherit"
          >
            <Tooltip
              title={t('layout.language.select')}
              arrow // Adds the little triangle at the bottom
              slots={{ transition: Zoom }} // Use the correct prop for MUI v5
              placement="bottom"
            >
              <LanguageOutlinedIcon
                sx={{
                  my: 2,
                  display: { xs: 'none', md: 'flex' },
                  mr: 2,
                  transition: 'transform 0.1s ease-in-out',
                  '&:active': {
                    transform: 'scale(0.92)', // Shrinks slightly when pressed
                  },
                }}
              />
            </Tooltip>
          </IconButton>
          <Menu anchorEl={anchorElLang} // Link to the new state
            open={Boolean(anchorElLang)}
            onClose={handleCloseLangMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          >
            {languages.map((language) => (
              <MenuItem key={language.code}
                onClick={() => toggleLang(language.code)}
                selected={i18n.language === language.code}>
                <Typography sx={{ textAlign: 'center' }}>{language.label}</Typography>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Default user" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <CartBadge badgeContent={1} color="primary" overlap="circular" />
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              disableScrollLock={true}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
