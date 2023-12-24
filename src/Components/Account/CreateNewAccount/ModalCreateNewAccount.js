import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import InputForm from "./InputForm";
import { useDispatch, useSelector } from "react-redux";
import ACCOUNT from "../../../Redux/Actions/AccountAction";

function ModalCreateNewAccount(props) {
  const { isOpenModal, currentFormData } = useSelector(
    (state) => state.account
  );
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch({ type: ACCOUNT.SET_MODAL, payload: false });
  };

  return (
    <Container>
      <br />
      <Modal isOpen={isOpenModal}>
        <ModalHeader>
          <h3>
            {!currentFormData?.id
              ? "Create New Account"
              : `Edit Account Id ${currentFormData.id}`}
          </h3>
        </ModalHeader>
        <ModalBody>
          <InputForm />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => handleCloseModal()}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewAccount;
