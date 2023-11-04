import { useEffect, useState } from "react";

import axios from "axios";
import Loading from "./Loading";
import ShowTasks from "./ShowTasks";

export default function Body() {
  const [taskData, setTaskData] = useState([]);
  const [errorData, setErrorData] = useState(null);
  const [refresh, setRefresh] = useState(true);

  const [doneTaskList, setDoneTaskList] = useState(null);
  const [notDoneTaskList, setNotDoneTaskList] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/tasks")
      .then((response) => {
        if (
          response == null ||
          response.data == null ||
          response.data.length === 0
        ) {
          setTaskData([]);
        } else {
          console.log(response.data);
          setTaskData(response.data);
          setDoneTaskList(() => {
            return taskData.filter((task) => task.done === true);
          });
          setNotDoneTaskList(() => {
            return taskData.filter((task) => task.done === false);
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorData(error);
      });
    console.log("TaskData: " + taskData);
  }, [refresh, taskData]);

  return (
    <>
      <div className="container px-2 border shadow rounded min-vh-100">
        {errorData && (
          <>
            <div class="alert alert-danger" role="alert">
              {errorData.message}
            </div>
          </>
        )}
        {taskData == null && (
          <>
            <Loading></Loading>
          </>
        )}

        {taskData && (
          <>
            <div className="r py-3 mx-auto">
              <ShowTasks
                taskData={notDoneTaskList}
                refresh={refresh}
                setRefresh={setRefresh}
                heading={"Tasks to Complete"}
              ></ShowTasks>
              <ShowTasks
                taskData={doneTaskList}
                refresh={refresh}
                setRefresh={setRefresh}
                heading={"Completed Tasks"}
              ></ShowTasks>
            </div>
          </>
        )}
      </div>
    </>
  );
}
