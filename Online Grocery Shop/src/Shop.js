import React, {Component} from "react";
import SearchBar from "./SearchBar.js"
import Stock from'./Stock.js';

class Shop extends React.Component {
    render() {
      return(
        <div>
          <SearchBar/>
          <Stock products={this.props.products}/>
        </div>
      );
    }
  }

export default Shop;