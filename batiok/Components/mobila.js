import Link from 'next/link';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';



const Mobila = ({title,text,image,likee }) => {
  return ( 

<>



<ParallaxBanner style={{ aspectRatio: '2 / 1', marginTop: "150px" }} className='pralexContainer'>
  <ParallaxBannerLayer image={image} speed={-6} />
  <ParallaxBannerLayer className="paralaxTextContainer">
    <h1 className="paralaxTitle">{title}</h1>
    <p className="paralaxText">{text}</p>
    <Link href={likee}>
    <span className={"paralaxButton hoverUnderlineAnimation"}>Află mai mult</span> 
    </Link>
  </ParallaxBannerLayer>
</ParallaxBanner>
</>

   );
}
 
export default Mobila

// style={{width: '50vw', height: '70vh', position: 'relative' ,}}