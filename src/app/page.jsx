import Image from "next/image";
import styles from "./page.module.css";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import Card from "@/componentes/card/card";
import Etiqueta from "@/componentes/etiqueta/etiqueta";
export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.bolaMorada}>
      <Image  src="/hero-circle.png" width={120} height={120} alt=""/>
    </div>
    <div className={styles.bolaAmarilla}>
      <Image  src="/hero-circle-yellow.png" width={30} height={30} alt=""/>
    </div>
    <div className={styles.first}>
      <div className={styles.textFirst}>Aumenta tus ventas mejora tu <span style={{color:"rgb(96, 14, 228)", fontWeight:"700", fontSize:"74px", letterSpacing:"-0.03em"}} >negocio,</span> <span style={{color:"rgb(0, 2, 41)", fontWeight:"700", fontSize:"74px", letterSpacing:"-0.03em"}}>gestiona</span> con limenka 360</div>
      <p className={styles.parrafo}>Una solución para tener el control y organización para un trabajo óptimo para su negocio.</p>
      <button className={styles.btnDemostracion}>Solicita una demostración</button>
      <div className={styles.imgContainer}>
      <Image className={styles.imgShape} src="/hero-shape.png" width={700} height={700}  alt=""/>
      </div>
    </div>

    <div className={styles.second}>
      <h4 className={styles.secondTitle}>Bienvendio a Limenka <br /> La mejor plataforma para la gestión de la prospección</h4>
    </div>

    <div className={styles.third}>
    <div className={styles.thirdLeft}>
      <div className={styles.textsLeft}>
      <p className={styles.subtitle}>LO QUE OFRECEMOS</p>
      <h3 className={styles.subtitle2}>Obtenga una visión  clara de su  <span>negocio.</span></h3>
      <p className={styles.textSub}>Accede a la información que necesitas en tiempo real que te ayudara en la toma de decisiones.</p>
      <button className={styles.thirdLeftBtn}>Contactanos</button>
      </div>
   
    </div>
    <div className={styles.thirdRight}>
      <Card clase="1" h3Text="Planificación en tiempo real" pText="Seguimiento de la prospección en tiempo real" iconName={<AssignmentIndIcon sx={{ fontSize: 45 }} />}></Card>
      <Card clase="2" h3Text="Control Total" pText="Manten toda la información en un solo lugar"  iconName={<EnhancedEncryptionIcon sx={{ fontSize: 45 }} />}></Card>
      <Card clase="2" h3Text="Convierte más clientes" pText="Mejora la conversión de contactos a clientes." iconName={<LoyaltyIcon sx={{ fontSize: 45 }} />}></Card>
      <Card clase="1" h3Text="Mejora la relación" pText="Con tus contactos, con atención personalizada." iconName={<AssignmentIndIcon sx={{ fontSize: 45 }} />}></Card>
    </div>
    
   
    </div>
    <div className={styles.fourth}>
    <div className={styles.fourthLeft}>
      <div className={styles.fourthLeftTexts}>
      <h3 className={styles.fourthTitle}>Seguimiento y <span>análisis de ventas</span> en tiempo real</h3>
      <p className={styles.fourthText}>Centralice y simplifique los pagos, y obtenga información detallada sobre sus clientes.</p>
      <Etiqueta clase="1" pText="Soporte 24/7"></Etiqueta>
      <Etiqueta clase="2" pText="Fácil y seguro de configurar"></Etiqueta>
      <Etiqueta clase="3" pText="Capacitaciones personalizadas por expertos"></Etiqueta>
      </div>
     
    </div>

    <div className={styles.fourthRight}>
      <Image src="/homelimenka.png" width={500} height={500} alt=""></Image>
      <div className={styles.subImg}>
        <Image src="/sales.png" width={250} height={117} alt=""></Image>
      </div>
    </div>

    </div>
   </div>
  );
}
