import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: "",
        };
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onSubmitForm(evt) {
        evt.preventDefault();
        window.history.pushState(null, null, "/");
        var location = this.state.location;
        if (location.length > 0) {
            window.location.hash = `?location=${location}`;
            this.setState({
                location: ""
            })
            evt.target.reset();
        }
    }

    onChangeLocation(evt) {
        var location = evt.target.value;
        this.setState({
            location: location
        });
    }

    render() {

        var location = this.state.location;

        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="active"><NavLink activeClassName="active" activeStyle={{ fontWeight: 'bold' }} exact to="/">Weather</NavLink></li>
                        <li><NavLink activeClassName="active" activeStyle={{ fontWeight: 'bold' }} to="/about">About</NavLink></li>
                        <li><NavLink activeClassName="active" activeStyle={{ fontWeight: 'bold' }} to="/examples">Examples</NavLink></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSubmitForm}>
                        <ul className="menu">
                            <li><input onChange={this.onChangeLocation} type="text" placeholder="Enter the location" /></li>
                            <li><button disabled={!location} type="submit" className="button primary">Get Weather</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}