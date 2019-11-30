import React, { Component } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import Drawer from './Drawer';
import '../App.css';
import FriendsList from './FriendsList';
import {
  BrowserRouter,
  Switch,
  Route
} from 'C:/Users/dandan/Desktop/Web/React/social-app/Social-App/node_modules/react-router-dom';
import MyProfile from './MyProfile';

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
      likesCount: 0,
      commentsCount: 0,
      sharesCount: 0
    };
    this.setState({
      posts: [...this.state.posts, newPost]
    });
  };

  handleIncrement = id => {
    if (this.state.posts[id - 1].id === id) {
      this.state.posts[id - 1].likesCount =
        this.state.posts[id - 1].likesCount + 1;
    }
    this.setState({ likesCount: this.state.likesCount + 1 });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/myprofile'>
            <div>
              <Header />
              <main style={{ display: 'flex' }}>
                <Drawer />
                <MyProfile />
                <FriendsList />
              </main>
            </div>
          </Route>
          <Route exact path='/'>
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
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

{
  /* <div>
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
      </div> */
}
