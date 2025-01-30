// import React, { useState, useEffect } from "react";
// import "./login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassChange = (e) => {
//     setPass(e.target.value);
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     if (email && pass) {
//       alert(`Email: ${email}\nPassword: ${pass}`);
//     } else {
//       alert("Please fill in both fields.");
//     }
//     setEmail("");
//     setPass("");
//   };

//   useEffect(() => {
//     console.log("Email or Password updated:", { email, pass });
//   }, [email, pass]); // useEffect triggers whenever email or pass changes

//   return (
//     <div className="right-panel">
//       <h1>Welcome to Innomatics</h1>
//       <p>Please sign in to your account and start the adventure</p>
//       <form>
//         <label>Email or Username</label>
//         <input
//           value={email}
//           type="email"
//           onChange={handleChange}
//           placeholder="Enter your email or username"
//         />
//         <label>Password</label>
//         <div className="password-container">
//           <input
//             value={pass}
//             type={showPassword ? "text" : "password"}
//             onChange={handlePassChange}
//             placeholder="Password"
//           />
//           <button onClick={() => setShowPassword((prev) => !prev)} type="button" className="show-password">
//             {showPassword ? "🙈" : "👁"}
//           </button>
//         </div>
//         <div className="options">
//           <label>
//             <input type="checkbox" />
//             Remember me
//           </label>
//           <a href="#forgot-password">Forgot password?</a>
//         </div>
//         <button onClick={handleClick} type="submit" className="login-btn">
//           Login
//         </button>
//       </form>
//       <p>
//         New on our platform? <a href="#signup">Create an account</a>
//       </p>
//       <div className="social-icons">
//         <button>Facebook</button>
//         <button>Twitter</button>
//         <button>GitHub</button>
//         <button>Google</button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import "./login.css";
import Signup from "./signup";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (email && pass) {
      alert(`Email: ${email}\nPassword: ${pass}`);
    } else {
      alert("Please fill in both fields.");
    }
    setEmail("");
    setPass("");
  };

  useEffect(() => {
    console.log("Email or Password updated:", { email, pass });
  }, [email, pass]); // useEffect triggers whenever email or pass changes

  return (
    <div className="right-panel">
      <h1>Welcome to Innomatics</h1>
      <p>Please sign in to your account and start the adventure</p>
      <form>
        <label>Email or Username</label>
        <input
          value={email}
          type="email"
          onChange={handleChange}
          placeholder="Enter your email or username"
        />
        <label>Password</label>
        <div className="password-container">
          <input
            value={pass}
            type={showPassword ? "text" : "password"}
            onChange={handlePassChange}
            placeholder="Password"
          />
          <button onClick={() => setShowPassword((prev) => !prev)} type="button" className="show-password">
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>
        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#forgot-password">Forgot password?</a>
        </div>
        <button onClick={handleClick} type="submit" className="login-btn">
          Login
        </button>
        <button type="button" className="signup-btn" onClick={() => {
          alert("Redirecting to Signup Page...",); 
          <Signup/>
        }
          
        }> 
          Sign Up
        </button>
      </form>
      <p>
        New on our platform? <a href="#signup">Create an account</a>
      </p>
      <div className="social-icons">
        <button>Facebook</button>
        <button>Twitter</button>
        <button>GitHub</button>
        <button>Google</button>
      </div>
    </div>
  );
};

export default Login;
