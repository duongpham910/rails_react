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
    this.loadTasks();
  }

  loadTasks = () => {
    API.Task.getListTask((status, responseData) => {
      if (!status) return;
      this.setState({
        tasks: responseData
      });
    });
  }

  handleNewTask = () => {
    Helper.transitionTo('/tasks/new')
  }

  handleUpdateTask = (item) => {
    Helper.transitionTo(`/tasks/${item.id}/edit`);
  }

  render() {
    let stateObject = this.state.tasks
    return(
      <div>
        <RaisedButton
          label="Create new task"
          primary={true}
          onClick={this.handleNewTask}
        />
        <div>
          <ListTask
            tasks={stateObject}
            onUpdateTask={this.handleUpdateTask} />
        </div>
      </div>
    );
  }
}
