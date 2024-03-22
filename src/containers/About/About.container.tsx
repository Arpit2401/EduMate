import {
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material';

const About = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  // const eventsteam = [
  //   {
  //     title: 'Event 1',
  //     subtext: 'A small subtext for Event 1',
  //     image: 'https://via.placeholder.com/200x200',
  //   },
  //   {
  //     title: 'Event 2',
  //     subtext: 'A small subtext for Event 2',
  //     image: 'https://via.placeholder.com/200x200',
  //   },
  //   {
  //     title: 'Event 3',
  //     subtext: 'A small subtext for Event 2',
  //     image: 'https://via.placeholder.com/200x200',
  //   },
  //   {
  //     title: 'Event 4',
  //     subtext: 'A small subtext for Event 2',
  //     image: 'https://via.placeholder.com/200x200',
  //   },
  //   {
  //     title: 'Event 4',
  //     subtext: 'A small subtext for Event 2',
  //     image: 'https://via.placeholder.com/200x200',
  //   },
  //   {
  //     title: 'Event 4',
  //     subtext: 'A small subtext for Event 2',
  //     image: 'https://via.placeholder.com/200x200',
  //   },
  //   {
  //     title: 'Event 4',
  //     subtext: 'A small subtext for Event 2',
  //     image: 'https://via.placeholder.com/200x200',
  //   },
  //   {
  //     title: 'Event 4',
  //     subtext: 'A small subtext for Event 2',
  //     image: 'https://via.placeholder.com/200x200',
  //   },
  //   {
  //     title: 'Event 4',
  //     subtext: 'A small subtext for Event 2',
  //     image: 'https://via.placeholder.com/200x200',
  //   },
  //   {
  //     title: 'Event 4',
  //     subtext: 'A small subtext for Event 2',
  //     image: 'https://via.placeholder.com/200x200',
  //   },
  //   // Add more events as needed
  // ];

  // interface Event {
  //   title: string;
  //   subtext: string;
  //   image: string;
  // }

  // interface EventCardProps {
  //   event: Event;
  // }

  // const EventCard: React.FC<EventCardProps> = ({ event }) => {
  //   return (
  //     <Card>
  //       <img
  //         src={event.image}
  //         alt={event.title}
  //         style={{ width: '100%', height: '200px', objectFit: 'cover' }}
  //       />
  //       <CardContent>
  //         <Typography variant="h6">{event.title}</Typography>
  //         <Typography variant="body2" color="textSecondary">
  //           {event.subtext}
  //         </Typography>
  //         <Button
  //           variant="contained"
  //           color="primary"
  //           onClick={() => alert(`Check out more details of ${event.title}`)}
  //         >
  //           View Details
  //         </Button>
  //       </CardContent>
  //     </Card>
  //   );
  // };

  // const [teachersData, setTeachersData] = useState<
  //   {
  //     name: string;
  //     position: string;
  //     photo: string;
  //     details: string;
  //   }[]
  // >([]);
  // const TeacherList = () => {
  //   const [open, setOpen] = useState(false);
  //   const [selectedTeacher, setSelectedTeacher] = useState({
  //     name: '',
  //     position: '',
  //     photo: '',
  //     details: '',
  //   });

  //   const handleOpen = (teacher: any) => {
  //     setSelectedTeacher(teacher);
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   console.log(teachersData[0], 'hello');

  //   // fetch('https://drive.google.com/uc?id=1mzg9CxWptRf09_hdcmTMPLGNd8dP8ZBF')
  //   //   .then((response) => response.blob())
  //   //   .then((blob) => {
  //   //     var objectURL = URL.createObjectURL(blob);
  //   //     var img = document.createElement('img');
  //   //     img.src = objectURL;
  //   //     document.body.appendChild(img);
  //   //   })
  //   //   .catch((error) => console.error('Error fetching image:', error));

  //   return (
  //     <div className="rootTest">
  //       {teachersData.map((teacher, index) => {
  //         // const response = await fetch(
  //         //   `https://www.googleapis.com/drive/v3/files/${driveId}?alt=media`,
  //         //   {
  //         //     headers: {
  //         //       Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
  //         //       'Access-Control-Allow-Origin': '*', // Allow requests from any origin (not recommended for production)
  //         //     },
  //         //   }
  //         // );

  //         return (
  //           <Avatar
  //             key={index}
  //             alt={teacher.name}
  //             // src="http://drive.google.com/uc?export=download&id=1mzg9CxWptRf09_hdcmTMPLGNd8dP8ZBF"
  //             className="avatarTest"
  //             src="https://drive.google.com/uc?id=1W--mKfUyUwtZE-e5vIez-KusRbIoiwFi"
  //             // src={teacher.photo}
  //             onClick={() => handleOpen(teacher)}
  //           />
  //         );
  //       })}
  //       <Modal
  //         className="modalTest"
  //         open={open}
  //         onClose={handleClose}
  //         closeAfterTransition
  //         BackdropComponent={Backdrop}
  //         BackdropProps={{
  //           timeout: 500,
  //         }}
  //       >
  //         <Fade in={open}>
  //           <div className="paperTest">
  //             <Avatar
  //               alt={selectedTeacher?.name}
  //               src="https://drive.google.com/file/d/1c1i3WDRfJxU7JSX_EYeSKBUC5eESrUSe/view?usp=sharing"
  //             />
  //             <Typography variant="h6">{selectedTeacher?.name}</Typography>
  //             <Typography variant="subtitle1">
  //               {selectedTeacher?.position}
  //             </Typography>
  //             <Typography variant="body1">
  //               {selectedTeacher?.details}
  //             </Typography>
  //           </div>
  //         </Fade>
  //       </Modal>
  //     </div>
  //   );
  // };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://script.google.com/macros/s/AKfycbzxxUDisi3dBugnaVIhJI0ndzVqbVyCHASOEgBbV-G9Dts13L_1Kpz7foHwVrH7CArI/exec'
  //       );
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setTeachersData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Box>
      <Box maxWidth="1280px" margin="0 auto">
        <Box
          borderRadius="15px"
          maxWidth={{ xs: '80%', md: '900px' }}
          maxHeight={{ xs: '20rem', sm: '30rem', md: '40rem' }}
          margin="2rem auto"
          height={{ xs: '20rem', md: '25rem' }}
        >
          <img
            src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
            alt="sdf"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '15px',
            }}
          />
        </Box>
        <Typography
          variant="h1"
          component="h1"
          color="primary.main"
          fontSize="4rem"
          margin="2rem auto"
          textAlign="center"
        >
          About Us
        </Typography>
        <Typography
          component="p"
          variant="body1"
          textAlign="justify"
          lineHeight={1.25}
          margin={{ xs: '2rem auto', md: '2rem auto 5rem' }}
          maxWidth={{ xs: '90%', lg: '1080px' }}
        >
          At [School Name], we are committed to providing an enriching
          educational experience that prepares students for success in a rapidly
          changing world. Our school is more than just a place of learning; it's
          a vibrant community where students, parents, and educators come
          together to inspire, innovate, and ignite a passion for lifelong
          learning. With a focus on academic excellence, character development,
          and social responsibility, we strive to cultivate well-rounded
          individuals who are equipped with the skills, knowledge, and values
          needed to thrive in the 21st century. <br />
          Our dedicated team of educators fosters a supportive and inclusive
          environment where every student feels valued, challenged, and
          empowered to reach their full potential. Through personalized
          instruction, innovative teaching methods, and hands-on learning
          experiences, we encourage curiosity, critical thinking, and
          creativity. From our state-of-the-art facilities to our comprehensive
          extracurricular programs, we offer a myriad of opportunities for
          students to explore their interests, develop their talents, and become
          compassionate, engaged members of society. <br />
          At [School Name], we believe that education is not just about
          preparing students for the future; it's about empowering them to shape
          it. Join us as we embark on a journey of discovery, growth, and
          endless possibilities.
        </Typography>
      </Box>
      <Box
        maxWidth="1280px"
        display="flex"
        flexWrap="wrap"
        gap="5rem"
        margin={{ xs: '10rem 5rem', md: '10rem auto' }}
        alignItems="center"
        justifyContent="space-around"
      >
        <Box
          textAlign="center"
          maxWidth="20rem"
          maxHeight="20rem"
          minWidth="20rem"
          minHeight="15rem"
          borderRadius="15px"
          padding="2rem"
          boxShadow="0px 0px 25px 5px rgba(222,222,222,0.8)"
        >
          <Typography variant="h3" component="h3">
            Teachers
          </Typography>
          <Typography
            fontSize="5rem"
            variant="h3"
            component="h3"
            color="primary.main"
          >
            50+
          </Typography>
        </Box>
        <Box
          textAlign="center"
          maxWidth="20rem"
          maxHeight="20rem"
          minWidth="20rem"
          minHeight="15rem"
          borderRadius="15px"
          padding="2rem"
          boxShadow="0px 0px 25px 5px rgba(222,222,222,0.8)"
        >
          <Typography variant="h3" component="h3">
            Students
          </Typography>
          <Typography
            fontSize="5rem"
            variant="h3"
            component="h3"
            color="primary.main"
          >
            500+
          </Typography>
        </Box>
        <Box
          textAlign="center"
          maxWidth="20rem"
          maxHeight="20rem"
          minWidth="20rem"
          minHeight="15rem"
          borderRadius="15px"
          padding="2rem"
          boxShadow="0px 0px 25px 5px rgba(222,222,222,0.8)"
        >
          <Typography variant="h3" component="h3">
            Standards
          </Typography>
          <Typography
            fontSize="5rem"
            variant="h3"
            component="h3"
            color="primary.main"
          >
            12
          </Typography>
        </Box>
        <Box
          textAlign="center"
          maxWidth="20rem"
          maxHeight="20rem"
          minWidth="20rem"
          minHeight="15rem"
          borderRadius="15px"
          padding="2rem"
          boxShadow="0px 0px 25px 5px rgba(222,222,222,0.8)"
        >
          <Typography variant="h3" component="h3">
            Alumni
          </Typography>
          <Typography
            fontSize="5rem"
            variant="h3"
            component="h3"
            color="primary.main"
          >
            1000+
          </Typography>
        </Box>
      </Box>
      <Box maxWidth="1280px" margin="0 auto">
        <Box
          margin="10rem 5rem"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="5rem"
        >
          <Box maxWidth={{ xs: '100%', md: '50%' }}>
            <Typography
              variant="h2"
              component="h2"
              textAlign="center"
              color="secondary.main"
              marginBottom="2rem"
            >
              Mission
            </Typography>
            <Typography
              textAlign="justify"
              fontFamily="Ubuntu"
              zIndex={2}
              marginTop="2rem"
            >
              Our mission is to provide a holistic educational experience that
              fosters intellectual growth, emotional well-being, and social
              responsibility. Through innovative teaching methods, personalized
              support, and a diverse curriculum, we aim to inspire a lifelong
              love of learning, nurture individual talents, and instill the
              values of integrity, respect, and resilience in every student. By
              fostering a culture of collaboration, critical thinking, and
              creativity, we empower our students to navigate the complexities
              of the modern world with confidence and empathy, making meaningful
              contributions to their communities and beyond.
            </Typography>
          </Box>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
            alt="sdf"
            maxWidth="50%"
            display={{ xs: 'none', md: 'block' }}
            height="100%"
            borderRadius="15px"
          ></Box>
        </Box>
        <Box
          margin="10rem 5rem"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap="2.5rem"
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
            alt="sdf"
            maxWidth="50%"
            display={{ xs: 'none', md: 'block' }}
            height="100%"
            borderRadius="15px"
          ></Box>
          <Box maxWidth={{ xs: '100%', md: '50%' }}>
            <Typography
              variant="h2"
              component="h2"
              textAlign="center"
              color="secondary.main"
              marginBottom="2rem"
            >
              Vision
            </Typography>
            <Typography
              textAlign="justify"
              fontFamily="Ubuntu"
              zIndex={2}
              marginTop="2rem"
            >
              Our vision is to cultivate a thriving learning community that
              empowers students to embrace curiosity, pursue excellence, and
              become compassionate global citizens equipped to positively impact
              the world.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        margin="10rem 0"
        sx={{
          backgroundColor: 'primary.dark',
          display: isMobile ? 'block' : 'none',
        }}
      >
        <Box
          maxWidth="1280px"
          margin="auto"
          padding={{ xs: '2rem 1.5rem', md: '0 1.5rem' }}
          alignItems="center"
          justifyContent="space-around"
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          flexWrap="wrap"
          gap="4rem"
        >
          <Typography variant="h2" color="white" textAlign="center">
            From the Principle's Desk
          </Typography>
          <Box
            alignSelf="center"
            flexGrow={1}
            margin={{ xs: '1rem', md: '5rem' }}
            padding="2rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={{ xs: '1rem', md: '5rem' }}
            sx={{
              background: 'hsla(0, 0%, 97%, .25)',
              backdropFilter: 'blur(5px)',
              borderRadius: '12px',
              border: '1px solid rgba(209, 213, 219, 0.3)',
              color: 'white',
            }}
          >
            <Box height="100%" width="100%">
              <img
                src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                alt="sdf"
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: '15px',
                }}
              />
            </Box>
            <Typography
              variant="h4"
              color="white"
              lineHeight={1.5}
              textAlign="center"
              margin="2.5rem 0"
            >
              Mrs. Chitra Jalan <br />
              Principle, The Aryan's Academy
            </Typography>
          </Box>
          <Box flexGrow={2}>
            <Typography
              variant="h2"
              color="white"
              textAlign="center"
              display={{ xs: 'none', md: 'block' }}
              margin="2.5rem 0"
            >
              From the Principle's Desk
            </Typography>
            <Typography
              variant="body1"
              color="white"
              textAlign="justify"
              margin=".5rem 0"
            >
              "The aim of the Aryans Academy is to promote a system of integral
              education in a congenial child friendly environment that
              emphasises the unity of all knowledge, syntesises humanity and
              sciences and recognises the fact that each child is unique. We
              belive that education should enable the students to soar high
              morally, socially and spiritually. We believe that our students
              need to learn that the secret of success lies in discovering one's
              own strenghts as well as limitations. Our school also allows our
              teachers the flexibility to adopt innovative methods to stimulate
              interest and attention among the students and develop in them an
              appreciation for the values of past, the excitement of the present
              and the challenges of the future. At The Aryans Academy priority
              is also given to the teaching of critical thinking skills such as
              reasoning and problem solving, to help our students develop the
              ability to reach sound conclusions based on observation and
              information. I believe that our students will not only be known
              technical/professional but will make nation to lead the world."
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        margin="10rem 0"
        sx={{
          backgroundColor: 'primary.dark',
          display: isMobile ? 'none' : 'block',
        }}
      >
        <Box
          maxWidth="1280px"
          margin="auto"
          padding={{ xs: '2rem 1.5rem', md: '0 1.5rem' }}
          alignItems="center"
          justifyContent="space-around"
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          flexWrap="wrap"
          gap="4rem"
        >
          <Box
            alignSelf="center"
            flexGrow={1}
            margin={{ xs: '1rem', md: '5rem' }}
            padding="2rem"
            display="flex"
            alignItems="center"
            gap={{ xs: '1rem', md: '5rem' }}
            sx={{
              background: 'hsla(0, 0%, 97%, .25)',
              backdropFilter: 'blur(5px)',
              borderRadius: '12px',
              border: '1px solid rgba(209, 213, 219, 0.3)',
              color: 'white',
            }}
          >
            <Box display="flex" flexDirection="column" maxWidth="40%">
              <Box height="100%" width="100%">
                <img
                  src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                  alt="sdf"
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: '15px',
                  }}
                />
              </Box>
              <Typography
                variant="h4"
                color="white"
                lineHeight={1.5}
                textAlign="center"
                margin="2.5rem 0 0"
              >
                Mrs. Chitra Jalan <br />
                Principle, The Aryan's Academy
              </Typography>
            </Box>
            <Box maxWidth="60%">
              <Typography
                variant="h2"
                color="white"
                textAlign="center"
                display={{ xs: 'none', md: 'block' }}
                margin="2.5rem 0"
              >
                From the Principle's Desk
              </Typography>
              <Typography
                variant="body1"
                color="white"
                textAlign="justify"
                margin=".5rem 0"
              >
                "The aim of the Aryans Academy is to promote a system of
                integral education in a congenial child friendly environment
                that emphasises the unity of all knowledge, syntesises humanity
                and sciences and recognises the fact that each child is unique.
                We belive that education should enable the students to soar high
                morally, socially and spiritually. We believe that our students
                need to learn that the secret of success lies in discovering
                one's own strenghts as well as limitations. Our school also
                allows our teachers the flexibility to adopt innovative methods
                to stimulate interest and attention among the students and
                develop in them an appreciation for the values of past, the
                excitement of the present and the challenges of the future. At
                The Aryans Academy priority is also given to the teaching of
                critical thinking skills such as reasoning and problem solving,
                to help our students develop the ability to reach sound
                conclusions based on observation and information. I believe that
                our students will not only be known technical/professional but
                will make nation to lead the world."
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box>
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          color="secondary.main"
          marginBottom="2rem"
        >
          Our Story
        </Typography>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide>
              <Testimonial key={index} {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box> */}
      <Box
        maxWidth="1280px"
        display="flex"
        flexWrap="wrap"
        gap="5rem"
        margin={{ xs: '10rem 5rem', md: '10rem auto' }}
        alignItems="center"
        justifyContent="space-around"
      >
        <Box
          textAlign="center"
          maxWidth="20rem"
          maxHeight="20rem"
          minWidth="20rem"
          minHeight="15rem"
          borderRadius="15px"
          padding="2rem"
          boxShadow="0px 0px 25px 5px rgba(222,222,222,0.8)"
        >
          <Typography variant="h3" component="h3">
            Teachers
          </Typography>
          <Typography
            fontSize="5rem"
            variant="h3"
            component="h3"
            color="primary.main"
          >
            50+
          </Typography>
        </Box>
        <Box
          textAlign="center"
          maxWidth="20rem"
          maxHeight="20rem"
          minWidth="20rem"
          minHeight="15rem"
          borderRadius="15px"
          padding="2rem"
          boxShadow="0px 0px 25px 5px rgba(222,222,222,0.8)"
        >
          <Typography variant="h3" component="h3">
            Students
          </Typography>
          <Typography
            fontSize="5rem"
            variant="h3"
            component="h3"
            color="primary.main"
          >
            500+
          </Typography>
        </Box>
        <Box
          textAlign="center"
          maxWidth="20rem"
          maxHeight="20rem"
          minWidth="20rem"
          minHeight="15rem"
          borderRadius="15px"
          padding="2rem"
          boxShadow="0px 0px 25px 5px rgba(222,222,222,0.8)"
        >
          <Typography variant="h3" component="h3">
            Standards
          </Typography>
          <Typography
            fontSize="5rem"
            variant="h3"
            component="h3"
            color="primary.main"
          >
            12
          </Typography>
        </Box>
        <Box
          textAlign="center"
          maxWidth="20rem"
          maxHeight="20rem"
          minWidth="20rem"
          minHeight="15rem"
          borderRadius="15px"
          padding="2rem"
          boxShadow="0px 0px 25px 5px rgba(222,222,222,0.8)"
        >
          <Typography variant="h3" component="h3">
            Alumni
          </Typography>
          <Typography
            fontSize="5rem"
            variant="h3"
            component="h3"
            color="primary.main"
          >
            1000+
          </Typography>
        </Box>
      </Box>
      <Box
        maxWidth="1280px"
        padding="0 15px"
        margin="10rem auto"
        textAlign="center"
      >
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          praesentium! Reprehenderit minima fugit error assumenda. Suscipit
          consequuntur quisquam sequi illum quaerat, dicta nisi! Corrupti, quae
          quo dolore saepe veritatis modi. Qui fuga recusandae dignissimos cum
          dicta, rem fugiat. Tenetur iure aliquid quasi possimus sunt harum
          inventore iusto. Facilis saepe adipisci magni cum laboriosam, ex eos
          nostrum expedita maiores architecto voluptate.
        </Typography>
      </Box>
      {/* <h1
        style={{
          margin: '2.5rem auto',
          color: '#0056b3',
          textAlign: 'center',
        }}
      >
        Our Team!
      </h1>
      <Box
        display="flex"
        gap="5rem"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <TeacherList />
      </Box> */}
    </Box>
  );
};

export default About;
