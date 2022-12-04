import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: {
    y:-150,
  },

  visible: {
    y: 0,
    transition: {
      damping: 60,
      type: "spring",
      stiffness: 280, 
     
      
    }
  },

  out:{
    opacity:0,
    transition: {

      
    }
  }
}





/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */
const TransitionEffect = ({ children }) => {
  const { asPath } = useRouter();
  
  return (
    <div >
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={variants}
          animate="visible"
          initial="hidden"
          exit="out"
       
        >
          {children}
        </motion.div>


      </AnimatePresence>
    </div>
  );
};

export default TransitionEffect;