import React from "react";
import { Table, Container } from "reactstrap";
import ResultFormItem from "./ResultFormItem";
import { useSelector } from "react-redux";

function ResultForm(props) {
    const mess = useSelector((state) => state.message);
    return (
        <Container>
            <br />
            <h3>Danh sách Account {mess}</h3>
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Fullname</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Create Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(emp => <ResultFormItem key={emp.id} {...emp} />)}
                </tbody>
            </Table>
        </Container>
    );
}

export default ResultForm;