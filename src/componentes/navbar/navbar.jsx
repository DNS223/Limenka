"use client"
import styles from './navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { MdAccountCircle } from "react-icons/md";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
   let icon
   const [visible, setVisible] = useState(true)
   function handleMenu(){
      visible ? setVisible(false) : setVisible(true)
      console.log("Si")
      
   }

    return (
     <header className={styles.header}>
     <Image src="https://www.limenka360.com/logo-color.png" width={160} height={44} alt=''></Image>

        {/* Los 4 primeros Links */}
     <div className={styles.secciones}> 
     <Link href="">Inicio</Link>
     <Link href="">Acerca de</Link>
     <Link href="">Planes</Link>
     <Link href="">Contacto</Link>
     </div>

     {/* Link de inicio de sesión y solicitar demo */}
     
     <div className={styles.secciones2}> 
     <MdAccountCircle size={30} color="rgb(51, 51, 102 )" className={styles.icon}/>
     
     <Link href="">Iniciar Sesión</Link>
     <Link href="" className={styles.demo}>Solicitar una Demo</Link>
   
     </div>

      {/* Menu para responsive */}
      <div className={styles.menuIcon} onClick={handleMenu}><MenuIcon/></div>
      <div className={visible ? styles.movilMenu : styles.movilMenuDisable}>
         <div onClick={handleMenu}>   <CloseIcon/></div>
         <Image src="/logowhite.png" width={100} height={51} alt='' className={styles.logoMenu}/>
         <div className={styles.linkMenu}>
         <Link href="">Inicio</Link>
         <Link href="">Acerca de</Link>
         <Link href="">Planes</Link>
         <Link href="">Contacto</Link>
         </div>
    
   
       
      </div>
     </header>
    );
  }


  