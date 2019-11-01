import React from "react";
import PropTypes from 'prop-types';

import { Container, Button } from 'reactstrap';
import './Sort.scss'

const Sort = ({ sortOptions }) =>  {
  const handleOnClick = (key, direction) => {
    sortOptions({key, direction});
  };

  return (
    <Container className="sort-by">
      <p>Sort by:</p>
        <Button onClick={() => handleOnClick('name', 'asc')}> Name: A to Z </Button> 
        <Button onClick={() => handleOnClick('name', 'desc')}> Name: Z to A </Button> 
        <Button onClick={() => handleOnClick('price','asc')}> Price: low to high </Button> 
        <Button onClick={() => handleOnClick('price', 'desc')}> Price: high to low </Button> 
    </Container>
  )
}

Sort.propTypes = {
  sortOptions: PropTypes.func.isRequired
};

export default Sort;