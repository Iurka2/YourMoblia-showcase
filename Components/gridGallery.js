import styles from '../styles/gridGallery.module.css'
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


const GridGallery = ({img1, img2, img3, img4,img5,img6,img7,img8 }) => {
  return ( <>
  
  <div className={styles.container}>
  
    

        <div className={styles.item1}>
         <Zoom wrapStyle={{ maxWidth: "100%", minHeight: "100%" }}>
           <Image  layout='responsive'  src={img1}  className={styles.pic}  />
          </Zoom>
         </div>

         
        <div className={styles.item2}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'  src={img2}  className={styles.pic} />
          </Zoom>
         </div>

         <div className={styles.item3}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'   src={img3} className={styles.pic}  />
          </Zoom>
         </div>


         <div className={styles.item4}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'  src={img4} className={styles.pic}  />
          </Zoom>
         </div>

         <div className={styles.item5}>
         <Zoom wrapStyle={{ maxWidth: "100%"}}>
           <Image  layout='responsive'  src={img5} className={styles.pic}  />
          </Zoom>
         </div>

         
         <div className={styles.item6}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'  src={img6} className={styles.pic}   />
          </Zoom>
         </div>


         <div className={styles.item7}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'  src={img7} className={styles.pic}  />
          </Zoom>
         </div>

         
         <div className={styles.item8}>
         <Zoom wrapStyle={{ maxWidth: "100%" }}>
           <Image  layout='responsive'   src={img8} className={styles.pic}  />
          </Zoom>
         </div>

         
   





      </div>
  </> );
}
 
export default GridGallery;