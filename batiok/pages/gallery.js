import styles from '../styles/Galery.module.css'
import  {ParallaxBanner}  from 'react-scroll-parallax';
import Head from 'next/head'
const Gallery = () => {
  return ( 





<>

<Head>
  <title> YourMobil | Proiecte </title>
   <meta name='keywords' content='Proiecte' />
</Head>


<div className={styles.container}>
<ParallaxBanner
  className={styles.item1}
  layers={[
    {
      image: '/gallery_images/1.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>
<h1 className={styles.text1}> WELCOME</h1>

<ParallaxBanner
  className={styles.item2}
  layers={[
    {
      image: '/gallery_images/20.jpeg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>



<ParallaxBanner
  className={styles.item3}
  layers={[
    {
      image: '/gallery_images/17.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>


<ParallaxBanner
  className={styles.item4}
  layers={[
    {
      image: '/gallery_images/15.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>

<ParallaxBanner
  className={styles.item5}
  layers={[
    {
      image: '/gallery_images/16.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>


<ParallaxBanner
  className={styles.item6}
  layers={[
    {
      image: '/gallery_images/23.jpeg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>


<ParallaxBanner
  className={styles.item7}
  layers={[
    {
      image: '/gallery_images/7.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>

<ParallaxBanner
  className={styles.item8}
  layers={[
    {
      image: '/gallery_images/27.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>


<ParallaxBanner
  className={styles.item9}
  layers={[
    {
      image: '/gallery_images/22.jpeg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>



<h1 className={styles.text2}> TO</h1>
<h1 className={styles.text3}> YOUR</h1>
<h1 className={styles.text4}> NEW</h1>
<h1 className={styles.text5}> HOME.</h1>
</div>

</>

   );
}
 
export default Gallery