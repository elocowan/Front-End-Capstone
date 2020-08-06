import React from 'react';

var CurrentProduct = (props) => {

  const styles = props.currentProductStyles.data.results;
  const styleItems = styles.map((style) => {
    return <div key={style.style_id}>{style.name}</div>
  })

  const reviewAverageObject = props.currentProductReviewsMeta.data.ratings;

  function objectValueSum(obj) {
    return Object.keys(obj).reduce((sum, key) => sum + parseFloat(obj[key] || 0), 0);
  }

  function totalStarsSum(obj) {
    let total = 0;

    for (let el in obj) {
      total += parseFloat(el) * obj[el];
    }

    return total;
  }

  let averageRating = totalStarsSum(reviewAverageObject) / objectValueSum(reviewAverageObject);

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
      <div>
        <h2>this is the review meta data</h2>
        <h3>{averageRating.toString()}</h3>
      </div>
    </div>
  )
}

export default CurrentProduct;