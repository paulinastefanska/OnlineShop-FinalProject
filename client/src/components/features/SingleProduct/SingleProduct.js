import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import './SingleProduct.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert, Container, Row, Col, Card, Badge, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Spinner from '../../common/Spinner/Spinner';
import BackButton from '../../common/BackButton/BackButton';

class SingleProduct extends React.Component {

  componentDidMount() {
    const { loadProducts, match } = this.props;
    loadProducts(match.params.id);
  }

  handleAddToCart = () => {
    const { addToCart, products, cart, plusQty, calculatePrice } = this.props;
    const match = this.props.match.params.id;
    const cartCheck = cart.filter(el => el.id === match);

    cartCheck.length === 0 ? addToCart(products[0]) : plusQty(match);
    calculatePrice();
  }

  render() {
    const { products, request } = this.props;

      if (request.pending === false && request.success === true && products.length > 0) 
          return (
            <Container>
              <BackButton />
              <Col className="single-product" md={12}>
                <Card>
                  <Row>
                    <Col md={6}>
                      <Badge color="info">{products[0].tag}</Badge>
                      <CardImg src={products[0].img.src} alt="item" />
                    </Col>
                    <Col md={6}>  
                      <CardBody>
                        <CardTitle>{products[0].name}</CardTitle>
                        <CardSubtitle>${products[0].price}</CardSubtitle>
                        <CardText>{products[0].desc}</CardText>
                      </CardBody>
                      <Button color="info" onClick={this.handleAddToCart}>
                          Add to cart
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Container>
          ); 

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
      tag: PropTypes.string.isRequired,
      img: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ),
  loadProducts: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  plusQty: PropTypes.func.isRequired,
};

export default withRouter(props => <SingleProduct {...props}/>);