import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Examples extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center">Examples</h3>
                <p>Here are few example locations to try out...</p>
                <ol>
                    <li><Link to="/?location=Kota">Kota</Link></li>
                    <li><Link to="/?location=Delhi">Delhi</Link></li>
                </ol>
            </div>
        );
    }
}