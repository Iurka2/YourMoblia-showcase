import styles from '../styles/Services.module.css'
import { motion } from "framer-motion";




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
    
      staggerChildren: 0.45,
     
      
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




const Services = () => {
  return ( 
    <>
  <FadeInWhenVisible>
    <div className={styles.container}>
  
      <motion.div className={styles.containerText} variants={fadeEffect}>
      <h1 className={styles.heding} >
        Serviicile Noastre
      </h1 >
      <motion.p className={styles.text} variants={fadeEffect}> Soluții interioare funcționale, practice, care fac viața simplă și frumoasă. Personalizat pentru tine și cu tine.</motion.p>
      </motion.div>
      


<motion.div  className={styles.smallContainer}   variants={fadeEffect}>
  <h1 className={styles.title}>01. Măsurari</h1>
  <p className={styles.paragraph}>Vom merge la fața locului pentru a lua măsurările precise,și discuta potețialele culori/materiale</p>
</motion.div>

<motion.div className={styles.smallContainer} variants={fadeEffect}>
  <h1 className={styles.title }>02. Desen schiță</h1>
  <p className={styles.paragraph}>Producem desene de schițate și modelare 3D. Acest pas ne permite să ne asigurăm că înțelegerea noastră a proiectului se potrivește cu așteptările clientului. </p>
</motion.div>
<motion.div className={styles.smallContainer} variants={fadeEffect}>
  <h1 className={styles.title}>03. Proiectul tehnic</h1>
  <p className={styles.paragraph}>Efectuarea proectului tehnic conform schiței, pregătirea documentației pentru producere, eventual anunțarea clientului dacă sunt modificări.</p>
</motion.div>
<motion.div className={styles.smallContainer} variants={fadeEffect}>
  <h1 className={styles.title}>04. Asamblare</h1>
  <p className={styles.paragraph}>Asamblare materialelor, la forma finală a produsului, gata pentru transportare către dumneavoastră  </p>

</motion.div>
<motion.div className={styles.smallContainer} variants={fadeEffect}>
  <h1 className={styles.title}>05. Montare</h1>
  <p className={styles.paragraph}>
Deoarece un proiect este finalizat doar odată ce este înrădăcinat în mediul său, oferim servicii de instalare pentru o integrare perfectă în spațiul dumneavoastră.</p>
</motion.div>


    </div>
    </FadeInWhenVisible>
    </>

   );
}
 
export default Services;