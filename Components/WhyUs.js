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




const WhyUs = () => {
  return ( 

    <FadeInWhenVisible>
<div className='why_container'>
<motion.h1 className="why_h1" variants={fadeEffect}>
De ce YourMobila 
</motion.h1>
<div className='why_container_text'>

<motion.div className="why_colum" variants={fadeEffect}>
<motion.span variants={fadeEffect}> <span className="why_nr">01.</span>Noi apreciem lucrul făcut calitativ și vrem să colaborăm cu persoane care la fel apreciază acest efort.</motion.span>
<motion.span variants={fadeEffect}><span className="why_nr">02.</span>Producem mobilă nestandartă, modernă, care se incorporează în orice încăpere. </motion.span>
</motion.div>

<motion.div className="why_colum" variants={fadeEffect}>
<motion.span variants={fadeEffect}><span className="why_nr">03.</span>Ne adresăm persoanelor care doresc să evite aspectul de serie al majorității mobilierului. </motion.span>
<motion.span variants={fadeEffect}><span className="why_nr">04.</span>Avem capacitatea de a crea toată gama de mobilier,începând cu camera de baie, living, dormitor, bucătărie și altele  </motion.span>
</motion.div>

<motion.div className="why_colum" variants={fadeEffect}>
<motion.span variants={fadeEffect}><span className="why_nr">05.</span>Considerăm că este sarcina noastră să propunem materiale care să satisfacă atât cerințele estetice, cât și cele practice.</motion.span>
<motion.span variants={fadeEffect}><span className="why_nr">06.</span>Mereu ne străduim să ajungem la un preț care convine cum clientului atât și companiei </motion.span>
</motion.div>
</div>

</div>
</FadeInWhenVisible>
   );
}
 
export default WhyUs;