import Header from "./Master/Header"
import Task from "./Task/index"
import theme from "./theme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Main extends React.Component{
  render(){

    return(
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <Header/>
          <h1>Todo list</h1>
          <Task/>
        </div>
      </MuiThemeProvider>
    );
  }
}
