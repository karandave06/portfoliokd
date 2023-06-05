 import '../assets/Style/cardtestimonial.scss'
const Card = ({name,src,feedback}) => {
  return (
  <div id='card'>
    <img src={src} alt="" />
    <h5>{name}</h5>
    <p>
{feedback}
     </p>
  </div>
  )
}

export default Card