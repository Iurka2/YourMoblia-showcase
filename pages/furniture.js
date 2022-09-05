import styles from '../styles/custom.module.css'
import  {ParallaxBanner}  from 'react-scroll-parallax';
import Services from '../Components/services';
import Mobila from '../Components/mobila';
import GridGallery from '../Components/gridGallery';
import WhyUs from '../Components/WhyUs';
import { motion } from "framer-motion";
import Link from 'next/link';
import Head from 'next/head'
 
function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{damping: 60, type: "spring", stiffness: 200,delay:0.2}}
      variants={{visible: {  y: 0, opacity:1,},
                 hidden: { y: 50, opacity:0, }
      }}
    >
      {children}
    </motion.div>
  );
}




const Furniture = () => {


  const textAnim = {
    initial: {
      y: 50,
      opacity:0,
      
     
      
    },
    animate: {
      y: 0,
      opacity:1,
      transition: {
        damping: 60,
        type: "spring",
        stiffness: 200,
        staggerChildren: 0.25, 
        
        
      }
    }
  };


  return (  

    <>

<Head>
  <title> YourMobil | Mobilă la comandă </title>
   <meta name='keywords' content='Mobila la comanda' />
</Head>



<motion.div className={styles.container} variants={textAnim} initial="initial"
        animate="animate">
<motion.h1 variants={textAnim} className={styles.title} >Transformăm orice încăpere<br /> într-un loc<span className={styles.estetic}> estetic</span> și<span className={styles.estetic}> confortabil</span> </motion.h1>
<motion.div variants={textAnim} className={styles.top_text_container}>
<p className={styles.top_text}>Ne specializăm în mobilă la comandă pe care o <br />producem din materie primă cu atenție la detalii</p>
<Link href='/gallery'>
<a className='button_top hover-underline-animation'>Vezi Proiecte</a>
</Link>
</motion.div>
</motion.div>

<ParallaxBanner
  className={styles.top_img}
  layers={[
    {
      image: '/gallery_images/26.jpg',
      speed: 5,
    },
  ]}
  style={{ aspectRatio: '2 / 1' }}/>

<FadeInWhenVisible> 
<div className='container_center'>
<h1 className='ceter_text'>Cel mai important lucru pe care îl construim este reputația noastră. Scopul nostru este de a oferi fiecărui client produse de calitate și servicii impecabile pentru clienți</h1>
</div>
</FadeInWhenVisible>   


<Services />
<Mobila title="Garantăm calitate" 
text='Ne asiguram de măsurari perfecte, atragem atenție la visualul estetic pe parcursul întregului proces procesul.Luăm în considerare fiecare detaliu care la rândul său formeaza un produs desăvârșit '
image='/moblaBg2.jpg' likee='/about'
/>
<FadeInWhenVisible>   
<div className='container_center'>
<h1 className='ceter_text'>Ne angajăm să construim relații pe termen lung cu clienții noștri, ascultându-le nevoile și furnizând soluții.</h1>
</div>
</FadeInWhenVisible>   

<GridGallery  />


<WhyUs />
    
    </>

  );



}

export default Furniture

