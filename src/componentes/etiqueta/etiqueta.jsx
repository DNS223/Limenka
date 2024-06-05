import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './etiqueta.css'

const Etiqueta=({clase, pText})=>{
    return(
    <div className={`etiqueta${clase}`}>
       <CheckCircleIcon/>{pText}
      </div>
    )
}

export default Etiqueta