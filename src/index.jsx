import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import CurrentProduct from "./components/CurrentProduct";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: {},
      currentProductStyles: {
        data: {
          product_id: "",
          results: [],
        }
      },
    }
  }

  componentDidMount() {
    Promise.all([
      axios.get("http://52.26.193.201:3000/products/list"),
      axios.get("http://52.26.193.201:3000/products/1/styles")
    ])
    .then(async([resProducts, resStyles]) => {
      const products = await resProducts;
      const productOneStyles = await resStyles;
      this.setState({
        products: products,
        currentProduct: products.data[0],
        currentProductStyles: productOneStyles,
      })
    })
    .catch((err) => {console.log("axios get error: ", err)})
  }


  render() {
    return (
      <CurrentProduct currentProduct={this.state.currentProduct} currentProductStyles={this.state.currentProductStyles}/>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));