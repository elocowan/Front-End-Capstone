import React from 'react';

var CurrentProduct = (props) => {

  const styles = props.currentProductStyles.data.results;
  const styleItems = styles.map((style) => {
    return <div key={style.style_id}>{style.name}</div>
  })

  return (
    <div>
      <div>
        <h3>{props.currentProduct.name}</h3>
        <h3>{props.currentProduct.description}</h3>
        <h3>{props.currentProduct.slogan}</h3>
      </div>
      <div>
        <h2>these are the styles</h2>
        <h3>{styleItems}</h3>
      </div>
    </div>
  )
}

export default CurrentProduct;