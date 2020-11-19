import { Route, Switch } from 'react-router-dom';
import './App.css';
import Country from './pages/Country';
import NavBar from './components/NavBar';
import Coffee from './pages/Coffee';
import Countries from './pages/Countries';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Oops from './pages/Oops';
import Search from './pages/Search';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/menu"  component={Menu} /> 
        <Route path="/countries"  component={Countries} /> 
        <Route path="/search/:text"  component={Search} /> 
        <Route path="/search"  component={Search} /> 
        <Route path="/country/:countyId"  component={Country} /> 

        <Route path="/coffee"  component={Coffee} /> 
        <Route exact path="/"  component={Home} />
        <Route path="/"  component={Oops} /> 
      </Switch>
    </div>
  );
}

export default App
