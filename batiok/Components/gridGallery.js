import styles from '../styles/gridGallery.module.css'
import  {ParallaxBanner}  from 'react-scroll-parallax';




const GridGallery = () => {
  return ( <>
  
  
  
<div className={styles.container}>
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
      image: '/gallery_images/25.jpg',
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
      image: '/gallery_images/42.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '1 / 1' }}/>


<ParallaxBanner
  className={styles.item6}
  layers={[
    {
      image: '/gallery_images/40.jpg',
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
  


  


  </> );
}
 
export default GridGallery;