import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/landing';
import SignIn from './components/signIn';
import SignUp from './components/signUp'
import ShopList from './components/shopping';
import Items from './components/items';
import ShopListEdit from './components/shopListEdit'
class App extends Component {

    render() {

    return (

<div>
      <header>
      <nav>
        <Link className="nav-btn"  to='/'>Main Page</Link>
        <Link className="nav-btn" to='/signUp'>Sign Up</Link>
        <Link className="nav-btn"  to='/signIn'>Sign In</Link>
        <Link className="nav-btn"  to='/ShopList'>addItems</Link>
        </nav>
        </header>
      <main>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/ShopList" component={ShopList} />
          <Route exact path="/ShopList/:id" component={Items} />
          <Route exact path="/ShopList/:id/edit" component={ShopListEdit} />
      </main>
  </div>


    );
  }
}

export default App;
