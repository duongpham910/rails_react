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

  componentDidMount() {
    if (this.props.params.id) {
      API.Task.loadTask((status, data) => {
        data.task.due_date = new Date(data.task.due_date);
        this.setState({
          task: data.task
        });
      }, this.props.params.id)
    }
  }

  handleSubmitTask = () => {
    if (this.props.params.id) {
      API.Task.updateTask(this.handleSendTaskCallBack, this.state.task);
    } else {
      API.Task.createTask(this.handleSendTaskCallBack, this.state.task);
    }
  }

  handleDeleteTask = () => {
    Helper.showConfirm("Delete Task", "Do you want to delete task", () =>{
      API.Task.deleteTask(this.handleSendTaskCallBack, this.props.params.id);
    })
  }

  handleSendTaskCallBack = (status, data) => {
    if (status == true) {
      Helper.transitionTo('/tasks')
    } else {
      this.setState({
        errors: data
      });
      Helper.showErrors("Something when wrong")
    }
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
          {this.props.params.id ?
            <RaisedButton
              label="Delete"
              className="btn-delete"
              backgroundColor="#ee5351"
              onClick={this.handleDeleteTask}
            /> : null
          }
        </div>
      </div>
    );
  }
}
