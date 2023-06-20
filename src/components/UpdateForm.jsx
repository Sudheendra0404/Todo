import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const UpdateForm = ({ updateData, changeTask, UpdateTask, cancelUpdate }) => {
  return (
    <>
      <Row>
        <Col>
          <input value={updateData && updateData.title} onChange={(e) => changeTask(e)} className="form-control form-control-lg" />
        </Col>
        <Col xs="auto">
          <style>{`
            :root {
              --bs-btn-margin-right: 0.5rem; /* Add margin between buttons */
            }
          `}</style>
          <Button variant="success" className="btn-lg" onClick={UpdateTask}>
            Update
          </Button>
          <Button variant="warning" className="btn-lg" onClick={cancelUpdate}>
            Cancel
          </Button>
        </Col>
      </Row>
      <br />
    </>
  );
};

export default UpdateForm;
