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
      currentProductReviewsMeta: {
        data: {
          characteristics: {
            Comfort: {
              id: 0,
              value: "",
            },
            Fit: {
              id: 0,
              value: "",
            },
            Length: {
              id: 0,
              value: "",
            },
            Quality: {
              id: 0,
              value: "",
            },
          },
          product_id: "",
          ratings: {},
          recommended: {},
        }
      },
    }
  }

  componentDidMount() {
    Promise.all([
      axios.get("http://52.26.193.201:3000/products/list"),
      axios.get("http://52.26.193.201:3000/products/1/styles"),
      axios.get("http://52.26.193.201:3000/reviews/1/meta")
    ])
    .then(async([resProducts, resStyles, resReviewMetaData]) => {
      const products = await resProducts;
      const productOneStyles = await resStyles;
      const productOneReviewMetaData = await resReviewMetaData;
      this.setState({
        products: products,
        currentProduct: products.data[0],
        currentProductStyles: productOneStyles,
        currentProductReviewsMeta: productOneReviewMetaData,
      })
    })
    .catch((err) => {console.log("axios get error: ", err)})
  }


  render() {
    console.log("current state: ", this.state)
    return (
      <CurrentProduct currentProduct={this.state.currentProduct} currentProductStyles={this.state.currentProductStyles} currentProductReviewsMeta={this.state.currentProductReviewsMeta}/>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));