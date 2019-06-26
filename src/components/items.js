import React, { Component } from 'react';
import axios from 'axios';
class Items extends Component {
  constructor(){
    super()
    this.state={
      item :"",
      itemList:[],
    }
  }

  componentDidMount(){

    fetch(`/Shoplist/${this.props.match.params.id}`)
    .then( res => res.json())
    .then( items => this.setState({itemList:items}))
    .catch(err => console.log(err))

  }
  submitHandler(e){
    e.preventDefault();
    const data = {
      item:this.state.item,
      shopListId:this.props.match.params.id
    };

      axios.post(`/ShopList/${this.props.match.params.id}/create`,data)
      .then( (res) => {  this.componentDidMount();
      console.log(res)})
      .catch(err => console.log(err));
    }
    statusHandler(e, item){
      e.preventDefault();
      let id ={itemId: item.id}
      if (item.status === "added"){

      axios.post(`/ShopList/${this.props.match.params.id}/items/${item.id}/mark`, id)
      .then( (res) => {  this.componentDidMount();
      console.log(res)})
      .catch(err => console.log(err));
    } else{
      axios.post(`/ShopList/${this.props.match.params.id}/items/${item.id}/unMark`,id )
      .then( (res) => {  this.componentDidMount();})
        .catch(err => console.log(err));

    }


    }
  deleteHandler(e, itemId){
        e.preventDefault();
        let id = itemId;
        axios.post(`/shopList/${this.props.match.params.id}/items/${id}/delete`, id)
        .then( res => this.componentDidMount() )
        .catch(err => console.log(err));
      }
    render() {
      return (
        <section>
        <form onSubmit = {(e)=>this.submitHandler(e)}>
        <input
        type="text"
        name="name"
        placeholder="Enter item"
        value = {this.state.item}
        onChange = {(e)=>this.setState({item:e.target.value})} />
        <input type="submit"/>
        </form>
        <div>
        <ul>
        {this.state.itemList.map((item,index) =>
          <li key = {index}>{item.title}
              <button onClick = {(e)=>this.deleteHandler(e,item.id)}>delete</button>
              <button onClick  = {(e)=>this.statusHandler(e,item)}>{item.status}</button>
          </li>

        )}
        </ul>
        </div>

        </section>
      )
    }

}
export default Items
