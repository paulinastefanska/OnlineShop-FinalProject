import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert, Col, Card, CardImg, CardSubtitle, CardBody, CardTitle } from 'reactstrap';
import Spinner from '../../common/Spinner/Spinner';


class SingleProduct extends React.Component {

  componentDidMount() {
    const { loadProducts, resetRequest, match } = this.props;
    loadProducts(match.params.id);
    resetRequest();
  }

  render() {
    const { products, request } = this.props;
    const { location } = this.props;

      if (request.pending === false && request.success === true && products.length > 0) 
          return 
            <Col className="product-summar" xs={12}>
              <Card>
                  <CardBody>
                      <CardTitle>{products[0].name}</CardTitle>
                      <CardSubtitle>{products[0].price}</CardSubtitle>
                  </CardBody>
                  <CardImg src={products[0].picture.src} alt="item" />
                  <Button color="primary">
                      Add to cart
                  </Button>
              </Card>
            </Col> 

      else if (request.pending === true || request.success === null) 
        return <Spinner />

      else if (request.pending === false && request.error !== null) 
        return <Alert color="danger">{request.error}</Alert>

      else if (request.pending === false && request.success === true && products.length === 0) 
        return <Alert color="info">- no products -</Alert>
  }

};

SingleProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ),
  loadProducts: PropTypes.func.isRequired,
  resetRequest: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props}/>);