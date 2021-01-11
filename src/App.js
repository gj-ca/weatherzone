import City from './City'
import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            cities: [
            ]
        }
    }

    componentDidMount() {
        let cityNames = [
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
            "brisbane", "melbourne", "adelaide", "canberra",
        ]
        let promises = []
        let currentState = this.state
        cityNames.forEach(city => {
            promises.push(fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec692f60a6cfe8da1f90c90c083625af`)
                .then(foo => foo.json())
                .then(result => {
                    let newCity = {}
                    newCity.name = result.name
                    newCity.weather = result.weather[0].main
                    newCity.now = result.main.temp
                    newCity.max = result.main.temp_max 
                    newCity.min = result.main.temp_min
                    currentState.cities.push(newCity)
                }))
            })
        Promise.all(promises).then(() => {
            this.setState(currentState)
        })
    }

    render() {
        return <div>
            <h3>Cities</h3>
            <table>
                <thead>
                    <tr>
                        <th>
                            City
                        </th>
                        <th>
                            Weather Icon
                        </th>
                        <th>Now</th>
                        <th>Min</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.cities.map((city, index) => (
                        <City key={index} 
                            name={city.name}
                            weather={city.weather}
                            now={city.now}
                            min={city.min}
                            max={city.max}
                        />))
                    }
                </tbody>
            </table>
        </div>
    }
}

export default App