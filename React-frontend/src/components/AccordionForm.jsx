import React, { useState } from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';
import { postForm } from '../api/apiFunctions';
import "../styles/accordion.css";

const AccordionForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  }
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    postForm(form).then(console.log(form));
    setSubmitted(true);
  };

  const setField = (field, value) => {;
    setForm({
      ...form,
      [field]: value
    });
  };

  return (
      <Accordion defaultActiveKey={["0"]} className="accordion-container" alwaysOpen>
        <Form onSubmit={handleSubmit}>
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={toggleOpen}>
              <h4>Part 3: Beneficiary Information</h4>
            </Accordion.Header>
            <Accordion.Body>
              <Form.Group className="mb-3" controlId="1000">
                <Form.Label>Alien Registration Number *</Form.Label>
                <Form.Control type="textarea" placeholder="Alien Num" required onChange={e => setField('alienNum', e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="1">
                <Form.Label>Country of Birth *</Form.Label>
                <Form.Control type="textarea" placeholder="Country" required onChange={e => setField('countryOfBirth', e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="2">
                <Form.Label>Province of Birth *</Form.Label>
                <Form.Control type="textarea" placeholder="Province" required onChange={e => setField('provinceOfBirth', e.target.value)} />
              </Form.Group>
              <Form.Check className="mb-3" type="checkbox" label="Beneficiary is in the US" onChange={toggleForm} />
              {showForm &&
                <div>
                  <Form.Group className="mb-3 d-flex me-3 ms-2" controlId="3">
                    <div className='d-flex row'>
                      <Form.Label className='align-self-end' >Date of Last Arrival</Form.Label>
                      <Form.Control className='align-self-end' type="textarea" required placeholder="Arrival" style={{ maxHeight: '38px' }} onChange={e => setField('dateOfLastArrival', e.target.value)} />
                    </div>
                    <div className='d-flex row ms-4'>
                      <Form.Label>I-94 Arrival-Departure Record Number *</Form.Label>
                      <Form.Control type="textarea" placeholder="I-94 number" required style={{ maxHeight: '38px' }} onChange={e => setField('i94DepartureNumber', e.target.value)}/>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="4">
                    <Form.Label>Passport or Travel Document Number *</Form.Label>
                    <Form.Control type="textarea" placeholder="Travel document number" required onChange={e => setField('passportNumber', e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="5">
                    <Form.Label>Date Passport or Travel Document Issued *</Form.Label>
                    <Form.Control type="textarea" placeholder="Issue date" required onChange={e => setField('passportIssueDate', e.target.value)} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="6">
                    <Form.Label>Date Passport or Travel Document Expires *</Form.Label>
                    <Form.Control type="textarea" placeholder="Expiry date" required onChange={e => setField('passportExpiryDate', e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="7">
                    <Form.Label>Date Passport or Travel Document Country of Issuance *</Form.Label>
                    <Form.Control type="textarea" placeholder="Country of Issuance" required onChange={e => setField('countryOfIssuance', e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3 d-flex me-3 ms-2" controlId="8">
                    <div className='d-flex row'>
                      <Form.Label className='align-self-end' >Current Nonimmigrant Status *</Form.Label>
                      <Form.Control className='align-self-end' type="textarea" placeholder="Status" required style={{ maxHeight: '38px' }} onChange={e => setField('nonimmigrantStatus', e.target.value)}/>
                    </div>
                    <div className='d-flex row ms-4'>
                      <Form.Label>Date Status Expires or D/S *</Form.Label>
                      <Form.Control type="textarea" placeholder="Expiry" required style={{ maxHeight: '38px' }} onChange={e => setField('statusExpiry', e.target.value)}/>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="9">
                    <Form.Label>{'Student and Exchange Visitor Information System (SEVIS) Number (if any)'}</Form.Label>
                    <Form.Control type="textarea" placeholder="SEVIS Number" onChange={e => setField('sevisNumber', e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="10">
                    <Form.Label>{'Employment Authorization Document (EAD) Number (if any)'}</Form.Label>
                    <Form.Control type="textarea" placeholder="EAD Number" onChange={e => setField('eadNumber', e.target.value)} />
                  </Form.Group>
                  <p style={{ fontWeight: "bold" }}>{"Current Residential U.S Address (if applicable) (do not list a P.O box)"}</p>
                  <Form.Group className="mb-3" controlId="11">
                    <Form.Label>Street Number and Name</Form.Label>
                    <Form.Control type="textarea" placeholder="St. Number and Name" onChange={e => setField('usStreetName', e.target.value)}/>
                  </Form.Group>
                  <div className='d-flex align-items-center mb-1'>
                    <Form.Group className='d-inline-flex mb-3 justify-content-evenly align-items-center' id='radio'>
                      <Form.Check inline label='Apt.' className="me-2" name='group1' type="radio" id='radio' onChange={e => setField('usResType', 'Apt.')}/>
                      <Form.Check inline label='Ste.' className="me-2" name='group1' type="radio" id='radio' onChange={e => setField('usResType', 'Ste.')}/>
                      <Form.Check inline label='Flr.' className="me-2" name='group1' type="radio" id='radio' onChange={e => setField('usResType', 'Flr.')}/>
                      <Form.Check inline label='N/A' className="me-2" name='group1' type="radio" id='radio' onChange={e => setField('usResType', 'N/A')}/>
                      <Form.Control className='ms-3' type="textarea" placeholder="Number" onChange={e => setField('usResNum', e.target.value)}/>
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3 d-flex me-3 ms-2" controlId="12">
                    <div className='d-flex row flex-fill'>
                      <Form.Label >City or Town</Form.Label>
                      <Form.Control type="textarea" placeholder="City/Town" style={{ maxHeight: '38px' }} onSelect={e => setField('usCity', e.target.value)}/>
                    </div>
                    <div className='d-flex row ms-4 flex-fill'>
                      <Form.Label>State</Form.Label>
                      <Form.Control type="textarea" placeholder="State" style={{ maxHeight: '38px' }} onSelect={e => setField('usState', e.target.value)}/>
                    </div>
                    <div className='d-flex row ms-4 flex-fill'>
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type="textarea" placeholder="Code" style={{ maxHeight: '38px' }} onSelect={e => setField('usZipCode', e.target.value)}/>
                    </div>
                  </Form.Group>
                </div>
              }
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h4>Part 4: Processing Information</h4>
            </Accordion.Header>
            <Accordion.Body>
              <p>If a beneficiary or beneficiaries named in <strong>Part 3</strong>. is/are outside the United States, or a requested extension of stay or change
                of status cannot be granted, state the U.S. Consulate or inspection facility you want notified if this petition is approved.
              </p>
              <Form.Group className='d-flex mb-3 justify-content-evenly align-items-center w-100' id='radio1'>
                <Form.Label className='fw-bold w-25'>a. Type of Office</Form.Label>
                <div className='d-flex justify-content-evenly w-100'>
                  <Form.Check inline label='Consulate' className="me-2" name='group2' type="radio" id='radio1' onSelect={e => setField('officeType', e.target.value)}/>
                  <Form.Check inline label='Pre-flight Inspection' className="me-2" name='group2' type="radio" id='radio1' onSelect={e => setField('officeType', e.target.value)}/>
                  <Form.Check inline label='Port of Entry' className="me-2" name='group2' type="radio" id='radio1' onSelect={e => setField('officeType', e.target.value)}/>
                </div>
              </Form.Group>
              <Form.Group className="mb-3 d-flex me-3" controlId="12">
                <div className='d-flex row flex-fill'>
                  <Form.Label className='fw-bold'>{"b. Office Address (City)"}</Form.Label>
                  <Form.Control type="textarea" placeholder="St. Number and Name" style={{ maxHeight: '38px' }} onChange={e => setField('officeAddress', e.target.value)}/>
                </div>
                <div className='d-flex row ms-4 flex-fill'>
                  <Form.Label className='fw-bold'>c. US State or Foreign Country</Form.Label>
                  <Form.Control type="textarea" placeholder="State/Country" style={{ maxHeight: '38px' }} onChange={e => setField('officeCountry', e.target.value)}/>
                </div>
              </Form.Group>
              <p className='fw-bold'>{"d. Beneficiary Foreign Address"}</p>
              <Form.Group className="mb-3" controlId="11">
                <Form.Label>Street Number and Name</Form.Label>
                <Form.Control type="textarea" placeholder="St. Number and Name" onChange={e => setField('foreignStreet', e.target.value)}/>
              </Form.Group>
              <div className='d-flex align-items-center mb-1'>
                <Form.Group className='d-inline-flex mb-3 justify-content-evenly align-items-center' id='radio'>
                  <Form.Check inline label='Apt.' className="me-2" name='group1' type="radio" id='radio' onSelect={e => setField('foreignResType', 'Apt.')}/>
                  <Form.Check inline label='Ste.' className="me-2" name='group1' type="radio" id='radio' onSelect={e => setField('foreignResType', 'Ste.')}/>
                  <Form.Check inline label='Flr.' className="me-2" name='group1' type="radio" id='radio' onSelect={e => setField('foreignResType', 'Flr.')}/>
                  <Form.Check inline label='N/A' className="me-2" name='group1' type="radio" id='radio' onSelect={e => setField('foreignResType', 'N/A')}/>
                  <Form.Control className='ms-3' type="textarea" placeholder="Number" onChange={e => setField('foreignResNum', e.target.value)}/>
                </Form.Group>
              </div>
              <Form.Group className="mb-3 d-flex me-3 ms-2" controlId="12">
                <div className='d-flex row flex-fill'>
                  <Form.Label >City or Town</Form.Label>
                  <Form.Control type="textarea" placeholder="City/Town" style={{ maxHeight: '38px' }} onChange={e => setField('foreignCity', e.target.value)}/>
                </div>
                <div className='d-flex row ms-4 flex-fill'>
                  <Form.Label>State</Form.Label>
                  <Form.Control type="textarea" placeholder="State" style={{ maxHeight: '38px' }} onChange={e => setField('foreignState', e.target.value)}/>
                </div>
                <div className='d-flex row ms-4 flex-fill'>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="textarea" placeholder="Code" style={{ maxHeight: '38px' }} onChange={e => setField('foreignZipCode', e.target.value)}/>
                </div>
              </Form.Group>
              <Form.Group className="mb-3 d-flex me-3 ms-2" controlId="12">
                <div className='d-flex row flex-fill'>
                  <Form.Label >Province</Form.Label>
                  <Form.Control type="textarea" placeholder="Province" style={{ maxHeight: '38px' }} onChange={e => setField('foreignProvince', e.target.value)}/>
                </div>
                <div className='d-flex row ms-4 flex-fill'>
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="textarea" placeholder="Country" style={{ maxHeight: '38px' }} onChange={e => setField('foreignCountry', e.target.value)}/>
                </div>
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>
          <div className='w-100 d-flex justify-content-center' style={{marginTop: '5vh'}}>
            <Button className='my-2 submit-button' variant="outline-primary" type='submit'>
              Submit
            </Button>
          </div>
        </Form>
        {submitted &&
          <h3>Submitted!</h3>
        }
      </Accordion>
  );
}

export default AccordionForm;