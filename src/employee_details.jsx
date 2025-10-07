import Table from 'react-bootstrap/Table';
import "./employee_details.css"
import React from 'react';
import Button from 'react-bootstrap/Button';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";

function Employee_details({setIsAdd}) {
    return (
        <div className="employee_details-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 className='employee_details'>Employee_details</h1>
                <div className='Add-3'><h3 onClick={()=>setIsAdd(true)}>Add New Employee_details</h3></div>
            </div>
            <Table striped bordered hover responsive>
                <thead >
                    <tr className='text-center table-dark fw-bold fs-5'>
                        <th>#</th>
                        <th>EmployeeId</th>
                        <th>CompanyName</th>
                        <th>DepartmentId</th>
                        <th>DesignationId</th>
                        <th>EmployeeName</th>
                        <th>PhoneNo</th>
                        <th>IsActive</th>
                        <th style={{ paddingLeft: '80px',paddingRight:'50PX'}}>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr className='fs-5'>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td >
                            <Button variant="outline-primary" size="sm" style={{ marginRight: '10px', fontSize: '20px' }}><MdOutlineModeEdit /></Button>
                            <Button variant="outline-danger" size="sm" style={{ marginRight: '10px', fontSize: '20px' }}><RiDeleteBin5Line /></Button>
                            <Button variant="outline-success" size="sm" style={{ fontSize: '20px' }}><BiSolidShow /></Button>

                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Employee_details;