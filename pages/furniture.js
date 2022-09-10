import styles from '../styles/custom.module.css'
import Services from '../Components/services';
import Mobila from '../Components/mobila';
import GridGallery from '../Components/gridGallery';
import WhyUs from '../Components/WhyUs';
import { motion } from "framer-motion";
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
import img1 from '../public/gallery_images/24.jpeg'
import img2 from '../public/gallery_images/16.jpg'
import img3 from '../public/gallery_images/22.jpeg'
import img4 from '../public/gallery_images/50.jpg'
import img5 from '../public/gallery_images/51.jpg'
import img6 from '../public/gallery_images/52.jpg'
import img7 from '../public/gallery_images/53.jpg'
import img8 from '../public/gallery_images/8.jpg'





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
<p className={styles.top_text}>Ne specializăm în mobilă la comandă pe care o <br />producem din materiale de calitate cu utilaje de ultimă performanță</p>
<Link href='/gallery'>
<a className='button_top hover-underline-animation'>Vezi Proiecte</a>
</Link>
</motion.div>
</motion.div>

<div className={styles.imgtop}>
<Image src={img1} layout='responsive'  />
</div>

<FadeInWhenVisible> 
<div className='container_center'>
<h1 className='ceter_text'>Cel mai important lucru pe care îl construim este reputația noastră. Scopul nostru este de a oferi fiecărui client produse de calitate și servicii impecabile.</h1>
</div>
</FadeInWhenVisible>   


<Services />
<Mobila title="Garantăm calitate" 
text='Echipa noastră este în continuă dezvoltare.Luăm în considerare fiecare detaliu care la rândul său formeaza un produs desăvârșit '
image='/moblaBg2.jpg' likee='/about'
/>
<FadeInWhenVisible>   
<div className='container_center'>
<h1 className='ceter_text'>Ne angajăm să construim relații pe termen lung cu clienții noștri, ascultându-le cerințele și furnizând soluții.</h1>
</div>
</FadeInWhenVisible>   

< GridGallery img1={img1} img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} img7={img7} img8={img8}   />


<WhyUs />
    
    </>

  );



}

export default Furniture

