import { connect } from 'react-redux';
import { toggleMenu, getMenuState, getCart } from '../../../redux/productRedux';
import NavBar from './NavBar';

const mapStateToProps = state => ({
    showMenu: getMenuState(state),
    cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
    toggleMenu: () => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);