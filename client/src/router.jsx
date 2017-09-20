import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import Main from './Main';
import Header from './Master/Header';
import Task from './Task/index';
import About from './About/index';
import TaskForm from './Task/Form/index';


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="tasks" component={Task} />
      <Route path="about" component={About} />
      <Route path="tasks/new" component={TaskForm} />
      <Route path="tasks/:id/edit" component={TaskForm} />
    </Route>
  </Router>
);

export default router;
