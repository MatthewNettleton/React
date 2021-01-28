import './App.css';
import React, {Component} from "react";
import './ListInfo.js';
import './AddToCart.js';
import './TotalPrice.js';
import './ShoppingList.js';
import './StockInfo.js';
import './Checkout.js';
import './CartOverview.js';
import './Stock.js';
import './SearchBar.js';
import ShoppingCart from './ShoppingCart.js';
import Shop from'./Shop.js';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <Shop products={this.props.products}/>
        <ShoppingCart products={this.props.products}/>
      </div>
    );
  }
}


const PRODUCTS = [
  {name: 'Apple', price: '£0.99', inBasket: 0},
  {name: 'Pear', price: '£0.99', inBasket: 0},
  {name: 'Banana', price: '£1.50', inBasket: 0},
  {name: 'Lemon', price: '£1.75', inBasket: 0},
  {name: 'Lime', price: '£1.75', inBasket: 0},
  {name: 'Orange', price: '£2.00', inBasket: 0},
  {name: 'Strawberries', price: '£3.00', inBasket: 0},
  {name: 'Peach', price: '£3.00', inBasket: 0},
  {name: 'Kiwi', price: '£3.00', inBasket: 0},
  {name: 'Passion Fruit', price: '£4.99', inBasket: 0},
];


<Body products={PRODUCTS}/>

export default Body;
