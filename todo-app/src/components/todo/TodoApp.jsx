import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
        <h1>TODO Management</h1>
        <Router>
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/welcome" element={<WelcomeComponent />} />
            {/* <Route path="*" element={<ErrorComponent />} /> */}
          </Routes>
        </Router>
        {/* <LoginComponent />
          <WelcomeComponent /> */}
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return <div>Welcome in 28 minutes</div>;
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "in28minutes",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    // this.handleUsernameChange = this.handleUsernameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    // console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  }

  //   handleUsernameChange(event) {
  //     console.log(event.target.name);
  //     this.setState({[event.target.name] : event.target.value})
  //   }

  //   handlePasswordChange(event) {
  //       console.log(event.target.value);
  //       this.setState({password: event.target.value})
  //   }

  loginClicked() {
    if (
      this.state.username === "in28minutes" &&
      this.state.password === "dummy"
    ) {
      this.props.history.push("/welcome");
      //   this.setState({ showSuccessMessage: true });
      //   this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
    //   console.log(this.state)
  }

  render() {
    return (
      <div>
        {/*<ShowInvaildCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
        {this.state.hasLoginFailed && <div>Invaild Credentials</div>}
        {this.state.showSuccessMessage && <div>Login Successfu</div>}
        {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

// function ShowInvaildCredentials(props) {
//   if (props.hasLoginFailed) {
//     return <div>Invaild Credentials</div>;
//   }
//   return null;
// }

// function ShowLoginSuccessMessage(props) {
//   if (props.showSuccessMessage) {
//     return <div>Login Successfu</div>;
//   }
//   return null;
// }

export default TodoApp;
