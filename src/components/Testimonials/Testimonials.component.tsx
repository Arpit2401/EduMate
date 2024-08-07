import {
  Card,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
} from '@mui/material';
import { useLoader } from 'components/FullPageLoader/FullPageLoader.provider';
import React, { useState, useEffect } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Testimonial {
  text: string;
  name: string;
  profile: string;
}

const Testimonials: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://script.google.com/macros/s/AKfycbyrd5RehdeS1rfdLoTJjC4g0fTMwcg4EFSiMzj_f5goIun8SowJoHTGolY_qu3wqHDd/exec?section=testimonials'
    )
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return testimonials.length > 0 ? (
    <Box
      maxWidth="1280px"
      margin={{ xs: '10rem 2rem', md: '10rem auto' }}
      padding="0 1.5rem"
    >
      <Typography
        variant="h2"
        component="h2"
        textAlign="center"
        color="secondary.main"
        marginBottom="1rem"
      >
        Testimonials
      </Typography>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={isMobile ? 1 : 3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        rewind={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <Box maxWidth={isMobile ? '100%': '33%'}>
            <SwiperSlide>
              <Box minHeight="18rem" marginTop="2rem" key={index}>
                <Card sx={{ borderRadius: '15px' }}>
                  <CardContent>
                    <Typography variant="body1" gutterBottom>
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      - {testimonial.name} ({testimonial.profile})
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>
    </Box>
  ) : null;
};

export default Testimonials;
