import React from 'react';
import { Container } from 'reactstrap';

class ProductsCounter extends React.Component {

  render() {
  	const { counter } = this.props;

    return (
      <Container>
        <div className="counter">Products available: { counter > 0 ? counter : ' 0 ' }</div>
      </Container>
    );
  }

};

export default ProductsCounter;