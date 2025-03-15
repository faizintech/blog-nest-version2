import { RxCross1 } from "react-icons/rx";
const ErrorMessage = ({ error, setError }) => {
  return (
    <div className="ErrorMessage">
      <p>{error}</p>
      <span
        onClick={() => {
          setError("");
        }}
      >
        <RxCross1 />
      </span>
    </div>
  );
};
export default ErrorMessage;
