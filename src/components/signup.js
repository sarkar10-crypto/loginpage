import React, { useState } from "react";


const Signup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signup Successful!\nName: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    onClose();
  };

  return (
    <div className="signup-container">
      <div className="signup-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h1>Create an Account</h1>
        <form onSubmit={handleSignup}>
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="#login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
