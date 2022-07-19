import { useState } from "react";
import React from "react";


function Abcd() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  // var data = [{
  //     id:'', 
  //     firstName:'',
  //     lastName:'',
  //     password:'',
  //     email:'',
  // }]

  const handleSubmit = (event) => {
    setShow(true);
    console.log("handleSubmit ran");
    event.preventDefault(); // prevent page refresh

    //access input values here
    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("email", email);
    console.log("password", password);
  };

  const handleClear = () => {
    //clear all input values in the form
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container my-5">
        <h1>Form</h1>
        <br />
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">First Name</label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                className="form-control"
                onChange={(event) => setFirstName(event.target.value)}
                //value={firstName}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                className="form-control"
                //value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                //value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                //value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div className="col-md-6">
              <button
                type="clear"
                className="btn btn-primary"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
          {show && (
            <>
              <br/>
              
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default Abcd;
