import React from "react";
//import { useState } from 'react';

export default function Form() {

  const getInputValue = (event)=>{
    // show the user input value to console
    const userValue = event.target.value;
    
    console.log(userValue);
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
                onChange={getInputValue}
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            {/* <div className="form-group col-md-6">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
            </div> */}
          </div>
          {/* <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="inputEmail"
                placeholder="Email"
              />
            </div> */}
            {/* <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </div> */}

          <button type="submit" className="btn btn-success">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
