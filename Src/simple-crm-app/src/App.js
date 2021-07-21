import {
  Switch, Route,
} from "react-router-dom";

import Login from './_Components/Login';
import Main from './_Components/Main';



function App() {
  return (
    <Switch>
        <Route exact path="/" exact component={Main} />
        <Route exact path="/login" component={Login} />
    </Switch>
  );
}

export default App;
