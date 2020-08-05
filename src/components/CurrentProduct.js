import React from 'react';
import axios from 'axios';

class CurrentProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: [],
    }
  }

  componentDidMount() {
    axios.get(`http://52.26.193.201:3000/products/1/styles`)
    .then((response) => {
      this.setState({
        styles: response.data
      })
    })
    .catch((err) => {console.log("axios style request err: ", err)})
  }


  render() {
    console.log("state of current product: ", this.state)
    return (
      <div>{this.props.currentProduct.name}</div>
    )
  }
}

export default CurrentProduct;