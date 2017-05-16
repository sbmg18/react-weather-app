import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: ""
        };
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onChangeLocation(evt) {
        var location = evt.target.value;
        this.setState({
            location: location
        });
    }

    onSubmitForm(evt) {
        evt.preventDefault();
        alert(this.state.location);
        evt.target.reset();
    }

    render() {
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
                            <li><input onChange={this.onChangeLocation} type="search" placeholder="Enter the location" /></li>
                            <li><button disabled={this.state.location === ""} type="submit" className="button">Get Weather</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

var old = (
    <div>
        <NavLink activeClassName="active" activeStyle={{ color: 'blue' }} exact to="/">Weather</NavLink>
        <NavLink activeClassName="active" activeStyle={{ color: 'red' }} to="/about">About</NavLink>
        <NavLink activeClassName="active" activeStyle={{ color: 'green' }} to="/examples">Examples</NavLink>
    </div>
);