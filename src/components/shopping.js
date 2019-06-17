
import React, { Component } from 'react';

 class ShopList extends Component {
   render() {
     return (
      <form action="/users/sign_in" method="post">


        <div class="form-group">
          <label for="addItem">Email</label>
          <input type="text" class="form-control" name="shopList" placeholder="Enter Item">
          </input>
        </div>
        <button type="submit" class="btn btn-primary">Add Items</button>
      </form>
    )
  }
}
export default ShopList
