import { ExpandMore } from '@mui/icons-material';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Admissions = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

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
            At [School Name], we believe in providing a nurturing environment
            where every student can thrive academically, socially, and
            emotionally.
            {/* Our admissions process is designed to help families get
            to know our school community and to ensure that each student finds
            the right fit for their educational journey. Why Choose [School
            Name]? Academic Excellence: Our dedicated faculty and rigorous
            curriculum prepare students for success in higher education and
            beyond. Holistic Development: We prioritize the development of the
            whole child, fostering critical thinking, creativity, and character.
            Supportive Community: At [School Name], students are part of a
            supportive community where they are known, valued, and encouraged to
            pursue their passions. Diverse Opportunities: From arts and
            athletics to service and leadership, we offer a wide range of
            opportunities for students to explore their interests and talents.
            Admissions Process Explore Our School: Learn more about our mission,
            values, programs, and campus by exploring our website or scheduling
            a visit.  */}
            {/* Submit an Application:  */}
            Complete our online application form, providing us with information
            about your child and your family.
            {/* Schedule an Interview: Meet with our admissions team to discuss your
            child's interests, goals, and how they can thrive at [School Name].
            Receive Admissions Decision: We carefully review each application
            and strive to provide families with timely admissions decisions. */}
            Join Our Community We welcome families from diverse backgrounds and
            experiences to join our vibrant school community. If you're ready to
            embark on an enriching educational journey with us, we invite you to
            begin the admissions process today.
            {/* For more information or
            assistance with the admissions process, please don't hesitate to
            contact our admissions office. */}
          </Typography>
        </Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
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
              {...register('dateOfBirth')}
              label="Date of Birth"
              required
              sx={{
                width: { xs: '100%', sm: '40%' },
                '&.MuiInputBase-input': { borderRadius: '15px' },
              }}
            />
            <TextField
              {...register('nationality')}
              label="Nationality"
              required
              placeholder="Indian"
              sx={{
                width: { xs: '100%', sm: '40%' },
                '&.MuiInputBase-input': { borderRadius: '15px' },
              }}
            />
            <TextField
              {...register('gender')}
              label="Gender"
              required
              select
              sx={{
                width: { xs: '100%', sm: '40%' },
                '&.MuiInputBase-input': { borderRadius: '15px' },
              }}
            >
              <MenuItem value="1">Male</MenuItem>
              <MenuItem value="2">Female</MenuItem>
            </TextField>
            <TextField
              {...register('class')}
              label="Class applying for"
              select
              required
              sx={{
                width: { xs: '100%', sm: '40%' },
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
              <MenuItem value="11">Class 11</MenuItem>
              <MenuItem value="12">Class 12</MenuItem>
            </TextField>
            <TextField
              {...register('currentSchool')}
              label="Current School"
              sx={{
                width: { xs: '100%', sm: '83%' },
                '&.MuiInputBase-input': { borderRadius: '15px' },
              }}
            />
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
            <TextField
              {...register('guardianName')}
              required
              id="outlined-required"
              label="Full name"
              sx={{
                width: { xs: '100%', sm: '83%' },
                '&.MuiInputBase-input': { borderRadius: '15px' },
              }}
            />
            <TextField
              {...register('relationship')}
              label="Relationship with Student"
              required
              placeholder="Father/Mother/etc."
              sx={{
                width: { xs: '100%', sm: '40%' },
                '&.MuiInputBase-input': { borderRadius: '15px' },
              }}
            />
            <TextField
              {...register('contactNumber')}
              label="Contact Number"
              required
              sx={{
                width: { xs: '100%', sm: '40%' },
                '&.MuiInputBase-input': { borderRadius: '15px' },
              }}
            />
            <TextField
              {...register('email')}
              label="Email Address"
              sx={{
                width: { xs: '100%', sm: '40%' },
                '&.MuiInputBase-input': { borderRadius: '15px' },
              }}
            />
            <TextField
              {...register('address')}
              label="Address"
              sx={{
                width: { xs: '100%', sm: '40%' },
                '&.MuiInputBase-input': { borderRadius: '15px' },
              }}
            />
            <TextField
              {...register('aboutYou')}
              label="Additional Message"
              sx={{
                width: { xs: '100%', sm: '83%' },
                '&.MuiInputBase-input': { borderRadius: '15px' },
              }}
            />
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
              sx={{ minWidth: '15rem', padding: '1rem', cursor: 'pointer' }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
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
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              Accordion Actions
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default Admissions;
