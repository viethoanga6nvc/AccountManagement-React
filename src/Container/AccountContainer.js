/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountData } from "../Redux/Actions/AccountAction";

function AccountContainer(props) {
  const { data } = useSelector((state) => state.account);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccountData());
  }, []);

  return (
    <Container>
      {/* Nút thêm mới */}
      <CreateButton />
      {/* Form thêm mới */}
      <ModalCreateNewAccount />
      {/* Form kết quả */}
      <ResultForm data={data} />
    </Container>
  );
}

export default AccountContainer;
