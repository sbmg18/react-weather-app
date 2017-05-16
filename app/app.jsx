import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

ReactDOM.render(
    <Router>
        <div>
            <Route path="/" component={Main} />
            <div className="row">
                <div className="columns small-12 medium-6 large-4 small-centered">
                    <Switch>
                        <Route exact path="/" component={Weather} />
                        <Route path="/about" component={About} />
                        <Route path="/examples" component={Examples} />
                        <Route render={function () {
                            return (<p>The page you are looking for does not exist.</p>);
                        }} />
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
    , document.getElementById('app')
);