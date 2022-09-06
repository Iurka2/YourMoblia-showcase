import Image from 'next/image';
import Link from 'next/link' 
import { slide as Menu } from 'react-burger-menu'
import toast from "react-hot-toast";
import logo from '../public/logoog.svg'





const Header = () => {
  return ( 
    <>
    <nav className='NavBar'>
  
    <Link href="/" >
 <div className='logo' > <a>
<Image src={logo} width= "100px" height='50' />

</a></div>
 </Link>
 
   <ul>

   <Link href='/furniture' >
    <li className='hover-midline-animation links'><a >Mobilă la comandă</a></li>
    </Link>


  <Link href="/gallery">
   <li className='hover-midline-animation links'><a >Proiecte</a></li>
   </Link>

  <Link href="/about">
  <li className='hover-midline-animation links'><a >Despre noi</a></li>
  </Link>


  <Link href="/contact">
  <li className='hover-midline-animation links'><a >Contact</a></li>
  </Link>


    </ul>
    <Link href='/contact'>
    <button className='button_heder hover-underline-animation '>Hai să colaborăm !</button> 
    </Link>
    
    </nav>
    <Menu right width={ '100%' } >
      <Link href='/'>
        <a id="home" className="bm-item" >Home</a>
        </Link>

        <Link href='/furniture'>
        <a id="about" className="bm-item" >Mobila la comandă</a>
        </Link>

        <Link href="/gallery">
        <a  className="bm-item" >Proiecte</a>
        </Link>
        
        <Link href="/about">
        <a  className="bm-item" >Despre Noi</a>
        </Link>

            <Link href="/contact">
        <a  className="bm-item" >Contact</a>
        </Link>
        


        <div className='burgerBottom'>
        <button  className="buttonBurger"
  onClick={() =>  { navigator.clipboard.writeText('yourmobila.ro@gmail.com'); 
  
  toast.success('E-mail copied',{
  
    style: {

      background: '#333',
      color: '#fff',
    }, })}}>
yourmobila.ro@gmail.com
</button>





<p  className="phonenrBurger"
  onClick={() =>  { navigator.clipboard.writeText('+40 729 359 925'); toast.success('Phone Copied',{
style: {
  background: '#333',
  color: '#fff',
},

  })}} >
+40 729 359 925
</p>
</div>
      </Menu>

        
    </>

    
   );
}
 
export default Header
