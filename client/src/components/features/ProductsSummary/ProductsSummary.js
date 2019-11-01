import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import './ProductsSummary.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Card, Badge, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export class ProductSummary  extends React.Component  {
  render() {
    const { id, tag, img, name, price } = this.props;
      
    return (
      <Col className="product-summary" xs={6}>
        <Link to={`/product/${id}`}>
          <Card>
            { tag ? <Badge color="info">{tag}</Badge> : <span className="non-badge"></span> }
            <CardImg src={img.src} alt="item"/>
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardSubtitle>{price}</CardSubtitle>
            </CardBody>
          </Card>
        </Link>
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