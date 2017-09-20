import {browserHistory} from 'react-router';

export default class Helper extends React.Component{
  constructor(props) {
    super(props);
    global.Helper = this;
    this.history = browserHistory;
  }

  transitionTo(pathName, state = {}) {
    let location = {pathname: pathName};
    location['state'] = state;
    browserHistory.push(location);
  }

  getCurrentPath() {
    return browserHistory.getCurrentLocation().pathname;
  }

  render() {
    return (
      <div></div>
    );
  }
}

