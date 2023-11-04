import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ShowTasks({ taskData, refresh, setRefresh, heading }) {
  const [showAddInput, setShowAddInput] = useState(false);
  const [newTaskName, setNewTaskName] = useState(null);

  useEffect(() => {
    console.log("task data in done list" + taskData);
  }, [taskData, refresh]);

  const handleCompleted = (event, taskId) => {
    console.log("today task completed for " + taskId);

    axios.patch(
      `http://localhost:8080/api/v1/tasks/${taskId}/updateTodayTaskCompleted`
    );
    setRefresh(!refresh);
  };
  const handleDone = (event, taskId) => {
    console.log("task done for " + taskId);
    axios.patch(
      `http://localhost:8080/api/v1/tasks/${taskId}/updateDone/${event.target.checked}`
    );
    setRefresh(!refresh);
  };

  const handleAddButton = (event) => {
    if (newTaskName != null && showAddInput) {
      axios
        .post(`http://localhost:8080/api/v1/tasks`, {
          taskName: newTaskName,
        })
        .then((response) => {
          console.log(response.data);
          setRefresh(!refresh);
        })
        .catch((error) => {
          console.log(error);
        });
      setShowAddInput(false);
    } else {
      setShowAddInput(true);
    }
  };

  const handleNewTaskName = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleDelete = (event, taskId) => {
    console.log("task deleted for " + taskId);
    axios
      .delete(`http://localhost:8080/api/v1/tasks/${taskId}/delete`)
      .then((response) => {
        console.log(response.data);
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container  border rounded shadow mb-4 py-2">
        <div className=" col-12  d-flex justify-content-center ">
          <h1> {heading}</h1>
        </div>
        <hr className="hr-blurry py-2"></hr>
        <div className="container">
          {/** 
        <thead>
              <tr>
                <th scope="col">IsDone</th>
                <th scope="col">Name</th>
                <th scope="col">Streak Count</th>
                <th scope="col">completed Today Task</th>
              </tr>
            </thead>
    
    */}

          {(taskData == null || taskData.length === 0) && (
            <>
              <div className="alert alert-warning">No {heading} Found</div>
            </>
          )}

          {taskData &&
            taskData.map((task) => (
              <>
                <ul
                  key={task.id}
                  className=" list-inline border roounded shadow py-2 px-2 my-auto align-middle d-flex justify-content-between"
                >
                  <ul
                    className="list-inline d-flex justify-content-between"
                    key={task.id}
                  >
                    <li>
                      <input
                        class="form-check-input py-3 px-3  my-auto"
                        type="checkbox"
                        defaultChecked={task.done}
                        onChange={(event) => handleDone(event, task.id)}
                      />
                    </li>
                    <li className="px-1">{task.taskName}</li>
                  </ul>
                  <ul
                    className="list-inline d-flex justify-content-between"
                    key={task.id}
                  >
                    <li className="p-1">
                      🔥<span>{task.streakCount}</span>
                    </li>
                    <li>
                      <button
                        className="btn btn-primary"
                        onClick={(event) => handleCompleted(event, task.id)}
                      >
                        Today Task Completed
                      </button>
                    </li>

                    <li>
                      <button
                        className="btn btn-danger"
                        onClick={(event) => handleDelete(event, task.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </li>
                  </ul>
                </ul>
              </>
            ))}

          {heading === "Tasks to Complete" && showAddInput && (
            <>
              <input
                type="name"
                className="form-control my-2 "
                placeholder="Enter New Task to Acomplish"
                onChange={handleNewTaskName}
              ></input>
            </>
          )}
          {heading === "Tasks to Complete" && (
            <button className="btn btn-success my-2" onClick={handleAddButton}>
              AddTask
            </button>
          )}
        </div>
      </div>
    </>
  );
}
