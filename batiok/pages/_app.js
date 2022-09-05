import { Toaster } from 'react-hot-toast'
import Layout from '../Components/layout'
import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import { ScrollerMotion } from 'scroller-motion'
import TransitionEffect from '../Components/Transition'



function MyApp({ Component, pageProps }) {
 
  return (
<>
<Toaster />


<ScrollerMotion >
<TransitionEffect>
<div className='App'>

<Layout>

<ParallaxProvider>




<Component {...pageProps} />



</ParallaxProvider>
</Layout>

</div>
</TransitionEffect>
</ScrollerMotion>

</>
  )

}

export default MyApp
