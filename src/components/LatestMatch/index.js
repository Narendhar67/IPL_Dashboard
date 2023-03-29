// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  state = {details: []}

  componentDidMount() {
    this.getFormatedData()
  }

  getFormatedData = () => {
    const {Details} = this.props
    const x = Details
    const updated = {
      competingTeam: x.competing_team,
      competingTeamLogo: x.competing_team_logo,
      date: x.date,
      firstInnings: x.first_innings,
      id: x.id,
      manOfTheMatch: x.man_of_the_match,
      matchStatus: x.match_status,
      result: x.result,
      secondInnings: x.second_innings,
      umpires: x.umpires,
      venue: x.venue,
    }
    this.setState({details: updated})
  }

  render() {
    const {details} = this.state
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = details

    return (
      <div className="latestMatch-container">
        <div className="left-details">
          <p className="teamName">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="location">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          className="competingTeamLogo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
        <div className="right-details">
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
