import Table from 'react-bootstrap/Table';
import "./department.css"
import React from 'react';
import Button from 'react-bootstrap/Button';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";

function Department({setIsAdd}) {
    return (
        <div className="department-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 className='department'>Department</h1>
                <div className='Add-1'><h3 onClick={()=>setIsAdd(true)}>Add New department</h3></div>
            </div>
            <Table striped bordered hover responsive>
                <thead >
                    <tr className='text-center table-dark fw-bold fs-5'>
                        <th>#</th>
                        <th>DepartmentName</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr className='fs-5'>
                        <td>1</td>
                        <td>Mark</td>
                        <td>
                            <Button variant="outline-primary" size="sm" style={{ fontSize: '20px' }}><MdOutlineModeEdit /></Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Department;