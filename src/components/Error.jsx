import { useRouteError,Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err; // object destructuring
  return (
    <>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <h1>Oops something went wrong !!!</h1>
      <h2>We have conveyed this to our developers</h2>
      <h3 style={{ color: "red" }}>
        {"The error status code is " +
          status +
          " and the error status message is " +
          statusText}
      </h3>
    </>
  );
};
export default Error;
