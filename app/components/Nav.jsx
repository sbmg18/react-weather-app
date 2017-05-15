import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <NavLink activeClassName="active" activeStyle={{color: 'blue'}} exact to="/">Weather</NavLink>
                <NavLink activeClassName="active" activeStyle={{color: 'red'}} to="/about">About</NavLink>
                <NavLink activeClassName="active" activeStyle={{color: 'green'}} to="/examples">Examples</NavLink>
            </div>
        );
    }
}