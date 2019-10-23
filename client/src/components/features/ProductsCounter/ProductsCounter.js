import React from 'react';

class ProductsCounter extends React.Component {

  render() {
  	const { counter } = this.props;

    return (
      <div>Products available: { counter > 0 ? counter : ' 0 ' }</div>
    );
  }

};

export default ProductsCounter;