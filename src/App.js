import React, { Component } from 'react';
import data from './data';
import './App.css';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    data.getPosts().then(posts => {
      this.setState({posts});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Some Posts For YOU!</h1>
       </header>
        <section className="content">
            {this.state.posts.map(post => 
              <div key={post.id}>
                <label>Title: </label>
                <span>{post.title} </span>
                <label>Author: </label>
                <span>{post.author}</span>
              </div>
            )}
        </section>
      </div>
    );
  }
}

export default App;
