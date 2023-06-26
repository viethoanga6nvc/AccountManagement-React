import React from "react";
import { Container, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import ACCOUNT from "../../Redux/Actions/AccountAction";

function CreateButton(props) {
    const dispatch = useDispatch();
    return (
        <Container>
            <br />
            <Button color="primary" onClick={() => dispatch({ type: ACCOUNT.SET_MODAL, payload: true })}>Create New Account</Button>
        </Container>
    );
}

export default CreateButton;