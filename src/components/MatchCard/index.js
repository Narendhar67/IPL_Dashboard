// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props

  const getData = x => ({
    competingTeamLogo: x.competing_team_logo,
    competingTeam: x.competing_team,
    result: x.result,
    matchStatus: x.match_status,
  })

  const data = getData(details)
  const {competingTeamLogo, competingTeam, result, matchStatus} = data

  return (
    <li className="MatchCard">
      <img
        className="MatchCard-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatus === 'Won' ? 'green' : 'red'}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
