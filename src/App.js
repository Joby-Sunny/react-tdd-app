import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import RoutePath from './Routes.constants';
import CONST from './App.constants';

const App = () => (
    <div className='w-full' data-test={CONST.app}>
        <Router>
            <Switch>
                <Route {...RoutePath.postPage} />
                <Route {...RoutePath.homePage} />
            </Switch>
        </Router>
    </div>
);
export default App;
