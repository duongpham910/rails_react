import {
  Table, TableBody, TableHeader, TableHeaderColumn,
  TableRow, TableRowColumn
} from "material-ui/Table"
import React from "react"

export default class Task extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let tasks = this.state.tasks || []
    let tableHeaderLabels = t("faq_statistic.list.headers");

    let tableItems = tasks.map(function(task, idx) {
      return (
        <TableRow key={idx}>
          <TableRowColumn>{task.title}</TableRowColumn>
          <TableRowColumn>{task.description}</TableRowColumn>
          <TableRowColumn>{task.due_date}</TableRowColumn>
          <TableRowColumn>{task.completed}</TableRowColumn>
        </TableRow>
      );
    })
    return (
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>{"Task name"}</TableHeaderColumn>
              <TableHeaderColumn>{"Description"}</TableHeaderColumn>
              <TableHeaderColumn>{"Due date"}</TableHeaderColumn>
              <TableRowColumn>{"Completed"}</TableRowColumn>
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
