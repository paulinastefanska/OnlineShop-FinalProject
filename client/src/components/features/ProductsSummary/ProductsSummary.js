import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductsSummary.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';

export class ProductSummary  extends React.Component  {
  render() {
    const { img, name, price } = this.props;
      
    return (
      <Col className="product-summary" xs={6}>
        <Card>
            <CardImg src={img.src} alt="item"/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{price}</CardSubtitle>
                <CardLink href={'/product'}></CardLink>
            </CardBody>
        </Card>
      </Col>
    )  
  }  
};

ProductSummary.propTypes = {
  id: PropTypes.string,
  img: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default ProductSummary;