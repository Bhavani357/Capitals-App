import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onChangeValue = event => {
    this.setState({activeId: event.target.value})
  }

  onCountryChange = () => {
    const {activeId} = this.state

    const filteredCountry = countryAndCapitalsList.find(
      each => each.id === activeId,
    )
    return filteredCountry
  }

  render() {
    const {activeId} = this.state
    const {country} = this.onCountryChange()

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select"
              value={activeId}
              onChange={this.onChangeValue}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} className="option" key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="label">is capital of which country</p>
          </div>
          <p className="para">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
