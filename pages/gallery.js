import styles from '../styles/Galery.module.css'
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { motion } from 'framer-motion';
import Head from 'next/head'
import img1 from '../public/gallery_images/24.jpeg'
import img2 from '../public/gallery_images/16.jpg'
import img3 from '../public/gallery_images/22.jpeg'
import img4 from '../public/gallery_images/50.jpg'
import img5 from '../public/gallery_images/51.jpg'
import img6 from '../public/gallery_images/52.jpg'
import img7 from '../public/gallery_images/53.jpg'
import img8 from '../public/gallery_images/1.jpg'
import img9 from '../public/gallery_images/18.jpg'
import img10 from '../public/gallery_images/14.jpg'
import img11 from '../public/gallery_images/11.jpg'


const Gallery = () => {
  return ( 
<>

<Head>
  <title> YourMobil | Proiecte </title>
   <meta name='keywords' content='Proiecte' />
</Head>


<div className={styles.container}>




<motion.div className={styles.item1} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%", minHeight: "100%" }}>
           <Image  layout='responsive'  src={img1}  className={styles.pic}  />
          </Zoom>
         </motion.div>

         
        <motion.div className={styles.item2} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'  src={img2}  className={styles.pic} />
          </Zoom>
         </motion.div>

         <motion.div className={styles.item3} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'   src={img3} className={styles.pic}  />
          </Zoom>
         </motion.div>


         <motion.div className={styles.item4} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'  src={img4} className={styles.pic}  />
          </Zoom>
         </motion.div>

         <motion.div className={styles.item5} whileHover={{scale:1.03}}> 
         <Zoom wrapStyle={{ maxWidth: "100%"}}>
           <Image  layout='responsive'  src={img5} className={styles.pic}  />
          </Zoom>
         </motion.div>

         
         <motion.div className={styles.item6} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'  src={img6} className={styles.pic}   />
          </Zoom>
         </motion.div>


         <motion.div className={styles.item7} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'  src={img7} className={styles.pic}  />
          </Zoom>
         </motion.div>

         
         <motion.div className={styles.item8} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'   src={img8} className={styles.pic}  />
          </Zoom>
         </motion.div>


         <motion.div className={styles.item9} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'   src={img9} className={styles.pic}  />
          </Zoom>
         </motion.div>

         <motion.div className={styles.item10} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'   src={img10} className={styles.pic}  />
          </Zoom>
         </motion.div>

         <motion.div className={styles.item11} whileHover={{scale:1.03}}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'   src={img11} className={styles.pic}  />
          </Zoom>
         </motion.div> 
         

<h1 className={styles.text1}> WELCOME</h1>
<h1 className={styles.text2}> TO</h1>
<h1 className={styles.text3}> YOUR</h1>
<h1 className={styles.text4}> NEW</h1>
<h1 className={styles.text5}> HOME.</h1>
</div>

</>

   );
}
 
export default Gallery