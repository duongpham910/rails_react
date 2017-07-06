import Header from "./Master/Header"
import Task from "./Task/index"
import theme from "./theme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Main extends React.Component{

  renderMainContent() {
    return (
      <div className="main-layout">
        <Header/>
        <div className="main-area-w195">
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  render(){

    return(
      <MuiThemeProvider muiTheme={theme}>
        <div>
          {this.renderMainContent()}
        </div>
      </MuiThemeProvider>
    );
  }
}
