import styles from '../styles/about.module.css'
import  {ParallaxBanner, ParallaxBannerLayer}  from 'react-scroll-parallax';
import { motion } from "framer-motion";
import Link from 'next/link';
import Head from 'next/head'













const fadeEffect = {
  hidden: {
    y: 50,
    opacity:0,
  },

  visible: {
    y: 0,
    opacity:1,
    transition: {
      damping: 60,
      type: "spring",
      stiffness: 200,
      staggerChildren: 0.25,      
    }
  }
}

function FadeInWhenVisible({ children }) {
  
 
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeEffect}
      
    >
      {children}
    </motion.div>
  );
}



const About = () => {

  return ( 

    <>
<Head>
  <title> YourMobil | Despre Noi </title>
   <meta name='keywords' content='Despre noi' />
</Head>

<ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
  <ParallaxBannerLayer image="/aboutImg.jpg" speed={-10} />
  <ParallaxBannerLayer className={styles.paralaxText}>
    <h1>Despre Noi</h1>
  </ParallaxBannerLayer>
</ParallaxBanner>


<FadeInWhenVisible>
<div className={styles.center} >
<motion.h1 className={styles.center_title} variants={fadeEffect} >Misiunea Noastră</motion.h1>
<div className={styles.center_text} >
  <motion.p variants={fadeEffect} className={styles.text}> Oferim un produs de calitate și o experiență excepțională fără niciun compromis</motion.p>
  
</div>
</div>
</FadeInWhenVisible>


<div className={styles.bigContainer}>
<div className={styles.heroTextContainer}>
  <h1 className={styles.heroTitle}>Compania noastră</h1>
  <p className={styles.heroText}> Avem o vastă experiență în fabricarea de mobilier la comandă.Pe parcurs la 20 de ani am proiectat și instalat sute de proiecte.Noi suntem profesionali în proiectarea și producerea mobilierului personalizat </p>
 <Link href='/contact'>
  <span className={`${styles.imgButton} ${styles.hoverUnderlineAnimation}`}>Hai să colaborăm !</span> 
  </Link>
</div>

<div className={styles.imgHero}>
<ParallaxBanner
  className={styles.itm1}
  
  
  layers={[
    {
      image:"/hero.jpg",
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '2 / 1' }}/>

  </div>
  </div>
  
  <FadeInWhenVisible>
<div className={styles.centerText}>
<h1>Ani de experiență și nenumărate<br /> proiecte în spatele nostru</h1>
</div>
</FadeInWhenVisible>



<div className={styles.gridContainer}>
<ParallaxBanner
  className={styles.item1}
  
  
  layers={[
    {
      image:"/gallery_images/22.jpeg",
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>



<ParallaxBanner
  className={styles.item2}
  layers={[
    {
      image: '/gallery_images/40.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>



<ParallaxBanner
  className={styles.item3}
  layers={[
    {
      image: '/gallery_images/24.jpeg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>


<ParallaxBanner
  className={styles.item4}
  layers={[
    {
      image: '/gallery_images/27.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>

<ParallaxBanner
  className={styles.item5}
  layers={[
    {
      image: '/gallery_images/41.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>


<ParallaxBanner
  className={styles.item6}
  layers={[
    {
      image: '/gallery_images/15.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>


<ParallaxBanner
  className={styles.item7}
  layers={[
    {
      image: '/gallery_images/26.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>



<ParallaxBanner
  className={styles.item8}
  layers={[
    {
      image: '/gallery_images/43.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>

</div>

    </>
   );
}
 
export default About;