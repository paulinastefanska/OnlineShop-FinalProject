import React from 'react';
import { PropTypes } from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, InputGroupAddon, Input, Alert } from 'reactstrap';

class Discount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            wrongCode: false
        }
    }

    handleSubmit = () => {
        const { discountCode, handleDiscountCode, discountStatus } = this.props;

        if(!discountStatus) {

            if(discountCode === this.state.value) {
                handleDiscountCode();
            } else {
                this.setState({ wrongCode: true });
            }
        }
    }

    handleAlert = () => {
        this.setState({ wrongCode: false });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {

        const { discountStatus } = this.props;
        const { value, wrongCode } = this.state;
        const { handleChange, handleSubmit, handleAlert } = this;

	        if(!discountStatus) return (
						<InputGroup>
		          <Input placeholder="discount code" type="text" value={ value } onChange={ handleChange } />
		          <InputGroupAddon addonType="append">
		            <Button color="info" onClick={ handleSubmit }>Done!</Button>
		          </InputGroupAddon>
		        </InputGroup>
		      );
	        else if(!discountStatus  && wrongCode) return <Button color="danger" onClick={ handleAlert }>Wrong code! Try again.</Button>
	        else if(discountStatus) return <Alert color="success">Code is active!</Alert>;
    }
}

Discount.propTypes = {
    discountStatus: PropTypes.bool.isRequired,
    discountCode: PropTypes.string.isRequired,
    handleDiscountCode: PropTypes.func.isRequired
}

export default Discount;