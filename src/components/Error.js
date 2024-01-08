import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h2>
        {err.status} : {err.statusText}
      </h2>
      <h3>{err.data}</h3>
    </>
  );
};

export default Error;
