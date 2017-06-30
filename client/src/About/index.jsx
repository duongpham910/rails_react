import React from "react"

export default class About extends React.Component{
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div>
        <h1>About me</h1>
        <p>Hi my name is Duong, and this is my pet app was implemented with
          reactjs(frontend) and ruby on rails(backend)</p>
      </div>
    );
  }
}
