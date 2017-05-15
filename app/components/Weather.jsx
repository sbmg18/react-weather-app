import React, { Component } from 'react';
import openWeatherMap from 'openWeatherMap';

const WeatherMessage = ({ temperature, location }) => {
    return (
        <div>
            <h3>
                It's <strong>{temperature} °C in {location}.</strong>
            </h3>
        </div>
    );
}

class WeatherForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: ""
        };
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onChangeLocation(evt) {
        this.setState({
            location: evt.target.value
        });
    }

    onSubmitForm(evt) {
        evt.preventDefault();
        var location = this.state.location;
        if (location.length > 0) {
            this.props.onSearch(location);
            evt.target.reset();
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <div>
                        <input onChange={this.onChangeLocation} placeholder="Enter the location" type="text" />
                    </div>
                    <div>
                        <button type="submit">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(location) {
        var that = this;
        that.setState({
            isLoading: true
        });
        openWeatherMap.getWeather(location).then(function (temperature) {
            that.setState({
                location: location,
                temperature: temperature,
                isLoading: false
            });
        }, function(err) {
            alert(err);
            that.setState({
                isLoading: false
            });
        });
    }

    render() {
        const { location, temperature, isLoading } = this.state;
        return (
            <div>
                <WeatherForm onSearch={this.handleSearch} />
                {isLoading
                    ? <h3>Loading...</h3>
                    : location && temperature &&
                    <WeatherMessage
                        location={location}
                        temperature={temperature}
                    />
                }
            </div>
        );
    }
}