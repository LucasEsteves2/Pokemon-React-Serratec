import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from '../pages/Login/index';

function Routes() {

  return(
       <BrowserRouter> 
          <Switch> 
              <Route path="/login" exact component={Login}/>
              <Route />
              <Route />
              <Route />
          </Switch>
       </BrowserRouter>

  );
}

export default Routes;