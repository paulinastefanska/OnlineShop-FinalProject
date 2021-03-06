import React, { useState } from 'react';
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Modal.scss';

const ModalCode = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="discount">
      <Button color="info" onClick={toggle}>Click to get discount</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Congratulations, you got -10% discount!</ModalHeader>
        <ModalBody className="discount-text">
          Your discount code: <Input value="SDFV86F" className="discount-code" disabled="disabled" />
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalCode;