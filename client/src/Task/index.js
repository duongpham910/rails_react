import React from "react"
import ListTask from "./ListTask"

export default class Task extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div>
        <ListTask/>
      </div>
    );
  }
}
