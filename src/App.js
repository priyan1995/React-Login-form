import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { LoginForm } from './components/LoginForm';
import { Register } from './components/Register';

function App() {
  return (


    <Router>

      <div className="App">

        <Switch>
          <Route exact path='/'>
            <LoginForm />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

        </Switch>


      </div>
    </Router>




  );
}

export default App;
