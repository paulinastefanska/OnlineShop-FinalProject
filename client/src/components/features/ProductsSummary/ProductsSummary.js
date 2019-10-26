import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductsSummary.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, CardImg, CardText, CardBody, CardTitle, CardLink } from 'reactstrap';

const ProductSummary = ({ img, name, price }) => (
  <div className={'product-summary'}>
        <Card>
            <CardImg src={img}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{price}</CardText>
                <CardLink href={'/product'}></CardLink>
            </CardBody>
        </Card>
    </div>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  img: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default ProductSummary;