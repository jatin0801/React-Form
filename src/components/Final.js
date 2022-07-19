import React, { Component } from "react";

export class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: false,
    };
    this.row_id= 0;
    this.data = [];
    this.variables={};
  }

  onChange = (event) => {
    //this.setState({ [event.target.id]: event.target.value });
    this.variables[event.target.id] = event.target.value ;
    console.log(this.variables);
  };

  handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh
    console.log("handleSubmit ran");
    this.setState({ showData: true });
    this.row_id+=1
    let temp= {
      row_id: this.row_id,
      firstName: this.variables.firstName,
      lastName: this.variables.lastName,
      email: this.variables.email,
      password: this.variables.password,
    };
    this.data.push(temp);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  };

  render() {
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
                  id="firstName"
                  name="first_name"
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
                  required
                  //value={firstName}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  className="form-control"
                  //value={lastName}
                  onChange={this.onChange}
                  required
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
                  onChange={this.onChange}
                  required
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
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
            </form>
            {this.state.showData && (
              <>
                <br />
                <table className="table">
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
                    {this.data.map((value) => {
                      return (
                        <tr>
                          <th scope="row">{value.row_id}</th>
                          <td>{value.firstName}</td>
                          <td>{value.lastName}</td>
                          <td>{value.email}</td>
                          <td>{value.password}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
            )}
          
        </div>
      </>
    );
  }
}

export default Final;