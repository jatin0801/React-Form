import React, { Component } from "react";
// function Alert(props) {
//   return (
//     <div style={{height: '50px'}}>
//       {props.alert && <div>
//           <div className={`alert alert-primary alert-dismissible fade show`} role="alert">
//           <strong>{props.alert.msg}</strong>
//           </div>
//       </div>}
//     </div>
//   )
// }

// export default Alert
// //class based

// import React, { Component } from 'react'

export class Alert extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <div style={{height: '50px'}}>
      {this.props.alert && <div>
          <div className={`alert alert-primary alert-dismissible fade show`} role="alert">
          <strong>{this.props.alert.msg}</strong>
          </div>
      </div>}
    </div>
    )
  }
}

export default Alert