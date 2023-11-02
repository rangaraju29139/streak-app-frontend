import { useEffect, useState } from "react";
import DoneList from "./DoneList";
import NotDoneList from "./NotDoneList";
import axios from "axios";
import Loading from "./Loading";

export default function Body() {
  const [taskData, setTaskData] = useState(null);
  const [errorData, setErrorData] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/tasks")
      .then((response) => {
        console.log(response.data);
        setTaskData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorData(error);
      });
  }, []);

  return (
    <>
      <div className="container px-2 border shadow rounded vh-100">
        {errorData && (
          <>
            <div class="alert alert-danger" role="alert">
              {errorData.message}
            </div>
          </>
        )}
        {errorData == null && taskData == null && (
          <>
            <Loading></Loading>
          </>
        )}
        {taskData && taskData.length == 0 && (
          <>
            <div class="alert alert-warning" role="alert">
              No Tasks Found
            </div>
          </>
        )}
        {taskData && taskData.length > 0 && (
          <>
            <div className="r py-3 mx-auto">
              <DoneList taskData={taskData}></DoneList>
              <NotDoneList taskData={taskData}></NotDoneList>
            </div>
          </>
        )}
      </div>
    </>
  );
}
