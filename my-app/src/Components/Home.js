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
import About from './About.js';
import fire from '../config/Fire';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: {
        id: 1,
        fName: 'Dandan',
        lName: 'Drori'
      },
      time: new Date()
    };
  }

  logout = () => {
    fire.auth().signOut();
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
    this.setState(state => {
      return { likesCount: state.likesCount + 1 };
    });
  };

  handleDecrement = id => {
    if (this.state.posts[id - 1].id === id) {
      this.state.posts[id - 1].likesCount =
        this.state.posts[id - 1].likesCount - 1;
    }
    this.setState({ likesCount: this.state.likesCount - 1 });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/myprofile'>
              <div>
                <Header logout={this.logout} />
                <main style={{ display: 'flex' }}>
                  <Drawer />
                  <MyProfile user={this.state.user} posts={this.state.posts} />
                  <FriendsList />
                </main>
              </div>
            </Route>
            <Route exact path='/'>
              <div>
                <Header logout={this.logout} />
                <main style={{ display: 'flex' }}>
                  <Drawer />
                  <MainContainer
                    user={this.state.user}
                    time={this.state.time}
                    title={this.state.title}
                    onPost={this.onPost}
                    posts={this.state.posts}
                    handleincrement={this.handleIncrement}
                    handledecrement={this.handleDecrement}
                  />
                  <FriendsList />
                </main>
              </div>
            </Route>
            <Route path='/about'>
              <div>
                <Header logout={this.logout} />
                <main style={{ display: 'flex' }}>
                  <Drawer />
                  <About />
                  <FriendsList />
                </main>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Home;
