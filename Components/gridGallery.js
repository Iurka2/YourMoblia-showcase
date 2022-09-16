import styles from '../styles/gridGallery.module.css'
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { motion } from 'framer-motion';

const GridGallery = ({img1, img2, img3, img4,img5,img6,img7,img8 }) => {
  return ( <>
  
  <div className={styles.container}>
  
    

        <motion.div className={styles.item1} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%", minHeight: "100%" }}>
           <Image  layout='responsive' alt="photo of brown modern kitchen"  src={img1}  className={styles.pic}  />
          </Zoom>
         </motion.div>

         
        <motion.div className={styles.item2} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive' alt="photo of modern grey kitchen table"  src={img2}  className={styles.pic} />
          </Zoom>
         </motion.div>

         <motion.div className={styles.item3} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive' alt="photo of modern blue kitchen"   src={img3} className={styles.pic}  />
          </Zoom>
         </motion.div>


         <motion.div className={styles.item4} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'  alt="photo of bathroom"   src={img4} className={styles.pic}  />
          </Zoom>
         </motion.div>

         <motion.div className={styles.item5} whileHover={{scale:1.03}}> 
         <Zoom wrapStyle={{ maxWidth: "100%"}}>
           <Image  layout='responsive' alt="photo of modern small kitchen for family"   src={img5} className={styles.pic}  />
          </Zoom>
         </motion.div>

         
         <motion.div className={styles.item6} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive' alt="photo of modern small kitchen for family"  src={img6} className={styles.pic}   />
          </Zoom>
         </motion.div>


         <motion.div className={styles.item7} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive' alt="photo of white kitchen for big family"  src={img7} className={styles.pic}  />
          </Zoom>
         </motion.div>

         
         <motion.div className={styles.item8} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive' alt="photo of white kitchen for big family"   src={img8} className={styles.pic}  />
          </Zoom>
         </motion.div>

         
   





      </div>
  </> );
}
 
export default GridGallery;