import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as reducers from './reducers';
import Header from './routes/menu/Header';


class App extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

      render() {
          console.log(this.props.posts);
        return (
          <div className="App container-fluid">
            <Header />
              {this.props.children}
          </div>
        );
      }
}

export default App;
