import React, { Component } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import Drawer from './Drawer';
import '../App.css';
import FriendsList from './FriendsList';

export class App extends Component {
  state = {
    posts: [],
    user: {
      id: 1,
      fName: 'Dandan',
      lName: 'Drori'
    },
    time: new Date()
  };

  onPost = (currentId, title) => {
    const newPost = {
      id: currentId,
      title,
      counters: {
        likesCount: 0,
        commentsCount: 0,
        sharesCount: 0
      }
    };
    this.setState({
      posts: [...this.state.posts, newPost]
    });
  };

  handleIncrement = id => {
    this.state.posts[id - 1].counters.likesCount = 2;
    this.forceUpdate();

    //     this.setState({
    //       posts: [
    //         {
    //           id,
    //           title,
    //           counters: {
    //             likesCount: this.state.posts.counters.likesCount + 1,
    //             commentsCount,
    //             sharesCount
    //           }
    //         }
    //       ]
    //     });
    //   }
  };

  render() {
    return (
      <div>
        <Header />
        <main style={{ display: 'flex' }}>
          <Drawer />
          <MainContainer
            user={this.state.user}
            time={this.state.time}
            title={this.state.title}
            onPost={this.onPost}
            posts={this.state.posts}
            handleincrement={this.handleIncrement}
          />
          <FriendsList />
        </main>
      </div>
    );
  }
}

export default App;
