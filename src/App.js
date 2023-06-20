import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';
import { Container, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');
  const [deleteTask, setDeleteTask] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  // const [show, setShow] = useState(false);

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };

  const handleDelete = (task) => {
    setDeleteTask(task);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    if (deleteTask && deleteTask.id) {
      const taskId = deleteTask.id;
      const updatedTasks = toDo.filter(task => task.id !== taskId);
      setToDo(updatedTasks);
    } else {
      alert('Invalid task to delete');
    }
    setDeleteTask(null);
    setShowConfirmation(false);
  };
  

  const markDone = (id) => {
    const newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const cancelUpdate = () => {
    setUpdateData('');
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  const UpdateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData('');
  };

  return (
    <Container fluid className="App">
      <h2>To Do List</h2>

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          UpdateTask={UpdateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {toDo && toDo.length ? '' : 'No Tasks...'}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        setShowConfirmation={setShowConfirmation}
        handleDelete={handleDelete}
      />

      <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this task?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={confirmDelete}>Delete</Button>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
