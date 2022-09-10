import Image from 'next/image';
import Link from 'next/link' 
import Drawer from 'react-modern-drawer'
import toast from "react-hot-toast";
import logo from '../public/logoog.svg'
import { useState } from 'react';
import 'react-modern-drawer/dist/index.css'

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from 'react-hook-form';




const Header = () => {


  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }


  const [isOpen2, setIsOpen2] = useState(false)
  const toggleDrawer2 = () => {
      setIsOpen2((prevState) => !prevState)
  }

  const form = useRef();




  const { register,handleSubmit, formState: { errors } } = useForm();


  const onSubmit = () => {


    emailjs
      .sendForm(
        "service_oup9d5i",
        "template_hjm1zqo",
        form.current,
        "OFKSLabrfB4SjtZms"
      )
      .then(
        (result) => {
          toast.success('Email expediat',{
            style: {
              background: '#333',
              color: '#fff',
            }, })
          
        },
       
      );
  }; 



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
<div>
    <button onClick={toggleDrawer}  className='button_heder hover-underline-animation '>Hai să colaborăm !</button> 


    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                size='35vw'
                style={{ 
                  backgroundColor: '#191716',
           
                  
                }}>
              
              

              <div className='formContainer2'>
<h1 className="subtitle" >Suntem mereu încântați<br /> să auzim de la tine !</h1>
<form ref={form} onSubmit={handleSubmit(onSubmit)} className="formContainer" >
        <label className='formText' >Nume</label>
        <input type="text" {...register("user_name", {required: "Nume necesar", minLength: 3})}  className='lab' />
        <span className="erorMesage">{errors.user_name?.message}</span>

        <label className='formText'>Email</label>
        <input type="email" {...register("user_email", {required: 'Email necesar', maxLength: 100, pattern: /^\S+@\S+$/i})}  className='lab' />
        <span className="erorMesage">{errors.user_email?.message}</span>

        <label className='formText'>Messaj</label>
        <textarea  {...register("message", {required: 'Lasă un mesaj'})} type="text" placeholder="Salut, aș vrea să întreb.." className='lab2' />
        <span className="erorMesage">{errors.message?.message}</span>

        <input type="submit" value="Trimete" className="submit" />
      </form>
</div>
</Drawer>
</div>




<div className='mobileMenu'>
<button onClick={toggleDrawer2} className='hederButton'><svg width="40" height="40" viewBox="0 0 21 14"  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9922 9H2" stroke="#191716" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M19.9922 13H1.99219" stroke="#191716" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M19.9922 5H1.99219" stroke="#191716" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M19.9922 1H5.99219" stroke="#191716" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
</svg>
</button>

<Drawer
             open={isOpen2}
             onClose={toggleDrawer2}
             direction='right'
             size='100%'
             style={{ 
               backgroundColor: '#191716',
             }}> 

             


<svg  onClick={toggleDrawer2} className='close' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1.02344L1 13.0234" stroke="#b8b7ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 1.02344L13 13.0234" stroke="#b8b7ad" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>




<div className='listItems'>
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
     
</div>

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

</Drawer> 
     

</div>



    </nav>

   
    </>

    
   );
}
 
export default Header
