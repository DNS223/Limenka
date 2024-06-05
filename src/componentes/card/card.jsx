import './card.css'

const Card=({clase, iconName, h3Text, pText})=>{
    return(
    <div className={`card${clase}`}>
        <div className="icon"> {iconName} </div>
        <h3 className='h3Text'>{h3Text}</h3>
        <p className='pText'>{pText}</p>
      </div>
    )
}

export default Card