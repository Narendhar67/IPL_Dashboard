// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teams: updatedData, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state
    const loader = (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    )

    return (
      <div>
        <div className="bg-container">
          {isLoading ? (
            loader
          ) : (
            <div className="bg-container">
              <div className="NameAndLogo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                  alt="ipl logo"
                  className="logo"
                />
                <h1 className="main-heading">IPL Dashboard</h1>
              </div>
              <ul className="teamsList">
                {teams.map(each => (
                  <TeamCard details={each} key={each.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home
