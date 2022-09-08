import React, { Component } from "react";

export class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: false,
      clickUpdate: false,
      data: [],
    };
    this.update = 0;
    this.row_id = -1;
    this.variables = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  onChange = (event) => {
    //this.setState({ [event.target.id]: event.target.value });
    this.variables[event.target.id] = event.target.value;
    console.log(this.variables);
  };

  handleSubmit = (event) => {

    let fN = document.getElementById("firstName").value
    let lN = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;

    if(this.state.clickUpdate === false){

    if (fN === "" || lN === "" || email === "" || pwd === "") {
      alert("All fields are required");
    } else {
      event.preventDefault(); // prevent page refresh
      console.log("handleSubmit ran");
      this.setState({ showData: true });
      this.row_id += 1;
      let temp = {
        row_id: this.row_id,
        firstName: this.variables.firstName,
        lastName: this.variables.lastName,
        email: this.variables.email,
        password: this.variables.password,
      };
      this.state.data.push(temp);
      
      console.log("DATA: ",this.state.data)
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }
    } else {
      this.setState({ showData: true });
      console.log("update ka submit ran")

      if(this.state.data[this.update].firstName !== fN){
        this.state.data[this.update].firstName = this.variables.firstName
      } 

      if(this.state.data[this.update].lastName !== lN){
        this.state.data[this.update].lastName = this.variables.lastName
      }

      if(this.state.data[this.update].email !== email){
        this.state.data[this.update].email = this.variables.email
      }

      if(this.state.data[this.update].password !== pwd){
        this.state.data[this.update].password = this.variables.password
      }

      this.setState({ data: this.state.data })
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";

      this.state.clickUpdate = false;
    }
    
  };

  handleLastDelete = () => {
    console.log("handle last delete ran")
    this.data.splice(this.row_id,1)
    document.getElementsByTagName("tr")[this.row_id+1].remove(); 
    this.row_id-=1;
    console.log("data after last delete", this.state.data)  
    }

  handleDelete = (event) => {
    if(!this.clickUpdate){
    console.log("handle delete ran")
    console.log(this.state.data[event.target.value])
    let a = event.target.value;
    this.state.data.splice(a,1)
    console.log("before for after del",this.state.data)
    for (let i = this.state.data.length-1; i >a-1 ; i--) {
      console.log("in for")
      this.state.data[i].row_id = this.state.data[i].row_id-1;
    }
    this.row_id-=1
    this.setState({data: this.state.data})
    console.log("after delete and for", this.state.data)
  }else{
    alert("Complete update action first")
  }
  }

  handleUpdate = (event) => {
    console.log("update ran");
    this.state.clickUpdate = true;
    let a = event.target.value;
    this.update = a;
    document.getElementById("firstName").value = this.state.data[a].firstName;
    document.getElementById("lastName").value = this.state.data[a].firstName;
    document.getElementById("email").value = this.state.data[a].firstName;
    document.getElementById("password").value = this.state.data[a].firstName;
  }

  handleClear = () =>{
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }

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
              <div className="mx-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </div>
              <div className="mx-2">
                <button
                  type="delete"
                  className="btn btn-danger"
                  onClick={this.handleLastDelete}
                >
                  Delete Last Element
                </button>
              </div>
              <div className="mx-2">
                <button
                  type="clear"
                  className="btn btn-success"
                  onClick={this.handleClear}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
          {this.state.showData && this.state.data.length && (
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
                    <th scope="col">Action</th>
                    <th scope="col">Update</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((value) => {
                    return (
                      <tr value={value.row_id} onMouseDown={this.handleUpdate}>
                        <th scope="row">{value.row_id + 1}</th>
                        <td>{value.firstName}</td>
                        <td>{value.lastName}</td>
                        <td>{value.email}</td>
                        <td>{value.password}</td>
                        <td><button type="delete" value={value.row_id} className="btn btn-danger" onClick={this.handleDelete}>Delete</button></td>
                        <td><button type="delete" value={value.row_id} className="btn btn-success" onClick={this.handleUpdate}>Update</button></td>
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
