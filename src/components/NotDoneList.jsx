export default function NotDoneList() {
  return (
    <>
      <div className="container  border rounded shadow my-2">
        <div className=" col-12  d-flex justify-content-center ">
          <h1> Done List</h1>
        </div>
        <hr className="hr-blurry py-2"></hr>
        <div className="container">
          <table class="table table-hover">
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
              <tr className="border roounded shadow py-2 my-auto">
                <th scope="row">
                  {" "}
                  <input class="form-check-input" type="checkbox" value="" />
                </th>
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
