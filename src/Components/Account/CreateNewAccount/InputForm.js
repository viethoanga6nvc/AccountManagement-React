import React, { useContext } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { AccountContext } from "../../../Container/AccountContainer";
import { generateId } from "../../../Utils/Hepers/generateId";
import { getNowDate } from "../../../Utils/Hepers/getNowDate";

function InputForm(props) {
    const { onHandleCreateNewAccount } = useContext(AccountContext);

    const emailRef = React.createRef();
    const usernameRef = React.createRef();
    const fullnameRef = React.createRef();
    const departmentRef = React.createRef();
    const postionRef = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            id: generateId(),
            email: emailRef.current.value,
            userName: usernameRef.current.value,
            fullName: fullnameRef.current.value,
            department: departmentRef.current.value,
            position: postionRef.current.value,
            createDate: getNowDate()
        };

        onHandleCreateNewAccount(formData);
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
                    />
                </FormGroup>

                {/* Department */}
                <FormGroup>
                    <Label for="Department">Select a Department: </Label>
                    <Input id="Department" name="Department" type="select" innerRef={departmentRef}>
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
                    <Input id="Postion" name="Postion" type="select" innerRef={postionRef}>
                        <option value={"Dev"}>Dev</option>
                        <option value={"Test"}>Test</option>
                        <option value={"Scrum_Master"}>Scrum_Master</option>
                        <option value={"PM"}>PM</option>
                    </Input>
                </FormGroup>
                {/* Nút xử lý */}
                <Button type="submit" color="primary">Create</Button>
                <Button type="reset" color="danger">Reset</Button>
            </Form>
        </Container>
    );
}

export default InputForm;