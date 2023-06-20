import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      <Row>
        <Col>
          <Form.Control
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            size="lg"
            type="text"
            placeholder="Enter task"
          />
        </Col>

        <Col xs="auto">
          <Button onClick={addTask} variant="success" size="lg">
            Add Task
          </Button>
        </Col>
      </Row>
      <br />
    </>
  );
};

export default AddTaskForm;
