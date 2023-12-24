import React from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getNowDate } from "../../../Utils/Hepers/getNowDate";
import { useDispatch, useSelector } from "react-redux";
import ACCOUNT, {
  createAccount,
  updateAccount,
} from "../../../Redux/Actions/AccountAction";

function InputForm(props) {
  const { currentFormData } = useSelector((state) => state.account);
  const dispatch = useDispatch();

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
      createDate: getNowDate(),
    };

    if (!currentFormData?.id) {
      const data = {
        ...formData,
      };
      dispatch(createAccount(data));
    } else {
      const newData = {
        id: currentFormData.id,
        ...formData,
      };
      dispatch(updateAccount(newData));
    }

    dispatch({ type: ACCOUNT.SET_MODAL, payload: false });
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
            defaultValue={currentFormData?.email}
            required
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
            defaultValue={currentFormData?.userName}
            required
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
            defaultValue={currentFormData?.fullName}
            required
          />
        </FormGroup>

        {/* Department */}
        <FormGroup>
          <Label for="Department">Select a Department: </Label>
          <Input
            id="Department"
            name="Department"
            type="select"
            innerRef={departmentRef}
            defaultValue={currentFormData?.department}
          >
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
          <Input
            id="Postion"
            name="Postion"
            type="select"
            innerRef={postionRef}
            defaultValue={currentFormData?.position}
          >
            <option value={"Dev"}>Dev</option>
            <option value={"Test"}>Test</option>
            <option value={"Scrum_Master"}>Scrum_Master</option>
            <option value={"PM"}>PM</option>
          </Input>
        </FormGroup>
        {/* Nút xử lý */}
        <Button type="submit" color="primary">
          {!currentFormData?.id ? "Create" : "Update"}
        </Button>
        <Button type="reset" color="danger">
          Reset
        </Button>
      </Form>
    </Container>
  );
}

export default InputForm;
