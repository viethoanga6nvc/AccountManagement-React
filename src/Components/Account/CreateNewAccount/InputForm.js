import React, { useContext } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { AccountContext } from "../../../Container/AccountContainer";
import { generateId } from "../../../Utils/Hepers/generateId";
import { getNowDate } from "../../../Utils/Hepers/getNowDate";

function InputForm(props) {
    const { onHandleCreateNewAccount, onHandleEditAccount, currentInputFormData } = useContext(AccountContext);

    const emailRef = React.createRef();
    const usernameRef = React.createRef();
    const fullnameRef = React.createRef();
    const departmentRef = React.createRef();
    const postionRef = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: emailRef.current.value,
            userName: usernameRef.current.value,
            fullName: fullnameRef.current.value,
            department: departmentRef.current.value,
            position: postionRef.current.value,
            createDate: getNowDate()
        };
        if (!currentInputFormData?.id) {
            const data = {
                id: generateId(),
                ...formData
            };
            onHandleCreateNewAccount(data);
        } else {
            const newData = {
                id: currentInputFormData.id,
                ...formData
            };
            onHandleEditAccount(newData);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* Email */}
                <FormGroup>
                    <Label for="Email">Email: </Label>
                    <Input
                        id="Email"
                        name="Email"
                        placeholder="Input Email"
                        type="email"
                        innerRef={emailRef}
                        defaultValue={currentInputFormData?.email}
                    />
                </FormGroup>

                {/* Username */}
                <FormGroup>
                    <Label for="Username">Username: </Label>
                    <Input
                        id="Username"
                        name="Username"
                        placeholder="Input Username"
                        type="text"
                        innerRef={usernameRef}
                        defaultValue={currentInputFormData?.userName}
                    />
                </FormGroup>

                {/* Fullname */}
                <FormGroup>
                    <Label for="Fullname">Fullname: </Label>
                    <Input
                        id="Fullname"
                        name="Fullname"
                        placeholder="Input Fullname"
                        type="text"
                        innerRef={fullnameRef}
                        defaultValue={currentInputFormData?.fullName}
                    />
                </FormGroup>

                {/* Department */}
                <FormGroup>
                    <Label for="Department">Select a Department: </Label>
                    <Input id="Department" name="Department" type="select" innerRef={departmentRef} defaultValue={currentInputFormData?.department}>
                        <option value={"Bán hàng"}>Bán hàng</option>
                        <option value={"Bảo vệ"}>Bảo vệ</option>
                        <option value={"Giám đốc"}>Giám đốc</option>
                        <option value={"Kỹ thuật"}>Kỹ thuật</option>
                        <option value={"Marketing"}>Marketing</option>
                    </Input>
                </FormGroup>

                {/* Postion */}
                <FormGroup>
                    <Label for="Postion">Select a Postion: </Label>
                    <Input id="Postion" name="Postion" type="select" innerRef={postionRef} defaultValue={currentInputFormData?.position}>
                        <option value={"Dev"}>Dev</option>
                        <option value={"Test"}>Test</option>
                        <option value={"Scrum_Master"}>Scrum_Master</option>
                        <option value={"PM"}>PM</option>
                    </Input>
                </FormGroup>
                {/* Nút xử lý */}
                <Button type="submit" color="primary">{!currentInputFormData?.id ? 'Create' : 'Update'}</Button>
                <Button type="reset" color="danger">Reset</Button>
            </Form>
        </Container>
    );
}

export default InputForm;