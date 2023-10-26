import { useEffect, useState } from "react";
import DoneList from "./DoneList";
import NotDoneList from "./NotDoneList";
import axios from "axios";

export default function Body() {
  const [taskData, setTaskData] = useState(null);
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/tasks")
      .then((response) => {
        console.log(response.data);
        setTaskData(response.data);
        setErrorData(null);
      })
      .catch((error) => {
        console.log(error);
        setErrorData(error);
      });
  }, []);

  return (
    <>
      <div className="container px-2 border shadow rounded vh-100">
        <div className="d-flex justify-content-center py-3 mx-auto">
          <DoneList></DoneList>
          <NotDoneList></NotDoneList>
        </div>
      </div>
    </>
  );
}
