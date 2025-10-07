import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './add_employee.css'
import { IoMdClose } from "react-icons/io";

function AddEmployee({setIsAdd}) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='add_employee'>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid grey', paddingBottom: '10px', marginBottom: '20px' }}>
                <h2 style={{ textAlign: 'center' }}>Add Employee</h2>
                <p style={{ fontSize: '30px', paddingRight: '20px', cursor: 'pointer' }} onClick={()=>setIsAdd(false)}><IoMdClose /></p>
            </div>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>employee</Form.Label>
                        <Form.Select required>
                            <option value="" disabled selected>-- Select employee --</option>
                            <option value="ATHILAKSHMI COTTON MILL">ATHILAKSHMI COTTON MILL</option>
                            <option value="SASTHA TEXTILES">SASTHA TEXTILES</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Payroll Type</Form.Label>
                        <Form.Select required>
                            <option value="" disabled selected>-- Select Payroll Type --</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Daily">Daily</option>
                        </Form.Select>
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Department</Form.Label>
                        <Form.Select required>
                            <option value="" disabled selected>-- Select Department--</option>
                            <option value="BLOWROOM">BLOWROOM</option>
                            <option value="CARDING">CARDING</option>
                            <option value="DRAWING">DRAWING</option>
                            <option value="SIMPLEX">SIMPLEX</option>
                            <option value="SPINNING">SPINNING</option>
                            <option value="WINDING">WINDING</option>
                            <option value="MANAGER">MANAGER</option>
                            <option value="ACCOUNTANT(550)">ACCOUNTANT(550)</option>
                            <option value="ACCOUNTANT(600)">ACCOUNTANT(600)</option>
                            <option value="SUPERVISOR">SUPERVISOR</option>
                            <option value="test">test</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control type="date" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Designation</Form.Label>
                        <Form.Select required>
                            <option value="" disabled selected>-- Select Designation--</option>
                            <option value="BLOWROOM">BLOWROOM</option>
                            <option value="CARDING">CARDING</option>
                            <option value="DRAWING">DRAWING</option>
                            <option value="SIMPLEX">SIMPLEX</option>
                            <option value="SPINNING">SPINNING</option>
                            <option value="WINDING">WINDING</option>
                            <option value="MANAGER">MANAGER</option>
                            <option value="ACCOUNTANT(550)">ACCOUNTANT(550)</option>
                            <option value="ACCOUNTANT(600)">ACCOUNTANT(600)</option>
                            <option value="SUPERVISOR">SUPERVISOR</option>
                            <option value="test">test</option>
                        </Form.Select>
                    </Form.Group>
                   <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Bus Fare</Form.Label>
                        <Form.Control type="number" placeholder="enter Bus Fare" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Employee Name" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>

                     <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>ID Proof</Form.Label>
                        <Form.Control type="text" placeholder="Enter ID Proof" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                   
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Phone No</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone No" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                     <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Bank Name" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>



                <Row className="mb-3">
                   
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Door No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Door No" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Branch Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Branch Name" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>



                <Row className="mb-3">
                    
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Address 1</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address 1" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address 2" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>



                <Row className="mb-3">
                    
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Account Number" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>IFSC Code</Form.Label>
                        <Form.Control type="text" placeholder="Enter IFSC Code" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    

                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Area</Form.Label>
                        <Form.Control type="text" placeholder="Enter Area" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>State</Form.Label>
                        <Form.Select required>
                            <option value="" disabled selected>-- Select State --</option>
                            <option value="tn">Tamil Nadu</option>
                            <option value="ka">Karnataka</option>
                            <option value="kl">Kerala</option>
                            <option value="mh">Maharashtra</option>
                            <option value="gj">Gujarat</option>
                            <option value="up">Uttar Pradesh</option>
                            <option value="dl">Delhi</option>
                            <option value="hr">Haryana</option>
                            <option value="pb">Punjab</option>
                            <option value="rj">Rajasthan</option>
                            <option value="ap">Andhra Pradesh</option>
                            <option value="tg">Telangana</option>
                            <option value="od">Odisha</option>
                            <option value="wb">West Bengal</option>
                            <option value="br">Bihar</option>
                            <option value="jh">Jharkhand</option>
                            <option value="ct">Chhattisgarh</option>
                            <option value="mp">Madhya Pradesh</option>
                            <option value="hr">Haryana</option>
                            <option value="ut">Uttarakhand</option>
                            <option value="hp">Himachal Pradesh</option>
                            <option value="jk">Jammu and Kashmir</option>
                            <option value="tr">Tripura</option>
                            <option value="as">Assam</option>
                            <option value="ar">Arunachal Pradesh</option>
                            <option value="ml">Meghalaya</option>
                            <option value="mn">Manipur</option>
                            <option value="mz">Mizoram</option>
                            <option value="nl">Nagaland</option>
                            <option value="sk">Sikkim</option>
                            <option value="ga">Goa</option>
                            <option value="dn">Dadra and Nagar Haveli</option>
                            <option value="dd">Daman and Diu</option>
                            <option value="ld">Lakshadweep</option>
                            <option value="an">Andaman and Nicobar Islands</option>
                            <option value="ch">Chandigarh</option>
                            <option value="la">Ladakh</option>
                            <option value="py">Puducherry</option>
                            <option value="other">Other</option>

                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Filed.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className='button-group' style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px', borderTop: '1px solid grey', paddingTop: '20px' }}>
                    <Button type='close'onClick={()=>setIsAdd(false)} style={{ marginRight: '10px', backgroundColor: 'gray', border: 'none' }}>Close</Button>
                    <Button type="submit">Create</Button>
                </div>

            </Form>
        </div>
    );
}

export default AddEmployee;