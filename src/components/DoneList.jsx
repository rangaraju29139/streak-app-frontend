export default function DoneList({ taskData }) {
  return (
    <>
      <div className="container  border rounded shadow mb-4 py-2">
        <div className=" col-12  d-flex justify-content-center ">
          <h1> Done List</h1>
        </div>
        <hr className="hr-blurry py-2"></hr>
        <div className="container">
          <table class="table ">
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
            <tbody>
              {taskData
                .filter((task) => {
                  return task.done === true;
                })
                .map((task) => (
                  <tr
                    key={task.id}
                    className="border roounded shadow py-2 my-auto align-middle d-flex justify-content-between"
                  >
                    <td>
                      <input
                        class="form-check-input py-3 px-3 my-auto"
                        type="checkbox"
                        value=""
                      />
                    </td>
                    <td> Task Name</td>
                    <td>
                      🔥<span>1</span>
                    </td>
                    <td>
                      <button className="btn btn-primary">
                        Today Task Completed
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
