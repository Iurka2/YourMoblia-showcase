import { Toaster } from 'react-hot-toast'
import Layout from '../Components/layout'
import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import TransitionEffect from '../Components/Transition'



function MyApp({ Component, pageProps }) {
 
  return (
<>
<Toaster />
<ParallaxProvider>

<TransitionEffect>





<Layout>




<Component {...pageProps} />

</Layout>




</TransitionEffect>

</ParallaxProvider>

</>
  )

}

export default MyApp
