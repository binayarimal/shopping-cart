
import React, { Component } from 'react';

 class SignIn extends Component {
   render() {
     return (
      <form action="/users/sign_in" method="post">


        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email">
          </input>

        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" name="password" aria-describedby="passwordHelp" placeholder="Enter password">
          </input>

        </div>

        <button type="submit" class="btn btn-primary">Sign In</button>
      </form>
    )
  }
}
export default SignIn
