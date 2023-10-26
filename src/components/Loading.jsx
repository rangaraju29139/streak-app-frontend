export default function Loading() {
  return (
    <>
      <div
        class="d-flex justify-content-center spinner-border py-5 my-5 px-5 mx-5 mx-auto"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      ></div>
      <div className="d-flex justify-content-center py-2 mx-auto">
        <p>Please wait while we are loading your data.....</p>
      </div>
    </>
  );
}
