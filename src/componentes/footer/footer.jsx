"use client"
import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import CommentIcon from '@mui/icons-material/Comment';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer=()=>{
    return(
      
    <div className={styles.container}>

      <div className={styles.row}>

      <div className={styles.column}>
        <div className={styles.footerLogo}>
        <Image src="https://www.limenka360.com/logo-color.png" width={160} height={44} alt=""></Image>
      <p>Somos una empresa 100% Mexicana con bastante experiencia para llevar el proceso desde la prospección, hasta la venta y postventa.</p>
      
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.footerLogo}>
          <div className={styles.segunda}>
          <h3 className={styles.title}>Acerca de</h3>
          <ul>
            <li> <Link href=""> Nosotros</Link></li>
            <li><Link href="">Contacto</Link></li>
            <li> <Link href="">Aviso de privacidad </Link> </li>
            <li> <Link href="">Ayuda</Link> </li>
          </ul>
      
          </div>
       
        </div>
      </div>


      <div className={styles.column}>
        <div className={styles.footerLogo}>
          <div className={styles.tercera}>
          <h3 className={styles.title}>Contacto</h3>
         <div className={styles.txtTercera}>
          <div className={styles.medioContact}>
            <PhoneInTalkIcon /> <p>806(000)8899</p> 
          </div>
          <div className={styles.medioContact}>
            <CommentIcon/> <p>contacto@limenka360.com</p> 
          </div>
         </div>
      
          </div>
       
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.footerLogo}>
          <div className={styles.cuarta}>
          <h3 className={styles.title}>Síguenos</h3>
         <div className={styles.iconsLink}>
          <div><FacebookIcon /></div>
          <div> <InstagramIcon/></div>
         <div> <YouTubeIcon/></div>
         
         </div>
      
          </div>
       
        </div>
      </div>

      </div>
     
      <div className={styles.copyRight}>
      Copyright © 2023 Limenka 360. Todos los derechos reservados.
      </div>

        
      </div>
    )
}

export default Footer