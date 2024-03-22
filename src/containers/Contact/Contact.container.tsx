import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box maxWidth="1280px" margin="0 auto">
      <Typography
        variant="h1"
        component="h1"
        color="primary.main"
        fontSize="4rem"
        margin="2rem auto"
        textAlign="center"
      >
        Contact Us
      </Typography>
      <div className="map" style={{ margin: '5rem auto' }}>
        <iframe
          title="adf"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29007.123430762906!2d83.03977893955077!3d24.66189960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ef9b5356ebdcb%3A0xa872371f8753a954!2sThe%20Aryans%20Academy%20School!5e0!3m2!1sen!2sin!4v1610278682857!5m2!1sen!2sin"
          width="100%"
          height="500"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </Box>
  );
};

export default Contact;
