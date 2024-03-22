import { Outlet, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
// import { Box } from '@mui/material';

import { Footer, Header } from '@containers';

import 'swiper/css';
import 'swiper/css/pagination';
import {
  AppBar,
  Box,
  Link,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  FacebookOutlined,
  Instagram,
  Menu,
  Twitter,
} from '@mui/icons-material';
import { routeLink } from '@constants';
import logo from '../../assets/aks1.png';
// Elipses at menu item
// max width for top menu

const MainLayout: React.FunctionComponent = (): JSX.Element => {
  const address = 'Sant Nagar, Vill Gorari, Robertsganj, Sonebhandra. 231216';
  const contactDetails = 'Phone:  +91 8423793001, Email: info@example.com';
  const isMobile = useMediaQuery('(max-width:768px)');
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

  const socials = [
    {
      name: 'Facebook',
      url: 'facebook.com',
      icon: <FacebookOutlined fontSize="large" />,
    },
    {
      name: 'Instagram',
      url: 'instagram.com',
      icon: <Instagram fontSize="large" />,
    },
    { name: 'X', url: 'x.com', icon: <Twitter fontSize="large" /> },
  ];

  const HamburgerMenu = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ display: isMobile ? 'block' : 'none' }} // Show only on xs breakpoint
            >
              <Menu sx={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <Box
            display="flex"
            gap="1rem"
            height="100%"
            width="70vw"
            textAlign="center"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            borderBottom="2px solid #eae5e5"
          >
            <Link href="/" width="14rem" height="8rem" mb="1rem">
              <Box
                component="img"
                src={logo}
                alt="Logo"
                width="100%"
                height="100%"
                sx={{ cursor: 'pointer' }}
              />
            </Link>
            {/* TODO: Use react router dom link and add active state*/}
            {pages.map((page) => (
              <Link
                href={routeLink[page.name]}
                key={page.name}
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  cursor: 'pointer',
                  paddingBottom: '.2rem',
                  position: 'relative',
                  '&:before, .active-menu-item:before': {
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
                  '&:hover, .active-menu-item': {
                    color: '#f37335',
                    ' :before': {
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
                    '&:hover, .active-menu-item': {
                      color: '#f37335',
                    },
                  }}
                >
                  {page.title}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            padding="2.5rem"
            height="100%"
            width="70vw"
            flexDirection="column"
            margin="0 auto"
          >
            <Box
              display="flex"
              flexDirection="column"
              gap="2rem"
              maxWidth="80%"
              alignItems="center"
              textAlign="center"
            >
              <Box>
                <Typography component="h5" variant="h5" color="primary.main">
                  Call
                </Typography>
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
              <Box>
                <Typography component="h5" variant="h5" color="primary.main">
                  School Timings
                </Typography>
                <Typography component="p" variant="body1">
                  Mon - Sat 8 AM - 4 PM
                </Typography>
              </Box>
              <Box>
                <Typography component="h5" variant="h5" color="primary.main">
                  Address
                </Typography>
                {/* TODO: Add map linking here */}
                <Typography component="p" variant="body1">
                  Sant Nagar, Vill Gorari, Robertsganj, Sonebhandra. 231216
                </Typography>
              </Box>
            </Box>
            <Box display="flex" gap="1.25rem" mt="2rem">
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
        </Drawer>
      </div>
    );
  };

  return (
    <React.Fragment>
      {isMobile ? <HamburgerMenu /> : <Header />}
      <main>
        <Outlet />
      </main>
      <Footer address={address} contactDetails={contactDetails} />
    </React.Fragment>
  );
};

export default MainLayout;
