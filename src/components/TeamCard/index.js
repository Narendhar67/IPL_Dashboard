// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  return (
    <li>
      <Link to={`/team-matches/${id}`} style={{textDecoration: 'none'}}>
        <div className="teamCard">
          <img className="logo-image" src={teamImageUrl} alt={name} />
          <p className="teamName">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
