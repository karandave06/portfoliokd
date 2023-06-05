 import '../assets/Style/cardtestimonial.scss'
const Card = ({name,src}) => {
  return (
  <div id='card'>
    <img src={src} alt="" />
    <h5>{name}</h5>
    <p>
    {"Karan has supercharged out team's workflow.The ability to maintain visibility on larger milestones at all times keeps everyone motivated."}
</p>
  </div>
  )
}

export default Card