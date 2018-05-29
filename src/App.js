import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as reducers from './reducers';


class App extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

      render() {
          console.log(this.props.posts);
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title"> Tu będzie jakieś menu </h1>
            </header>
              {this.props.children}
          </div>
        );
      }
}

export default App;
