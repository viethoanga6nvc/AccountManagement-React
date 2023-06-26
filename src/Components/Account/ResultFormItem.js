import React from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import ACCOUNT, { deleteAccount, setCurrentFormData } from "../../Redux/Actions/AccountAction";

function ResultFormItem(props) {
    const { data } = useSelector((state) => state.account);
    const dispatch = useDispatch();

    const handleEditAccount = () => {
        const currentData = data.find((account) => account.id === props.id);
        dispatch({ type: ACCOUNT.SET_MODAL, payload: true });
        dispatch(setCurrentFormData(currentData));
    }
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.email}</td>
            <td>{props.userName}</td>
            <td>{props.fullName}</td>
            <td>{props.department}</td>
            <td>{props.position}</td>
            <td>{props.createDate}</td>
            <td>
                <Button color="warning" onClick={handleEditAccount}>Edit</Button>
            </td>
            <td>
                <Button color="warning" onClick={() => dispatch(deleteAccount(props.id))}>Delete</Button>
            </td>
        </tr>
    );
}

export default ResultFormItem;