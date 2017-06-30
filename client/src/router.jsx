import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import Main from './Main';
import Header from './Master/Header';
import Task from './Task/index';
import About from './About/index';


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="/task" component={Task} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

export default router;
