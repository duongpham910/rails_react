import React from "react"
import ListTask from "./ListTask"
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export default class Task extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tasks: {},
    };
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks = () => {
    API.Task.getListTask((status, responseData) => {
      if (!status) return;
      this.setState({
        tasks: responseData
      });
    });
  }

  render() {
    let stateObject = this.state.tasks
    return(
      <div>
        <RaisedButton label="Primary" primary={true}/>
        <div>
          <ListTask tasks={stateObject} />
        </div>
      </div>
    );
  }
}
