import React from 'react';
import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './CartIcon.scss';

const CartIcon = (props) => {

    return (
        <div className="cart-qty">
            <FontAwesomeIcon icon={faShoppingBag} />
            {props.itemsQty > 0 ?
            <span className="cart-items">{props.itemsQty}</span> : ''}
        </div>
    );
}

CartIcon.propTypes = {
    itemsQty: PropTypes.number.isRequired,
};

export default CartIcon;