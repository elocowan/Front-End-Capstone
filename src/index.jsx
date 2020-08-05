import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import CurrentProduct from "./components/CurrentProduct";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: {}
    }
  }

  componentDidMount() {
    axios.get("http://52.26.193.201:3000/products/list")
    .then((response) => {
      this.setState({
        products: response,
        currentProduct: response.data[0]
      })
    })
    .catch((err) => {console.log("axios get error: ", err)})
  }


  render() {
    return (
      <CurrentProduct currentProduct={this.state.currentProduct}/>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));