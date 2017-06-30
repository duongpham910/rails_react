import React from "react"
import {browserHistory, Link} from 'react-router';

export default class Header extends React.Component{
  constructor(props) {
    super(props);
  }

  transitionTo(pathName, state = {}) {
    let location = {pathname: pathName};
    location['state'] = state;
    browserHistory.push(location);
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">WebSiteName</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><Link to={"task"}>task</Link></li>
            <li><Link to={"about"}>about</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
