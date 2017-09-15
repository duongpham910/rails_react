import React from "react"
import TaskDetail from "./TaskDetail"
import RaisedButton from 'material-ui/RaisedButton';

export default class Task extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      task: {},
    };
  }

  handleSubmitTask = () => {
    API.Task.createTask((status, responseData) => {
      console.log(status+ " " + responseData);
    }, this.state.task);
  }

  handleChangeTextInput = (fieldName, value) => {
    let task = update(this.state.task, {[fieldName]: {$set: value}});
    this.setState({task: task});
  }

  handleChangeDateInputField = (fieldName, date) => {
    let task = update(this.state.task, {[fieldName]: {$set: date}});
    this.setState({task: task});
  }

  getObjectFromId(items, id) {
    return items.find(item => item.id === id);
  }

  handleChangeSelectField = (fieldName, items, selectedId) => {

    let obj = this.getObjectFromId(items, selectedId);
    let task = update(this.state.task,
      {
        $merge: {
          [fieldName]: obj ? obj.id : null,
        }
      }
    );
    this.setState({task: task});
  };

  render() {
    return(
      <div>
        <div className="row task-container">
          <TaskDetail
            taskDetail={this.state.task}
            errors={this.state.errors}
            onChangeTextInput={this.handleChangeTextInput}
            onChangeSelectField={this.handleChangeSelectField}
            onChangeDateField={this.handleChangeDateInputField}
          />
        </div>
        <div className="btn-ok pull-right">
          <RaisedButton
            label="OK"
            backgroundColor="rgb(137, 195, 235)"
            onClick={this.handleSubmitTask}
          />
        </div>
      </div>
    );
  }
}
