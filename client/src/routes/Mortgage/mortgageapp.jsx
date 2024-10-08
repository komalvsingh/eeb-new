
import { FcHome } from "react-icons/fc";
import Form from "./form";
import "./form.scss"

function MortgageApp() {
  return (
    <div
      className="Appy container"
      style={{ maxWidth: 500, margin: "1rem auto" }}
    >
      <h1 className="head">
        <FcHome /> Mortgage Calculator{" "}
      </h1>
      <Form />
      
    </div>
  );
}

export default MortgageApp;