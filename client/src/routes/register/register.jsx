// src/Register.js
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";
import Lottie from "react-lottie";
import register from "./register.json"

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: register,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registerPage">
      <div className="register-animation">
        <Lottie options={defaultOptions}/>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <p>Join Creators Cafe and elevate your content! </p>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Already have an account? Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;


// // src/Register.js
// import "./register.scss";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import apiRequest from "../../lib/apiRequest";
// import Lottie from 'react-lottie'; // Import Lottie
// import register from "./register.json"; 

// function Register() {
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);
//     const formData = new FormData(e.target);

//     const username = formData.get("username");
//     const email = formData.get("email");
//     const password = formData.get("password");

//     try {
//       const res = await apiRequest.post("/auth/register", {
//         username,
//         email,
//         password,
//       });

//       navigate("/login");
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="registerPage">
//       <div className="formContainer">
//         <form onSubmit={handleSubmit}>
//           <h1>Create an Account</h1>
//           <input name="username" type="text" placeholder="Username" required />
//           <input name="email" type="email" placeholder="Email" required />
//           <input name="password" type="password" placeholder="Password" required />
//           <button disabled={isLoading}>Register</button>
//           {error && <span>{error}</span>}
//           <Link to="/login">Already have an account? Login</Link>
//         </form>
//       </div>
//       <div className="animationContainer">
//         <Lottie animationData={register} loop={true} />
//       </div>
//     </div>
//   );
// }

// export default Register;
