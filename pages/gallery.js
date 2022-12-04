import styles from "../styles/Galery.module.css";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";

import img8 from "../public/gallery_images/1.jpg";

import { db } from "../utils/firebase";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

//-------Get Props--------------------------------
export const getServerSideProps = async () => {
  const images = await db.collection("photo").limit(20).get();

  const imagesData = images.docs.map((img) => ({
    id: img.id,
    ...img.data(),
    params: { id: img.id.toString() },
  }));

  console.log("Images \n", imagesData);

  return {
    props: {
      images: JSON.parse(JSON.stringify(imagesData)),
    },
  };
};

//----------------------------------------------------

const Gallery = (props) => {
  const [images, setImages] = useState(props.images);
  const getImagesByTag = async () => {
    setImages([]);
    //--------------------
    //GET THE IMAGES HERE
    //--------------------
    setImages(images);
  };
  return (
    <>
      <Head>
        <title> YourMobila | Proiecte </title>
        <meta name="keywords" content="Proiecte mobila fotografii Brașov" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Galereie cu proiectele realizate" />
      </Head>

      <h1 className={styles.heading}>Bucătărie</h1>

      <Swiper
        spaceBetween={24}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
      >
        {/* //map Bucatarie images */}

        {images.map((img) => {
          if(img.tag == "Bucatarie")
          return (
            <SwiperSlide key={img.id}>
              <Zoom wrapStyle={{ maxWidth: "100%", minHeight: "100%" }}>
                <Image
                  src={img.imagine[0].downloadURL}
                  alt="product image"
                  layout="responsive"
                  width={"100%"}
                  height={"100%"}
                />
              </Zoom>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <h1 className={styles.heading}>Baie</h1>
      <Swiper
        spaceBetween={24}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation]}
      >
        {images.map((img) => {
          if(img.tag == "Baie")
          return (
            <SwiperSlide key={img.id}>
              <Zoom wrapStyle={{ maxWidth: "100%", minHeight: "100%" }}>
                <Image
                  src={img.imagine[0].downloadURL}
                  alt="product image"
                  layout="responsive"
                  width={"100%"}
                  height={"100%"}
                />
              </Zoom>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Gallery;
