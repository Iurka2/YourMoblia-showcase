import Head from 'next/head'
import Services from '../Components/services';
import WhyUs from '../Components/WhyUs';
import styles from '../styles/Home.module.css'
import Mobila from '../Components/mobila';
import { motion,AnimatePresence } from "framer-motion";
import Link from 'next/link';






const textAnim = {
  initial: {
    y: 100,
    opacity:0,
    
   
    
  },
  animate: {
    y: 0,
    opacity:1,
    transition: {
      damping: 60,
      type: "spring",
      stiffness: 200,
      delayChildren: 0.4
      
      
    }
  }
};





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
 


export default function Home({isVisible }) {
 

  return (
   <>

<Head>
  <title> YourMobil | Acasă </title>
   <meta name='keywords' content='Mobila la comanda' />
</Head>

<div className={styles.container}>





<AnimatePresence >
    
<motion.h1 variants={textAnim} initial="initial"
        animate="animate" className={styles.title}>Creăm proiecte de calitate înaltă  <span className={styles.important_text}>de 20 de ani</span>  </motion.h1> 
     </AnimatePresence>
   

        <AnimatePresence >
   <motion.div variants={textAnim} initial="initial"
        animate="animate" className={styles.top_text_container}>
<motion.p variants={textAnim}   className={styles.top_text}>Ne specializăm în mobilă la comandă pe care o <br />producem din materie de calitate cu atenție la detalii</motion.p>
<Link href='/gallery'> 
<motion.a variants={textAnim}  className='button_top hover-underline-animation'>Vezi Proiecte</motion.a>
</Link> 
 </motion.div>
 </AnimatePresence>
</div>



<Mobila text="De-a lungul anilor am format experiență, împreună cu clienți satisfăcuți.Am realizat diverse proiecte.  " title='Mobilă cu suflet, caracter și temperament' image='/photo_top.jpg' likee='/about'  />

<AnimatePresence >
<FadeInWhenVisible>
<div className='container_center'>
<h1 className='ceter_text'>Realizarea de mobilă la comandă este o colaborare strânsă între dumneavoastră, ca client, și noi, ca partener de încredere în implementarea celor mai îndrăznețe idei.</h1>
</div>
</FadeInWhenVisible>  
</AnimatePresence >

<Mobila text="Folosind tehnici moderne de fabricație, aprovizionând cu atenție materiale și lucrând cu cele mai bune minți din afacere, proiectăm tot ceea ce facem cu un etos simplu: să nu vă facă să alegeți între calitate și preț." title='Mobilă la comandă' image='/gridPhoto1.jpg' likee='/furniture'  /> 


<AnimatePresence >
<FadeInWhenVisible>
<div className='container_center'>
<h1 className='ceter_text'>Facem doar produse utile pe care am dori să le deținem noi înșine. Pentru noi, crearea de produse atemporale, bine făcute este forma supremă de durabilitate.</h1>
</div>
</FadeInWhenVisible>  

</AnimatePresence >


<AnimatePresence >
<Services />

</AnimatePresence >

<AnimatePresence >
<WhyUs />

</AnimatePresence >


   

   
   </>
  )
}

{/* <img src='/gallery_images/4.jpg' className={styles.item2}></img>
<img src='/gallery_images/8.jpg' className={styles.item3}></img>
<img src='/gallery_images/11.jpg' className={styles.item4}></img>
<img src='/gallery_images/12.jpg' className={styles.item5}></img>
<img src='/gallery_images/2.jpg' className={styles.item6}></img> */}