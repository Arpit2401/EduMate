import { Box } from '@mui/material';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const EventDetails = () => {
  return (
    <Box maxWidth="1280px" padding="0 15px" margin="3rem auto">
      <h1
        style={{
          color: '#0056b3',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: '3.5rem',
            color: '#f37335',
          }}
        >
          Name of the Event
        </span>
      </h1>
      <Box maxWidth="1080px" maxHeight="20rem" height="20rem" margin="0 auto">
        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide className="swiper-slide_gallery">
            <Box maxWidth="100%" maxHeight="20rem">
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="detail"
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box maxWidth="100%" maxHeight="20rem">
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="detail"
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box maxWidth="100%" maxHeight="20rem">
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="detail"
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <h1
        style={{
          color: '#0056b3',
        }}
      >
        About the Event
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic
        dignissimos repudiandae, vero ratione libero quo eum esse eaque minima
        dolor nostrum commodi maiores distinctio veniam laborum quae recusandae
        quidem! Nobis voluptatem fugiat eligendi porro officiis, doloremque sit
        dolores deleniti, magnam omnis laboriosam tenetur temporibus aspernatur
        assumenda fugit eveniet, eos numquam velit sunt deserunt! Illo
        reprehenderit illum nisi ex ea! Commodi eos repellendus dolore veniam
        dolor excepturi eius consequatur veritatis animi! Assumenda illo,
        incidunt voluptate blanditiis sunt eos dolore! Quisquam nulla at iusto
        velit aspernatur deserunt ex magnam, maxime ipsa.
      </p>
      <h1
        style={{
          color: '#0056b3',
        }}
      >
        Activities
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic
        dignissimos repudiandae
        <br /> vero ratione libero quo eum esse eaque minima dolor nostrum
        commodi maiores distinctio veniam laborum quae recusandae quidem! Nobis
        voluptatem fugiat eligendi porro officiis
        <br />
        doloremque sit dolores deleniti, magnam omnis laboriosam tenetur
        temporibus aspernatur assumenda fugit eveniet
        <br /> eos numquam velit sunt deserunt! Illo reprehenderit illum nisi ex
        ea
        <br /> Commodi eos repellendus dolore veniam dolor excepturi eius
        consequatur veritatis animi! Assumenda illo
        <br /> incidunt voluptate blanditiis sunt eos dolore
        <br /> Quisquam nulla at iusto velit aspernatur deserunt ex magnam,
        maxime ipsa.
      </p>
      <h1
        style={{
          color: '#0056b3',
        }}
      >
        Event Timeline
      </h1>
      <Box display="flex" gap="2rem" flexWrap="wrap">
        <Box
          maxHeight="20rem"
          maxWidth="20rem"
          height="10rem"
          width="20rem"
          padding="1rem"
          borderRadius="15px"
          style={{ background: 'yellow' }}
        >
          <h2
            style={{
              color: '#0056b3',
              marginBottom: '1rem',
            }}
          >
            Heading 1
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            voluptatem earum ducimus dolorum iste quisquam culpa, cum explicabo
            dicta reiciendis tempora officia accusamus mollitia quas.
          </p>
        </Box>
        <Box
          maxHeight="20rem"
          maxWidth="20rem"
          height="10rem"
          width="20rem"
          padding="1rem"
          borderRadius="15px"
          style={{ background: 'yellow' }}
        >
          <h2
            style={{
              color: '#0056b3',
              marginBottom: '1rem',
            }}
          >
            Heading 2
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            voluptatem earum ducimus dolorum iste quisquam culpa, cum explicabo
            dicta reiciendis tempora officia accusamus mollitia quas.
          </p>
        </Box>
        <Box
          maxHeight="20rem"
          maxWidth="20rem"
          height="10rem"
          width="20rem"
          padding="1rem"
          borderRadius="15px"
          style={{ background: 'yellow' }}
        >
          <h2
            style={{
              color: '#0056b3',
              marginBottom: '1rem',
            }}
          >
            Heading 3
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            voluptatem earum ducimus dolorum iste quisquam culpa, cum explicabo
            dicta reiciendis tempora officia accusamus mollitia quas.
          </p>
        </Box>
      </Box>
      <h1
        style={{
          color: '#0056b3',
        }}
      >
        Venue Details
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        veritatis delectus, magnam quo ipsum, cum sed dolore facilis quisquam
        molestias quod distinctio doloribus sunt fugit similique harum eos
        temporibus! Quam! Corporis totam natus, temporibus nam aliquid iste at
        asperiores deserunt numquam architecto saepe ea ducimus rerum quas,
        autem modi! Enim sit labore dolores eos dicta at itaque accusantium
        fugiat quia?
      </p>
    </Box>
  );
};

export default EventDetails;
