import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortOptions, getProductsSort } from '../../../redux/productRedux.js';
import Sort from './Sort';

const SortContainer = ({ sortOptions }) => {
  return <Sort sortOptions={sortOptions} />;
};

SortContainer.propTypes = {
  sortOptions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getProductsSort(state),
})

const mapDispatchToProps = {
  sortOptions
};

export default connect( mapStateToProps, mapDispatchToProps)(SortContainer);