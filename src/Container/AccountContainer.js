import React, { createContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/CreateNewAccount/ModalCreateNewAccount";
import accountAPI from "../API/AccountApi";

export const AccountContext = createContext();

function AccountContainer(props) {
    const [isOpenCreateModal, setOpenCreateModal] = useState(false);
    const [listAccount, setListAccount] = useState([]);
    const [currentInputFormData, setCurrentInputFormData] = useState();

    const updateListAccountData = () => {
        setListAccount(listAccount);
    };

    const onHandleCreateNewAccount = (newAccount) => {
        accountAPI.createAccount(newAccount).then(() => {
            loadData();
        });
        updateListAccountData();
        setOpenCreateModal(false);
    };

    const onHandleEditAccount = (newAccountData) => {
        accountAPI.updateAccount(newAccountData.id, newAccountData).then(() => {
            loadData();
        });
        setOpenCreateModal(false);
        setCurrentInputFormData({});
    };

    const onHandleDeleteAccount = (accountId) => {
        accountAPI.deleteAccount(accountId).then(() => {
            loadData();
        });
    };

    const loadData = async () => {
        const res = await accountAPI.getAccounts();
        console.log(res.data);
        setListAccount(res.data);
    }

    useEffect(() => {
        loadData();
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