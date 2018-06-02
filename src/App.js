import React, { Component } from 'react';
import './App.css';
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
