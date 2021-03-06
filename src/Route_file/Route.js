import React from 'react'
import Form from '../components/Form/Form';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route exact path='/form' component={Form}/>
            </Switch>
        </Router>
     );
}
 
export default Routes;