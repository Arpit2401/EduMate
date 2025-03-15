import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';
import { useLoader } from 'components/FullPageLoader/FullPageLoader.provider';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormInputs = {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  gender: 'male' | 'female';
  grade: string;
  currentSchool: string;
  guardianName: string;
  relationship: string;
  contactNumber: string;
  email: string;
  address: string;
  additionalMessage: string;
};

const Admissions = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();
  const { setLoading } = useLoader();

  useEffect(() => setLoading(false), []);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setLoading(true); // Set isSubmitting to true when form submission starts

    fetch(
      `https://script.google.com/macros/s/AKfycbyEM_SQF_9quvS6jPX9vIVgjpNo3ZDr4-orMgaqjZ62g8ALzqhHuxq7gug8MHtDuYb_/exec?section=admissions&formDataString=${JSON.stringify(data)}`
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
    <Box>
      <Box maxWidth="1280px" padding="0 15px" margin="3rem auto">
        <Box margin={{ xs: '5rem 2rem', md: '5rem' }}>
          <Typography
            variant="h1"
            component="h1"
            color="primary.main"
            fontSize="4rem"
            margin="2rem auto"
            textAlign="center"
          >
            Admission Form
          </Typography>
          <Typography
            textAlign="justify"
            fontFamily="Ubuntu"
            zIndex={2}
            marginTop="2rem auto"
          >
            At The Aryans Academy, we believe in providing a nurturing
            environment where every student can thrive academically, socially,
            and emotionally.<br />
            Complete our online application form, providing us with information
            about your child and your family.<br />
            Join Our Community We welcome families from diverse backgrounds and
            experiences to join our vibrant school community. If you're ready to
            embark on an enriching educational journey with us, we invite you to
            begin the admissions process today.
          </Typography>
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            color="secondary.main"
            marginBottom="2rem"
          >
            Student Details
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            gap="2rem"
            width="100%"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Box width={{ xs: '100%', sm: '83%' }}>
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
                  width: '100%',
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
            </Box>
            <Box width={{ xs: '100%', sm: '40%' }}>
              <TextField
                {...register('dateOfBirth', { required: true })}
                type="date"
                label="Date of Birth"
                InputLabelProps={{
                  shrink: true,
                }}
                required
                sx={{
                  width: '100%',
                  '&.MuiInputBase-input': { borderRadius: '15px' },
                }}
              />
              {errors.dateOfBirth && (
                <span className="error">Date of birth is required</span>
              )}
            </Box>
            <Box width={{ xs: '100%', sm: '40%' }}>
              <TextField
                {...register('nationality', {
                  required: true,
                  minLength: 2,
                  maxLength: 50,
                })}
                label="Nationality"
                required
                placeholder="Indian"
                sx={{
                  width: '100%',
                  '&.MuiInputBase-input': { borderRadius: '15px' },
                }}
              />
              {errors.nationality && errors.nationality.type === 'required' && (
                <span className="error">Nationality is required</span>
              )}
              {errors.nationality &&
                errors.nationality.type === 'minLength' && (
                <span className="error">
                    Nationality must be at least 2 characters
                </span>
              )}
              {errors.nationality &&
                errors.nationality.type === 'maxLength' && (
                <span className="error">
                    Nationality cannot exceed 50 characters
                </span>
              )}
            </Box>
            <Box width={{ xs: '100%', sm: '40%' }}>
              <TextField
                {...register('gender')}
                label="Gender"
                select
                sx={{
                  width: '100%',
                  '&.MuiInputBase-input': { borderRadius: '15px' },
                }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>
              {errors.gender && (
                <span className="error">Gender is required</span>
              )}
            </Box>
            <Box width={{ xs: '100%', sm: '40%' }}>
              <TextField
                label="Class applying for"
                select
                {...register('grade')}
                required
                sx={{
                  width: '100%',
                  '&.MuiInputBase-input': { borderRadius: '15px' },
                }}
              >
                <MenuItem value="1">Class 1</MenuItem>
                <MenuItem value="2">Class 2</MenuItem>
                <MenuItem value="3">Class 3</MenuItem>
                <MenuItem value="4">Class 4</MenuItem>
                <MenuItem value="5">Class 5</MenuItem>
                <MenuItem value="6">Class 6</MenuItem>
                <MenuItem value="7">Class 7</MenuItem>
                <MenuItem value="8">Class 8</MenuItem>
                <MenuItem value="9">Class 9</MenuItem>
                <MenuItem value="10">Class 10</MenuItem>
              </TextField>
              {errors.grade && errors.grade.type === 'required' && (
                <span className="error">Class is required</span>
              )}
            </Box>
            <Box width={{ xs: '100%', sm: '83%' }}>
              <TextField
                {...register('currentSchool', {
                  required: true,
                  minLength: 2,
                  maxLength: 75,
                })}
                label="Current School"
                sx={{
                  width: '100%',
                  '&.MuiInputBase-input': { borderRadius: '15px' },
                }}
              />
              {errors.currentSchool &&
                errors.currentSchool.type === 'required' && (
                <span className="error">Current school is required</span>
              )}
              {errors.currentSchool &&
                errors.currentSchool.type === 'minLength' && (
                <span className="error">
                    Current school must be at least 2 characters
                </span>
              )}
              {errors.currentSchool &&
                errors.currentSchool.type === 'maxLength' && (
                <span className="error">
                    Current school cannot exceed 75 characters
                </span>
              )}
            </Box>
          </Box>
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            color="secondary.main"
            margin="3rem"
          >
            Parent/Guardian Details
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            gap="2rem"
            width="100%"
            flexWrap="wrap"
            justifyContent="center"
          >
            <Box width={{ xs: '100%', sm: '83%' }}>
              <TextField
                {...register('guardianName', {
                  required: true,
                  minLength: 2,
                  maxLength: 50,
                })}
                required
                id="outlined-required"
                label="Full name"
                sx={{
                  width: '100%',
                  '&.MuiInputBase-input': { borderRadius: '15px' },
                }}
              />
              {errors.guardianName &&
                errors.guardianName.type === 'required' && (
                <span className="error">Guardian name is required</span>
              )}
              {errors.guardianName &&
                errors.guardianName.type === 'minLength' && (
                <span className="error">
                    Guardian name must be at least 2 characters
                </span>
              )}
              {errors.guardianName &&
                errors.guardianName.type === 'maxLength' && (
                <span className="error">
                    Guardian name cannot exceed 50 characters
                </span>
              )}
            </Box>
            <Box width={{ xs: '100%', sm: '40%' }}>
              <TextField
                {...register('relationship', {
                  required: true,
                  minLength: 2,
                  maxLength: 50,
                })}
                label="Relationship with Student"
                required
                placeholder="Father/Mother/etc."
                sx={{
                  width: '100%',
                  '&.MuiInputBase-input': { borderRadius: '15px' },
                }}
              />
              {errors.relationship &&
                errors.relationship.type === 'required' && (
                <span className="error">Relationship is required</span>
              )}
              {errors.relationship &&
                errors.relationship.type === 'minLength' && (
                <span className="error">
                    Relationship must be at least 2 characters
                </span>
              )}
              {errors.relationship &&
                errors.relationship.type === 'maxLength' && (
                <span className="error">
                    Relationship cannot exceed 50 characters
                </span>
              )}
            </Box>
            <Box width={{ xs: '100%', sm: '40%' }}>
              <TextField
                {...register('contactNumber', {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                  minLength: 10,
                  maxLength: 10,
                })}
                label="Contact Number"
                required
                sx={{
                  width: '100%',
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
            </Box>
            <Box width={{ xs: '100%', sm: '40%' }}>
              <TextField
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                  minLength: 5,
                  maxLength: 100,
                })}
                label="Email Address"
                sx={{
                  width: '100%',
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
            </Box>
            <Box width={{ xs: '100%', sm: '40%' }}>
              <TextField
                {...register('address', {
                  required: true,
                  minLength: 5,
                  maxLength: 150,
                })}
                label="Address"
                sx={{
                  width: '100%',
                  '&.MuiInputBase-input': { borderRadius: '15px' },
                }}
              />
              {errors.address && errors.address.type === 'required' && (
                <span className="error">Address is required</span>
              )}
              {errors.address && errors.address.type === 'minLength' && (
                <span className="error">
                  Address must be at least 5 characters
                </span>
              )}
              {errors.address && errors.address.type === 'maxLength' && (
                <span className="error">
                  Address cannot exceed 100 characters
                </span>
              )}
            </Box>
            <Box width={{ xs: '100%', sm: '83%' }}>
              <TextField
                {...register('additionalMessage', { maxLength: 500 })}
                label="Additional Message"
                sx={{
                  width: '100%',
                  '&.MuiInputBase-input': { borderRadius: '15px' },
                }}
              />
              {errors.additionalMessage &&
                errors.additionalMessage.type === 'maxLength' && (
                <span className="error">
                    Additional message cannot exceed 500 characters
                </span>
              )}
            </Box>
          </Box>
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
              onClick={handleReset}
              sx={{ minWidth: '15rem', padding: '1rem', cursor: 'pointer' }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Box>
      {/* <Box
        margin="10rem 0"
        padding="2rem 0"
        sx={{ backgroundColor: 'primary.dark' }}
      >
        <Box maxWidth="1280px" padding="0 15px" margin="3rem auto">
          <Typography
            variant="h2"
            color="white"
            textAlign="center"
            marginBottom="2rem"
          >
            Admission FAQs
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Admissions;
