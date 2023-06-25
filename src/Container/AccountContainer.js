import React, { createContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";

export const AccountContext = createContext();

function AccountContainer(props) {
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);
    const [listAccount, setListAccount] = useState([]);
    const [currentInputFormData, setCurrentInputFormData] = useState();

    const updateListAccountData = () => {
        setListAccount(listAccount);
        localStorage.setItem("listAccount", JSON.stringify(listAccount));
    };

    const onHandleCreateNewAccount = (newAccount) => {
        listAccount.push(newAccount);
        updateListAccountData();
        setOpenCreateModal(false);
    };

    const onHandleEditAccount = (newAccountData) => {
        const targetAccountIndex = listAccount.findIndex((account) => account.id === newAccountData.id);
        listAccount[targetAccountIndex] = { ...listAccount[targetAccountIndex], ...newAccountData };
        updateListAccountData();
        setOpenCreateModal(false);
        setCurrentInputFormData({});
    };

    const onHandleDeleteAccount = (accountId) => {
        const targetAccountIndex = listAccount.findIndex((account) => account.id === accountId);
        const cloneList = [...listAccount];
        cloneList.splice(targetAccountIndex, 1);
        setListAccount(listAccount);
        localStorage.setItem("listAccount", JSON.stringify(cloneList));
    };

    useEffect(() => {
        if (localStorage && localStorage.getItem("listAccount")) {
            const listAccount_LocalStorage = JSON.parse(localStorage.getItem("listAccount"));
            setListAccount(listAccount_LocalStorage);
        }
    }, []);

    return (
        <AccountContext.Provider value={{
            listAccount,
            isOpenCreateModal,
            setOpenCreateModal,
            currentInputFormData,
            setCurrentInputFormData,
            onHandleCreateNewAccount,
            onHandleEditAccount,
            onHandleDeleteAccount,
        }}>
            <Container>
                {/* Nút thêm mới */}
                <CreateButton />
                {/* Form thêm mới */}
                <ModalCreateNewAccount />
                {/* Form kết quả */}
                <ResultForm data={listAccount} />
            </Container>
        </AccountContext.Provider>
    );
}

export default AccountContainer;