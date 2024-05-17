import { Box, Button, Typography, useMediaQuery } from '@mui/material';

import {
  ChevronRight,
  Hail,
  CalendarMonth,
  LockClockOutlined,
} from '@mui/icons-material';

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import '../../App.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonials from 'components/Testimonials/Testimonials.component';
import NoticeBoard from 'components/NoticeBoard/NoticeBoard.component';

const App = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  interface Event {
    title: string;
    subtext: string;
    image: string;
  }

  interface EventCardProps {
    event: Event;
  }

  const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
      <Box
        borderRadius="15px"
        maxWidth="100%"
        width="100%"
        height="100%"
        minHeight="20rem"
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap="2rem"
        paddingRight={{ xs: 0, md: '2rem' }}
        boxShadow="0px 0px 25px 5px rgba(222,222,222,0.8)"
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          alt="sdf"
          width={{ sx: '100%', md: '35%' }}
          height="100%"
          sx={{
            borderTopLeftRadius: '15px',
            borderBottomLeftRadius: { xs: 0, md: '15px' },
            borderTopRightRadius: { xs: '15px', md: 0 },
          }}
        ></Box>
        <Box
          padding={{ xs: '1.5rem', md: 0 }}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Box>
            <Typography
              variant="h3"
              component="h3"
              color="primary.main"
              paddingTop={{ xs: 0, md: '2rem' }}
            >
              Name of the Event
            </Typography>
            <Typography variant="body1" component="p" fontStyle="italic">
              "Slogan of the Event"
            </Typography>
          </Box>
          <Typography
            variant="body1"
            component="p"
            margin="1rem 0"
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            nulla autem voluptas et deserunt.
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            gap={{ xs: '1rem', md: 0 }}
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="center"
          >
            <Typography>
              <CalendarMonth
                sx={{ verticalAlign: 'text-bottom', marginRight: '.5rem' }}
              />
              18th Feb. 2024
            </Typography>
            <Typography>
              <LockClockOutlined
                sx={{ verticalAlign: 'text-bottom', marginRight: '.5rem' }}
              />
              8:30 AM - 2:45 PM
            </Typography>
          </Box>
          {/* <Button
            href="events/detail"
            variant="contained"
            sx={{
              margin: '2rem 0',
              padding: '1rem 2rem',
              fontSize: '2rem',
              color: 'white',
            }}
          >
            More Details
          </Button> */}
        </Box>
      </Box>
    );
  };

  interface EventSliderProps {
    events: Event[];
  }

  const EventSlider: React.FC<EventSliderProps> = ({ events }) => {
    return (
      <Box
        display="flex"
        gap="5rem"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-evenly"
        width="100%"
      >
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </Box>
    );
  };

  const events = [
    {
      title: 'Event 1',
      subtext: 'A small subtext for Event 1',
      image: 'https://via.placeholder.com/600x200',
    },
    {
      title: 'Event 2',
      subtext: 'A small subtext for Event 2',
      image: 'https://via.placeholder.com/600x200',
    },
    // Add more events as needed
  ];

  return (
    <Box>
      <Box maxWidth="1280px" padding="0 15px" margin="0 auto">
        <Box
          margin="2rem auto"
          display="flex"
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          gap="2.5rem"
        >
          <Box
            maxWidth={{ sx: '100%', md: '50%' }}
            display={{ xs: 'flex', md: 'block' }}
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="h2"
              component="h2"
              style={{ marginTop: '2.5rem', color: '#0056b3' }}
            >
              👋Welcome to
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              color="primary.main"
              fontSize="4rem"
              textAlign={{ xs: 'center', md: 'left' }}
            >
              The Aryans Academy School!
            </Typography>
            <Typography
              component="p"
              variant="body1"
              textAlign="justify"
              padding="1rem"
              margin={{ xs: '2rem 0', md: '2rem 2rem 0 0' }}
            >
              The Aryans Academy School was founded on 8th July 2010 under the
              Abhijaat Krishna Educational Society. It is running from CBSE
              Board. The aim of the school is to promote a system of integral
              education in a child friendly environment that emphasizes the
              unity of all knowledge, synthesizes humanity and sciences and
              recognizes the fact that each child is unique.
            </Typography>
            <Box
              marginTop="2.5rem"
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              gap="2rem"
            >
              <Button
                href="about"
                variant="contained"
                sx={{
                  borderRadius: '3rem',
                  minWidth: '20rem',
                  textTransform: 'none',
                  backgroundColor: 'secondary.main',
                }}
              >
                <Typography
                  sx={{
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    verticalAlign: 'middle',
                    width: '2.5rem',
                    height: '2.5rem',
                    color: 'secondary.main',
                    position: 'absolute',
                    transition: 'all .4s ease-in-out',
                    left: '10px',
                  }}
                >
                  <ChevronRight
                    fontSize="large"
                    sx={{
                      position: 'relative',
                      right: '4px',
                      bottom: '4px',
                    }}
                  />
                </Typography>
                <Typography
                  width="100%"
                  paddingLeft="2.5rem"
                  fontWeight="700"
                  fontSize="2rem"
                  textAlign="center"
                  color="white"
                >
                  About Us
                </Typography>
              </Button>
              <Button
                href="admissions"
                variant="contained"
                sx={{
                  borderRadius: '3rem',
                  minWidth: '20rem',
                  textTransform: 'none',
                  fontWeight: '700',
                  fontSize: '2rem',
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: 'secondary.main',
                }}
              >
                <Typography
                  sx={{
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    verticalAlign: 'middle',
                    width: '2.5rem',
                    height: '2.5rem',
                    color: 'secondary.main',
                    position: 'absolute',
                    transition: 'all .4s ease-in-out',
                    left: '10px',
                  }}
                >
                  <ChevronRight
                    fontSize="large"
                    sx={{
                      position: 'relative',
                      right: '4px',
                      bottom: '4px',
                    }}
                  />
                </Typography>
                <Typography
                  width="100%"
                  paddingLeft="2.5rem"
                  fontWeight="700"
                  fontSize="2rem"
                  textAlign="center"
                  color="white"
                >
                  Admissions
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box maxWidth={{ md: '50%' }}>
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={30}
              grabCursor={true}
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-slide_main">
                <Box
                  className="swiper-slide_main"
                  height={{ xs: '20rem', sm: '30rem', md: '40rem' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="sdf"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide_main">
                <Box
                  className="swiper-slide_main"
                  height={{ xs: '20rem', sm: '30rem', md: '40rem' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="sdf"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide_main">
                <Box
                  className="swiper-slide_main"
                  height={{ xs: '20rem', sm: '30rem', md: '40rem' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="sdf"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide_main">
                <Box
                  className="swiper-slide_main"
                  height={{ xs: '20rem', sm: '30rem', md: '40rem' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="sdf"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide_main">
                <Box
                  className="swiper-slide_main"
                  height={{ xs: '20rem', sm: '30rem', md: '40rem' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="sdf"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide_main">
                <Box
                  className="swiper-slide_main"
                  height={{ xs: '20rem', sm: '30rem', md: '40rem' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="sdf"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide_main">
                <Box
                  className="swiper-slide_main"
                  height={{ xs: '20rem', sm: '30rem', md: '40rem' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="sdf"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide_main">
                <Box
                  className="swiper-slide_main"
                  height={{ xs: '20rem', sm: '30rem', md: '40rem' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="sdf"
                  />
                </Box>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide_main">
                <Box
                  className="swiper-slide_main"
                  height={{ xs: '20rem', sm: '30rem', md: '40rem' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                    alt="sdf"
                  />
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
      <Box
        minHeight="25rem"
        margin="10rem 0"
        padding="2rem 0"
        sx={{ backgroundColor: 'primary.dark' }}
      >
        <Box
          maxWidth="1280px"
          minHeight="25rem"
          margin="auto"
          padding={{ xs: '2rem 1.5rem', md: '0 1.5rem' }}
          alignContent="center"
          justifyContent="space-around"
          display="flex"
          flexWrap="wrap"
          gap="4rem"
        >
          <Box
            minHeight="20rem"
            alignSelf="center"
            minWidth="30rem"
            maxWidth="30rem"
            display="flex"
            height="100%"
            padding="1rem"
            alignItems="center"
            flexDirection="column"
            sx={{
              background: 'hsla(0, 0%, 97%, .25)',
              backdropFilter: 'blur(5px)',
              borderRadius: '12px',
              border: '1px solid rgba(209, 213, 219, 0.3)',
              color: 'white',
            }}
          >
            <Hail
              sx={{
                color: 'white',
                fontSize: '5rem',
                backgroundColor: 'primary.dark',
                borderRadius: '50%',
                padding: '5px',
              }}
            />
            <Typography
              variant="h2"
              color="white"
              textAlign="center"
              margin=".5rem 0"
            >
              Best Teachers
            </Typography>
            <Typography
              variant="body1"
              color="white"
              textAlign="center"
              margin=".5rem 0"
              fontWeight="bold"
            >
              We have skilled educators shaping tomorrow's leaders!
            </Typography>
          </Box>
          <Box
            minHeight="20rem"
            alignSelf="center"
            minWidth="30rem"
            maxWidth="30rem"
            height="100%"
            display="flex"
            padding="1rem"
            alignItems="center"
            flexDirection="column"
            sx={{
              backdropFilter: 'blur(25px) saturate(100%)',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '12px',
              border: '1px solid rgba(209, 213, 219, 0.3)',
            }}
          >
            <Hail
              sx={{
                color: 'white',
                fontSize: '5rem',
                backgroundColor: 'primary.dark',
                borderRadius: '50%',
                padding: '5px',
              }}
            />
            <Typography variant="h2" textAlign="center" margin=".5rem 0">
              Best Curriculum
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              margin=".5rem 0"
              fontWeight="bold"
            >
              Unlocking potential through innovative learning pathways!
            </Typography>
          </Box>
          <Box
            minHeight="20rem"
            alignSelf="center"
            minWidth="30rem"
            maxWidth="30rem"
            height="100%"
            display="flex"
            padding="1rem"
            alignItems="center"
            flexDirection="column"
            sx={{
              background: 'hsla(0, 0%, 97%, .25)',
              backdropFilter: 'blur(5px)',
              borderRadius: '12px',
              border: '1px solid rgba(209, 213, 219, 0.3)',
              color: 'white',
            }}
          >
            <Hail
              sx={{
                color: 'white',
                fontSize: '5rem',
                backgroundColor: 'primary.dark',
                borderRadius: '50%',
                padding: '5px',
              }}
            />
            <Typography
              variant="h2"
              color="white"
              textAlign="center"
              margin=".5rem 0"
            >
              Best Facilities
            </Typography>
            <Typography
              variant="body1"
              color="white"
              textAlign="center"
              margin=".5rem 0"
              fontWeight="bold"
            >
              Enhancing learning experiences with cutting-edge amenities!
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="1280px"
        padding="0 15px"
        margin="10rem auto"
        textAlign="center"
      >
        <Typography variant="body1" component="p">
          Step into our school, where dedicated teachers nurture minds,
          cutting-edge amenities enrich experiences, and engaging events foster
          creativity. From innovative curriculum to supportive staff, we create
          an environment where every student thrives. Explore the endless
          opportunities awaiting you in our vibrant community of learning and
          discovery.
        </Typography>
      </Box>
      <Box maxWidth="1280px" padding="0 15px" margin="0 auto">
        <Box
          display="flex"
          gap={{ xs: '10rem', md: '5rem' }}
          margin="5rem 0"
          alignItems="space-between"
          flexDirection={{ xs: 'column', md: 'row' }}
        >
          <Box width={{ xs: '100%', md: '50%' }}>
            <Typography
              variant="h2"
              component="h2"
              textAlign="center"
              color="secondary.main"
              marginBottom="2rem"
            >
              School Stats
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              gap="5rem"
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
          </Box>
          <Box width={{ xs: '100%', md: '50%' }}>
            <NoticeBoard />
          </Box>
        </Box>
      </Box>
      <Box
        minHeight="30rem"
        margin="10rem 0"
        sx={{ backgroundColor: 'secondary.main' }}
      >
        <Box maxWidth="1280px" margin="auto">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isMobile ? 2 : 4}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="swiper_gallery"
          >
            <SwiperSlide className="swiper-slide_main_gallery">
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt="asdfasdf"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt="asdfasdf"
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt="asdfasdf"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt="asdfasdf"
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  alt="asdfasdf"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt="asdfasdf"
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  alt="asdfasdf"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt="asdfasdf"
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt="asdfasdf"
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                />{' '}
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      <Box
        maxWidth="1280px"
        margin={{ xs: '10rem 2rem', md: '10rem auto' }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          color="secondary.main"
          marginBottom="2rem"
        >
          Recent Events
        </Typography>
        <EventSlider events={events} />
        {/* <Button
          href="/events"
          variant="contained"
          sx={{
            marginTop: '4rem',
            padding: '1rem 2rem',
            fontSize: '2rem',
            color: 'white',
          }}
        >
          View More
        </Button> */}
      </Box>{' '}
      <Box
        minHeight="30rem"
        margin="10rem 0"
        sx={{ backgroundColor: 'primary.dark' }}
      >
        <Box maxWidth="1280px" margin="auto">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isMobile ? 2 : 4}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
            className="swiper_gallery"
          >
            <SwiperSlide className="swiper-slide_main_gallery">
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt="asdfasdf"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt="asdfasdf"
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt="asdfasdf"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt="asdfasdf"
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://swiperjs.com/demos/images/nature-5.jpg"
                  alt="asdfasdf"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt="asdfasdf"
                  src="https://swiperjs.com/demos/images/nature-6.jpg"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  src="https://swiperjs.com/demos/images/nature-7.jpg"
                  alt="asdfasdf"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt="asdfasdf"
                  src="https://swiperjs.com/demos/images/nature-8.jpg"
                />{' '}
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box maxWidth="30rem" maxHeight="30rem">
                <img
                  style={{ width: '100%', height: '100%' }}
                  alt="asdfasdf"
                  src="https://swiperjs.com/demos/images/nature-9.jpg"
                />{' '}
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
      <Testimonials />
    </Box>
  );
};

export default App;
