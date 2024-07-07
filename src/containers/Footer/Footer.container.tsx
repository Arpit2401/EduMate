import { Box, Container, Link, Typography } from '@mui/material';

import { FooterProps } from './Footer.types';
import { routeLink } from '@constants';
import { useLocation } from 'react-router-dom';

import logo from '../../assets/images/aks1.png';
import { useState } from 'react';
import DocumentViewerModal from 'components/DocumentViewerModal/DocumentViewerModa.component';

const Footer: React.FC<FooterProps> = ({ address, contactDetails }) => {
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

  const [openModal, setOpenModal] = useState(false);
  const [documentTitle, setDocumentTitle] = useState('');
  const [type, setType] = useState<'12AA'|'80G'>('80G');

  return (
    <>
      {openModal && (
        <DocumentViewerModal
          isOpen={openModal}
          handleClose={() => setOpenModal(false)}
          documentTitle={documentTitle}
          type={type}
        />
      )}
      <footer
        style={{
          marginTop: '50px',
          padding: '20px',
          backgroundColor: '#f2f7fd',
        }}
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: 'column', lg: 'row' }}
            justifyContent="space-between"
            gap="5rem"
          >
            <Box display="flex" alignItems="center" flexDirection="column">
              <Link href="/">
                <Box
                  component="img"
                  src={logo}
                  alt="Logo"
                  width="16rem"
                  height="10rem"
                  sx={{ cursor: 'pointer' }}
                />
              </Link>
              <Typography variant="h3" color="primary.main" mt="1rem">
                The Aryans Academy
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" textAlign="center">
                Menu
              </Typography>
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
                  }}
                >
                  <Typography
                    textAlign="center"
                    variant="h5"
                    component="h5"
                    color="textSecondary"
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
            <Box>
              <Typography variant="h3" textAlign="center">
                Documents
              </Typography>
              <Link
                onClick={() => {
                  setOpenModal(true);
                  setDocumentTitle('Form 80G');
                  setType('80G');
                }}
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  cursor: 'pointer',
                  paddingBottom: '.2rem',
                  position: 'relative',
                }}
              >
                <Typography
                  textAlign="center"
                  variant="h5"
                  component="h5"
                  color="textSecondary"
                  sx={{
                    '&:hover': {
                      color: '#f37335',
                    },
                  }}
                >
                  Form 80G
                </Typography>
              </Link>
              <Link
                onClick={() => {
                  setOpenModal(true);
                  setDocumentTitle('Form 12AA');
                  setType('12AA');
                }}
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  cursor: 'pointer',
                  paddingBottom: '.2rem',
                  position: 'relative',
                }}
              >
                <Typography
                  textAlign="center"
                  variant="h5"
                  component="h5"
                  color="textSecondary"
                  sx={{
                    '&:hover': {
                      color: '#f37335',
                    },
                  }}
                >
                  Form 12AA
                </Typography>
              </Link>
            </Box>
            <Box>
              <Typography variant="h3" textAlign="center">
                Contact
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                textAlign="center"
              >
                {address}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                textAlign="center"
              >
                {contactDetails}
              </Typography>
            </Box>
          </Box>
          {/* <Grid container spacing={3}>
          <Grid item xs={12} md={3} padding={0}></Grid>
          <Grid item xs={12} md={3} padding={0}></Grid>
          <Grid item xs={12} md={3} padding={0}></Grid>
          <Grid item xs={12} md={3} padding={0}></Grid>
        </Grid> */}
        </Container>
      </footer>
    </>
  );
};

export default Footer;
