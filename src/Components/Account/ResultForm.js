import React, { useState } from "react";
import { Table, Container, Button } from "reactstrap";
import ResultFormItem from "./ResultFormItem";
import { generateId } from "../../Utils/Hepers/generateId";
import { getNowDate } from "../../Utils/Hepers/getNowDate";

class Employee {
    constructor(id, email, userName, fullName, department, position, createDate) {
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.fullName = fullName;
        this.department = department;
        this.position = position;
        this.createDate = createDate;
    }
}

function ResultForm(props) {
    const initEmp = [
        new Employee(generateId(), "an.nguyen@gmail.com", "an.nguyen", "Nguyen An", "sale", "dev", getNowDate()),
        new Employee(generateId(), "hung.nguyen@gmail.com", "hung.nguyen", "Nguyen hung", "sale", "dev", getNowDate()),
        new Employee(generateId(), "binh.nguyen@gmail.com", "binh.nguyen", "Nguyen binh", "sale", "dev", getNowDate()),
    ];

    const [emps, setEmps] = useState(initEmp);

    const handleAddNew = () => {
        const empName = window.prompt('Nhập tên:', '');
        const empUserName = window.prompt('Nhập username:', '');
        const empFullName = window.prompt('Nhập fullname:', '');

        const newEmp = new Employee(generateId(), `${empName}.nguyen@gmail.com`, `${empUserName}`, `${empFullName}`, "sale", "dev", getNowDate());

        const empClone = [...emps];
        empClone.push(newEmp);
        setEmps(empClone);
    };
    return (
        <Container>
            <br />
            <h3>Danh sách Account</h3>
            <Button onClick={handleAddNew}>Add new</Button>
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Fullname</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Cretate Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(emp => <ResultFormItem key={emp.id} {...emp} />)}
                </tbody>
            </Table>
        </Container>
    );
}

export default ResultForm;