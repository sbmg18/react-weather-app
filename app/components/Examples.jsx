import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Examples extends Component {
    render() {
        return (
            <div>
                <h1>Examples</h1>
                <p className="lead">Here are few example locations to try:</p>
                <ol>
                    <li><Link to="/?location=Kota,IN">Kota,IN</Link></li>
                    <li><Link to="/?location=Delhi,IN">Delhi,IN</Link></li>
                </ol>
            </div>
        );
    }
}