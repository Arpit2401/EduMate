import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

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
      <Box
        display="flex"
        alignItems="center"
        gap="2rem"
        width="100%"
        flexWrap="wrap"
        justifyContent="center"
      >
        <TextField
          {...register('fullName')}
          required
          id="outlined-required"
          label="Full name"
          sx={{
            width: { xs: '100%', sm: '83%' },
            '&.MuiInputBase-input': { borderRadius: '15px' },
          }}
        />
        <TextField
          {...register('email')}
          label="Email"
          sx={{
            width: { xs: '100%', sm: '40%' },
            '&.MuiInputBase-input': { borderRadius: '15px' },
          }}
        />
        <TextField
          {...register('phoneNumber')}
          label="Phone Number"
          required
          sx={{
            width: { xs: '100%', sm: '40%' },
            '&.MuiInputBase-input': { borderRadius: '15px' },
          }}
        />
        <TextField
          {...register('contactMessage')}
          label="Message"
          required
          sx={{
            width: { xs: '100%', sm: '83%' },
            '&.MuiInputBase-input': { borderRadius: '15px' },
          }}
        />
        <Box
          display="flex"
          alignItems="center"
          gap="2rem"
          width="100%"
          justifyContent="center"
          margin="3rem auto"
        >
          <Button
            variant="contained"
            type="submit"
            sx={{
              minWidth: '15rem',
              padding: '1rem',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Submit
          </Button>
          <Button
            variant="outlined"
            type="reset"
            sx={{ minWidth: '15rem', padding: '1rem', cursor: 'pointer' }}
          >
            Reset
          </Button>
        </Box>
      </Box>
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
