import React from "react"
import TextField from 'material-ui/TextField';
import DateField from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Task extends React.Component{
  constructor(props) {
    super(props);
    this.priority = [
      {id: 'Low', name: 'Low'},
      {id: 'Medium', name: 'Medium'},
      {id: 'High', name: 'High'},
      {id: 'Urgent', name: 'Urgent'}
    ]
  }

  renderTextInput(fieldName, options) {
    let error = this.props.errors[fieldName];
    let fieldValue = "";

    if (typeof(this.props.taskDetail[fieldName]) !== "undefined" && this.props.taskDetail[fieldName] !== null) {
      fieldValue = this.props.taskDetail[fieldName];
    }
    return (
      <div className="form-group">
        <TextField
          value={fieldValue}
          onChange={(event, value) => this.props.onChangeTextInput(fieldName, value)}
          name="TextField"
          errorText={error ? error[0] : null}
          fullWidth={true}
          {...options}
        />
      </div>
    );
  }

  renderSelectField(fieldName, value, items, options) {
    let error = this.props.errors[fieldName];
    return (
      <SelectField
        value={value}
        onChange={(event, key, payload) => this.props.onChangeSelectField(fieldName, this.priority, payload)}
        errorText={error ? error[0] : null}
        fullWidth={true}
        labelStyle={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          top: "-5px",
          height: "36px"
        }}
        {...options}
      >
        {items}
      </SelectField>
    );
  }

  renderDateField(fieldName, options) {
    let error = this.props.errors[fieldName];
    return (
      <div className="form-group">
        <DateField
          value={this.props.taskDetail[fieldName]}
          onChange={(event, date) => this.props.onChangeDateField(fieldName, date)}
          errorText={error ? error[0] : null}
          name="date-picker"
          autoOk={true}
          fullWidth={true}
          {...options}
        />
      </div>
    );
  }


  render() {
    let task = this.props.taskDetail;
    let menuItems = this.priority.map((item) => {
      return <MenuItem key={item.id} value={item.id}
        primaryText={item.name}/>
    });
    return(
      <div className="form-task">
        <div className="row sub-field">
          <div className="col-xs-6">
            <div className="form-group">
              <label className="small-label">{"Task name"}</label>
              {this.renderTextInput('title')}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="form-group">
              <label className="small-label">{"Estimate time"}</label>
              {this.renderTextInput('estimate_time')}
            </div>
          </div>
        </div>

        <div className="row sub-field">
          <div className="col-xs-6">
            <div className="form-group">
              <label className="small-label">{"Priority"}</label>
              {this.renderSelectField('priority', task.priority, menuItems)}
            </div>
          </div>
          <div className="col-xs-6">
            <div className="form-group">
              <label className="small-label">{"Due date"}</label>
              {this.renderDateField('due_date')}
            </div>
          </div>
        </div>

        <div className="row sub-field">
          <div className="col-xs-12">
            <div className="form-group">
              <label className="small-label">{"Description"}</label>
              {this.renderTextInput('description', {multiLine: true, rows: 1,
                rowsMax: 4, fullWidth: true})}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
