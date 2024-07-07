import { Box, Button, TextField, Typography } from '@mui/material';
import { useLoader } from 'components/FullPageLoader/FullPageLoader.provider';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {


  type FormInputs = {
    fullName: string;
    contactNumber: string;
    email: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();
  const { setLoading } = useLoader();

  useEffect(() => setLoading(false), []);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setLoading(true);
    fetch(
      `https://script.google.com/macros/s/AKfycbxE-mYVf1CRTKu5LyQH8rNS_x8igTOVRD2czXPIntpwBhZEeVxiQm5B_aFtekBqGnGT/exec?section=contact&formDataString=${JSON.stringify(data)}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);

        if (data.data.status === 'success') {
          toast.success('Form submitted successfully!');
          reset();
          // Reset the form after successful submission
        } else {
          toast.error('Failed to submit form. Please try again.');
        }
      })
      .catch(() => {
        toast.error('Failed to submit form. Please try again.');
        setLoading(false);
      });
  };

  const handleReset = () => {
    reset(undefined); // Reset the form fields
  };

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
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register('fullName', {
            required: true,
            minLength: 2,
            maxLength: 50,
          })}
          required
          id="outlined-required"
          label="Full name"
          sx={{
            width: { xs: '100%', sm: '83%' },
            '&.MuiInputBase-input': { borderRadius: '15px' },
          }}
        />
        {errors.fullName && errors.fullName.type === 'required' && (
          <span className="error">Full name is required</span>
        )}
        {errors.fullName && errors.fullName.type === 'minLength' && (
          <span className="error">
            Full name must be at least 2 characters
          </span>
        )}
        {errors.fullName && errors.fullName.type === 'maxLength' && (
          <span className="error">
            Full name cannot exceed 50 characters
          </span>
        )}
        <TextField
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+$/i,
            minLength: 5,
            maxLength: 100,
          })}
          label="Email"
          sx={{
            width: { xs: '100%', sm: '40%' },
            '&.MuiInputBase-input': { borderRadius: '15px' },
          }}
        />
        {errors.email && errors.email.type === 'required' && (
          <span className="error">Email is required</span>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <span className="error">Invalid email format</span>
        )}
        {errors.email && errors.email.type === 'minLength' && (
          <span className="error">
            Email must be at least 5 characters
          </span>
        )}
        {errors.email && errors.email.type === 'maxLength' && (
          <span className="error">Email cannot exceed 50 characters</span>
        )}
        <TextField
          {...register('contactNumber', {
            required: true,
            pattern: /^[0-9]{10}$/,
            minLength: 10,
            maxLength: 10,
          })}
          label="Phone Number"
          required
          sx={{
            width: { xs: '100%', sm: '40%' },
            '&.MuiInputBase-input': { borderRadius: '15px' },
          }}
        />
        {errors.contactNumber &&
          errors.contactNumber.type === 'required' && (
          <span className="error">Contact number is required</span>
        )}
        {errors.contactNumber &&
          errors.contactNumber.type === 'pattern' && (
          <span className="error">
              Please enter a valid 10-digit contact number
          </span>
        )}
        {errors.contactNumber &&
          errors.contactNumber.type === 'minLength' && (
          <span className="error">
              Contact number must be exactly 10 digits
          </span>
        )}
        {errors.contactNumber &&
          errors.contactNumber.type === 'maxLength' && (
          <span className="error">
              Contact number must be exactly 10 digits
          </span>
        )}
        <TextField
          {...register('message', {
            required: true,
            minLength: 5,
            maxLength: 300,
          })}
          label="Message"
          required
          sx={{
            width: { xs: '100%', sm: '83%' },
            '&.MuiInputBase-input': { borderRadius: '15px' },
          }}
        />
        {errors.message &&
          errors.message.type === 'required' && (
          <span className="error">Message is required</span>
        )}
        {errors.message &&
          errors.message.type === 'minLength' && (
          <span className="error">
              Message must be atleast of 5 characters
          </span>
        )}
        {errors.message &&
          errors.message.type === 'maxLength' && (
          <span className="error">
              Contact number must not be more than 300 characters
          </span>
        )}
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
            onClick={handleReset}
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
