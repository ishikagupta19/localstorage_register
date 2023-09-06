import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterPage = () => {

  const [name, setName] = useState('') ;
  const [dob, setDob] = useState('') ;

  const [email, setEmail] = useState('') ;
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // submit
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (name === "") {
      toast.error("Name Is Required");
    } else if (dob === "") {
      toast.error("DOB Is Required");
    }else if (email === "") {
      toast.error("Email Is Required");
    } else if (password === "") {
      toast.error("Password is Required");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("DOB", dob);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    
      toast.success("User Saved!");
      navigate('/table')
    }
  };

  return (
    <>
      <div className="form__container d-flex felx-column align-items-center justify-content-center">
        <form>
          <h4 className="form__heading">User Management System </h4>
          <hr />
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date Of Birth
            </label>
            <input
              type="number"
              className="form-control"
              value={dob}
              onChange={e => setDob(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
              id="exampleInputPassword1"
            />
          </div>
     
          <button type="submit" className="form__button" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
