import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalPay = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="pay">
      <Button color="info" onClick={toggle}>Pay</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Thank you for shopping!</ModalHeader>
        <ModalBody className="discount-text">
          We've received payment. Expect a package from us!
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={toggle}>Back</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalPay;