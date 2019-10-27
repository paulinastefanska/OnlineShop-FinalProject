/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Modal.scss';

const ModalCode = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="discount">
      <Button color="info" onClick={toggle}> Click here to get your discount </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Discount -10%</ModalHeader>
        <ModalBody>
          Your discount code: <span className="discount-code">SDFV86F</span>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Copy</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalCode;