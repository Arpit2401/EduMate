import { Typography, Box } from '@mui/material';
import { useLoader } from 'components/FullPageLoader/FullPageLoader.provider';
import { useState, useEffect } from 'react';
import { FreeMode, Scrollbar, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const NoticeBoard = () => {
  const [notices, setNotices] = useState<string[]>([]);
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://script.google.com/macros/s/AKfycbzNjMUIWuBTo1SwIi7XPiqQqC-GXABq35k5Q-O7CiiET7hkqNX9Dnbr3yVu752NsudW/exec?section=notices'
    )
      .then((response) => response.json())
      .then((data) => {
        setNotices(data.data);
        setLoading(false);
      })
      .catch(() => { 
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        textAlign="center"
        color="secondary.main"
        marginBottom="2rem"
      >
        Notice Board
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        borderRadius="15px"
        maxHeight="40rem"
        minHeight="40rem"
        padding="2rem 1rem"
        overflow="visible"
        width="100%"
        boxShadow="0px 0px 15px 4px rgba(222,222,222,0.8)"
      >
        {notices.length > 0 ? (
          <Swiper
            direction={'vertical'}
            slidesPerView={'auto'}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Scrollbar, Mousewheel, Autoplay]}
          >
            {notices.map((content, index) => (
              <SwiperSlide>
                <Box
                  key={index}
                  sx={{
                    backdropFilter: 'blur(0px) saturate(0%)',
                    backgroundColor: 'primary.main',
                  }}
                  margin="0 auto 2rem"
                  maxHeight="fit-content"
                  minHeight="fit-content"
                  minWidth="4rem"
                  maxWidth="90%"
                  padding="1rem"
                  borderRadius="15px"
                  border=" 1px solid rgba(209, 213, 219, 0.3)"
                >
                  <Typography color="white" variant="body1" fontWeight="bold">
                    {/* Schools will be closed for the next Friday and Saturday.
                  School Timings for the rest of the week will be 10 am - 3pm. */}
                    {content}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Typography variant="body1" textAlign="center" margin="auto">
            It looks like there are no notices to display right now. Stay tuned
            for upcoming announcements!
          </Typography>
        )}
      </Box>
    </>
  );
};

export default NoticeBoard;
