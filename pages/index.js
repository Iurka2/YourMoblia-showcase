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
       transition={{damping: 60, type: "spring", stiffness: 200,delay:0.5}}
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
{/* research seo and add mobila la comandă brasov */}
<Head>
  <title> YourMobila | Acasă </title>
   <meta name='keywords' content='Mobila la comanda' />
   <link rel="icon" href="/favicon.ico" />
   <meta name='description' content='Mobila la comandă pentru tine și familia ta' /> 
   <meta name="google-site-verification" content="0T9quiywXv8bnuvwBD8IBlTaih4ZW6aWj0nJjUn7SgY" />
</Head>







<AnimatePresence >
<motion.div className={styles.container}>
<motion.h1 variants={textAnim} initial="initial"
        animate="animate" className={styles.title}>Creăm proiecte de calitate înaltă  <span className={styles.important_text}>de 20 de ani</span>  </motion.h1> 

   

      
   <motion.div variants={textAnim} initial="initial"
        animate="animate" className={styles.top_text_container}>
<motion.p variants={textAnim}   className={styles.top_text}>Ne specializăm în mobilă la comandă pe care o producem din materiale de calitate cu atenție la detalii</motion.p>
<Link href='/gallery'> 
<motion.a variants={textAnim}  className='button_top hover-underline-animation'>Vezi Proiecte</motion.a>
</Link> 
 </motion.div>
 </motion.div>
 </AnimatePresence>




<Mobila text="De-a lungul anilor ne-am dezvolat, ne-am perfecționat, pentru a satisface cele mai exigente dorințe." title='Mobilă cu suflet, caracter și temperament' image='/photo_top.jpg' likee='/about'  />

<AnimatePresence >
<FadeInWhenVisible>
<div className='container_center'>
<h1 className='ceter_text'>Realizarea de mobilă la comandă este o colaborare strânsă între dumneavoastră, ca client, și noi, ca partener de încredere în implementarea celor mai îndrăznețe idei.</h1>
</div>
</FadeInWhenVisible>  
</AnimatePresence >

<Mobila text="Oferim soluții individuale de design,folosim o varietate largă de materiale și feronerie de la cei mai renumiți producători.Principiul nostru: să nu alegeți între calitate și preț." title='Mobilă la comandă' image='/gridPhoto1.jpg' likee='/furniture'  /> 


<AnimatePresence >
<FadeInWhenVisible>
<div className='container_center'>
<h1 className='ceter_text'>Facem doar produse utile pe care am dori să le deținem noi înșine.Producerea unei bucatarie sau altui mobilier este o creație, la care puteți participa și voi.</h1>
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
