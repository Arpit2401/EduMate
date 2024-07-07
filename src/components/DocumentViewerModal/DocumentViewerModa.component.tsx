import * as React from 'react';
import { IconButton, Dialog, DialogContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import form80G1 from '../../assets/images/80G-1.jpeg';
import form80G2 from '../../assets/images/80G-2.jpeg';
import form12AA from '../../assets/images/12AA.jpeg';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const documents = {
  '80G': [form80G1, form80G2],
  '12AA': [form12AA]
};

const DocumentViewerModal = ({
  isOpen,
  handleClose,
  documentTitle,
  type
}: {
  isOpen: boolean;
  handleClose: () => void;
  documentTitle: string;
  type: '80G' | '12AA'
}) => {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <Typography variant="h3" padding="8px" textAlign="center">
          {documentTitle}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={1}
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
            {documents[type].map((document, index) => (
              <Box maxWidth='100%'>
                <SwiperSlide>
                  <Box
                    component="img"
                    src={document}
                    alt={`${documentTitle}-${index}`}
                    height="100%"
                    width="100%"
                    minHeight="25rem"
                    minWidth="20rem"
                  />
                </SwiperSlide>
              </Box>
            ))}
          </Swiper>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default DocumentViewerModal;
