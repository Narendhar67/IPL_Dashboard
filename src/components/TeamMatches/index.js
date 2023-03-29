// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import './index.css'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {Data: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    const getFormatedData = x => ({
      latestMatchDetails: x.latest_match_details,
      recentMatches: x.recent_matches,
      teamBannerUrl: x.team_banner_url,
    })
    const updatedData = getFormatedData(data)

    this.setState({Data: updatedData, isLoading: false})
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const {Data, isLoading} = this.state

    const {teamBannerUrl, latestMatchDetails, recentMatches} = Data
    const loader = (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )

    return (
      <div className={`${id}`}>
        {isLoading ? (
          loader
        ) : (
          <div className="TeamMatches-bg">
            <img className="bannerImg" src={teamBannerUrl} alt="team banner" />
            {Data.length !== 0 ? (
              <LatestMatch Details={latestMatchDetails} />
            ) : (
              ''
            )}
            <ul className="MatchCards">
              {recentMatches !== undefined
                ? recentMatches.map(each => (
                    <MatchCard details={each} key={each.id} />
                  ))
                : ''}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
