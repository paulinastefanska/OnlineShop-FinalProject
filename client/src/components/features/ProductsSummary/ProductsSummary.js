import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductsSummary.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Card, CardText, CardImg, CardBody, CardTitle, CardSubtitle, CardLink } from 'reactstrap';

export class ProductSummary  extends React.Component  {
  render() {
    const { tag, img, name, price } = this.props;
      
    return (
      <Col className="product-summary" xs={6}>
        <Card>
          <CardText className="product-tag">{tag}</CardText>
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
  tag: PropTypes.string,
  img: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default ProductSummary;