import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn
} from "material-ui/Table"
import React from "react"
import RaisedButton from 'material-ui/RaisedButton';

export default class Task extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tasks: nextProps.tasks
    });
  }

  render() {
    let tasks = this.state.tasks || []
    let tableHeaderLabels = t("faq_statistic.list.headers");
    let tableItems = tasks.map((task, idx) => {
      return (
        <TableRow key={idx}>
          <TableRowColumn>{task.status}</TableRowColumn>
          <TableRowColumn>{task.title}</TableRowColumn>
          <TableRowColumn>{task.description}</TableRowColumn>
          <TableRowColumn>{task.due_date}</TableRowColumn>
          <TableRowColumn>{task.estimate_time}</TableRowColumn>
          <TableRowColumn>
            <div className={"badge-custom " + task.priority.toLowerCase()}>{task.priority}</div>
          </TableRowColumn>

          <TableRowColumn>
            <RaisedButton
              label = "Update"
              primary={true}
              onClick={() => this.props.onUpdateTask(task)}/>
          </TableRowColumn>
        </TableRow>
      );
    })
    return (
        <Table className="tblTask">
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableRowColumn>{"Status"}</TableRowColumn>
              <TableHeaderColumn>{"Task name"}</TableHeaderColumn>
              <TableHeaderColumn>{"Description"}</TableHeaderColumn>
              <TableHeaderColumn>{"Due date"}</TableHeaderColumn>
              <TableHeaderColumn>{"Estimate time"}</TableHeaderColumn>
              <TableHeaderColumn>{"Priority"}</TableHeaderColumn>
              <TableHeaderColumn>{"Action"}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            stripedRows={true}
          >
            {tableItems}
          </TableBody>
        </Table>
    );
  }
}
