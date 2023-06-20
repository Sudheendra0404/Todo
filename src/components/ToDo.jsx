import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

const ToDo = ({ toDo, markDone, setUpdateData, setShow, handleDelete }) => {
  return (
    <>
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <Row className="taskBg">
                  <Col className={task.status ? 'done' : ''}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </Col>

                  <Col xs="auto" className="iconsWrap">
                    <span onClick={(e) => markDone(task.id)} title="Completed/Not Completed">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

                    {!task.status && (
                      <span title="Edit" onClick={() => setUpdateData({ id: task.id, title: task.title, status: task.status ? true : false })}>
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span title="Delete" onClick={() => handleDelete(task)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </span>
                  </Col>
                </Row>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDo;
