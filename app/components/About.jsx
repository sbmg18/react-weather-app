import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <h3>About</h3>
                <p>This is a react weather app which allows you to search weather by specifying the location.</p>
                <h4>Tools:</h4>
                <ul>
                    <li><a href="https://facebook.github.io/react">React</a></li>
                    <li><a href="https://openweathermap.org/">Open Weather Map</a></li>
                </ul>
            </div>
        );
    }
}