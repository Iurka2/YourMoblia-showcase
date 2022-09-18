import toast from "react-hot-toast";
import styles from '../styles/contact.module.css'
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from 'react-hook-form';
import Head from 'next/head'

const Contact = () => {

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
          toast.success('E-mail Trimis',{
            style: {
              background: '#333',
              color: '#fff',
            }, })
          
        },
       
      );
  }; 


  
  


  return ( 

    <>

<Head>
  <title> YourMobil | Contact </title>
   <meta name='keywords' content='Contact' />
</Head>

{/*     
     <h1 className={styles.title}>Suntem mereu încântați să auzim de la tine !</h1>
     <p className={styles.paragraph}>Indiferent dacă doriți să proiectăm și să realizăm întreaga dvs. casă sau doar bucătăria, dulapul sau biroul dvs. Totul este posibil. Contactează-ne, am dori să aflăm care sunt dorințele tale.</p> */}
    <div className={styles.container}> 


<div className={styles.formContainer2}>
<h1 className={styles.subtitle} >Suntem mereu încântați<br /> să auzim de la tine !</h1>
<form ref={form} onSubmit={handleSubmit(onSubmit)} className={styles.formContainer} >
        <label className={styles.formText} >Nume</label>
        <input type="text" {...register("user_name", {required: "Nume necesar", minLength: 3})}  className={styles.lab} />
        <span className="erorMesage">{errors.user_name?.message}</span>

        <label className={styles.formText}>Email</label>
        <input type="email" {...register("user_email", {required: 'Email necesar', maxLength: 100, pattern: /^\S+@\S+$/i})}  className={styles.lab} />
        <span className="erorMesage">{errors.user_email?.message}</span>

        <label className={styles.formText}>Messaj</label>
        <textarea  {...register("message", {required: 'Lasă un mesaj'})} type="text" placeholder="Salut, aș vrea să întreb.." className={styles.lab2} />
        <span className="erorMesage">{errors.message?.message}</span>

        <input type="submit" value="Trimite" className={`${styles.submit} ${styles.hoverUnderlineAnimation}`} />
      </form>
</div>
   
<div className={styles.leftContainer}>
 
    <div className={styles.someContainer}>
      <h1 className={styles.subtitle} >Ne poți găsi aici</h1>
<div className={styles.container2}>
      <p  className={styles.email}
  onClick={() =>  { navigator.clipboard.writeText('yourmobila.ro@gmail.com'); 
  toast.success('E-mail copied',{
    style: {
      background: '#333',
      color: '#fff',
    }, })}}>
yourmobila.ro@gmail.com
</p>

<p  className={styles.phonenr}
  onClick={() =>  { navigator.clipboard.writeText('+40 729 359 925'); toast.success('Phone Copied',{
style: {
  background: '#333',
  color: '#fff',
},
  })}} >
+40 729 359 925
</p>
</div>

    </div>


<div className={styles.some}>
  <a href="https://www.facebook.com/IIUM-497430033789824" target="_blank" rel="noreferrer">
  <p className={styles.face}>Faceboock</p>
  </a>

  <a href="https://wa.me/+40729359925" target="_blank" rel="noreferrer">
  <p className={styles.whats}>WhatsApp</p>
  </a>

</div>

</div>

    </div> 

    </>
   );
}
  
export default Contact ;