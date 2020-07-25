import React, { Component } from 'react';
import "./App.css"
import { Switch, Route} from "react-router-dom"
import Login from "./pages/Login";
import Navbar from "./components/navbar"
import Upload from "./pages/Upload"
import Home  from "./pages/Home"
import Register from './pages/Register';


class App extends Component {
  
 
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route exact component={Upload} path="/upload" />
          <Route exact component={Home} path="/" />
        </Switch>
        {/* <Image image={this.state.file}/> */}

      </div>
    );
  }
}


export default (App);