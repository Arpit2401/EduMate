import { FacebookOutlined, Instagram, YouTube } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';

import logo from '../../assets/images/logo.jpg';
import { routeLink } from '@constants';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const socials = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/15bU6PJ7d4/',
      icon: <FacebookOutlined fontSize="large" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/the_aryans_academy/',
      icon: <Instagram fontSize="large" />,
    },
    { name: 'YouTube', url: 'https://youtube.com/@aryanacademy-pd2mf?si=zbyLZkdJqbWg43hD', icon: <YouTube fontSize="large" /> },
  ];
  const pages = [
    { name: 'HOME', title: 'Home' },
    { name: 'ABOUT', title: 'About' },
    // { name: 'EVENTS', title: 'Events' },
    { name: 'ADMISSIONS', title: 'Admissions' },
    // { name: 'CAREERS', title: 'Careers' },
    { name: 'CONTACT', title: 'Contact Us' },
  ];

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active-menu-item' : '';
  };

  return (
    <>
      <Box
        borderBottom="2px solid #eae5e5"
        zIndex={1000}
        position="sticky"
        top={0}
        sx={{
          backgroundColor: 'white',
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          padding="1rem"
          margin="0 auto"
          maxWidth="1280px"
        >
          <Box display="flex" flexDirection="row" gap="8rem" maxWidth="80%">
            <Box maxWidth="25%">
              <Typography component="h5" variant="h5" color="primary.main">
                Call
              </Typography>
              <Link
                href="tel:+91 6391171765"
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                <Typography
                  component="p"
                  variant="body1"
                  sx={{
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  +91 6391171765
                </Typography>
              </Link>
              <Link
                href="tel:+91 8423793001"
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                <Typography
                  component="p"
                  variant="body1"
                  sx={{
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  +91 8423793001
                </Typography>
              </Link>
            </Box>
            <Box maxWidth="25%">
              <Typography component="h5" variant="h5" color="primary.main">
                School Timings
              </Typography>
              <Typography component="p" variant="body1">
                Mon - Sat 8 AM - 4 PM
              </Typography>
            </Box>
            <Box maxWidth="50%">
              <Typography component="h5" variant="h5" color="primary.main">
                Address
              </Typography>
              {/* TODO: Add map linking here */}
              <Typography component="p" variant="body1">
                Sant Nagar, Vill Gorari, Robertsganj, Sonebhandra. 231216
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap="1.25rem">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                sx={{
                  textDecoration: 'none',
                  padding: '.2rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  color: 'secondary.main',
                  transition: 'all .4s ease-in-out',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {social.icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
      <Box padding="1.5rem 0 0">
        <Box
          maxWidth="1280px"
          padding="0 1.5rem"
          margin="0 auto"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Link
            href="/"
            maxWidth="6%"
            maxHeight="6%"
            width="6%"
            height="6%"
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              width="100%"
              height="100%"
              sx={{ cursor: 'pointer' }}
            />
          </Link>
          <Box display="flex" gap="2rem">
            {pages.map((page) => (
              <Link
                href={routeLink[page.name]}
                key={page.name}
                className={isActive(routeLink[page.name])}
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  cursor: 'pointer',
                  paddingBottom: '.2rem',
                  position: 'relative',
                  '&:before, &.active-menu-item:before': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '.25rem',
                    background: '#f37335',
                    borderRadius: '10px',
                    transition: 'all .4s ease-in-out',
                  },
                  '&:hover,&.active-menu-item': {
                    color: '#f37335',
                    '&:before': {
                      width: '50%',
                    },
                  },
                }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  className={isActive(routeLink[page.name])}
                  sx={{
                    '&:hover, &.active-menu-item': {
                      color: '#f37335',
                    },
                  }}
                >
                  {page.title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
