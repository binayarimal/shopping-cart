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

  constructor(){
    super()
    this.state={
      user:null
    }
  }

  signOut(e){
    e.preventDefault();
      fetch("/users/signOut")
      .then( () => {
        localStorage.removeItem('user');
        window.location.reload();} )
      .catch(err => console.log(err));
    }

    routeAccess(){
        if(this.state.user !== null){

        const links =
         <div>
          <button onClick= {(e)=>this.signOut(e)}>signOut
          </button>
          <Link className="nav-btn"  to='/ShopList'>addItems</Link>
          </div>
          return links
        } else{

          const links =
           <div>
            <Link className="nav-btn"  to='/signIn'>Sign In</Link>
            <Link className="nav-btn"  to='/signUp'>Sign Up</Link>

            </div>
            return links

        }
    }
    componentDidMount(){
    const user = localStorage.getItem("user");
    if(user){
      this.setState({user:user});

    } else{
      this.setState({user:null});

    }
  }
    render() {
    return (

<div>
      <header>
      <nav>
      {this.routeAccess()}

        <Link className="nav-btn"  to='/'>
        Main Page</Link>


        </nav>
        </header>
      <main>
          <Route exact path="/" component={Landing}  />
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
