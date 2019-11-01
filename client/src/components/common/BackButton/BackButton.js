import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Button } from 'reactstrap';
import './BackButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class BackButton extends React.Component {
  render() {

    return (
      <Button color="info" className="back-btn"
        onClick={this.props.history.goBack}>
          <FontAwesomeIcon className="back-icon" icon={faChevronLeft} />
          Back
      </Button>
    )
  }
}

export default withRouter(BackButton);