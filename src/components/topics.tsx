import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    NavLink
  } from "react-router-dom";
import Topic from './topic';
import './topics.css';

const Topics = () => {
    let match = useRouteMatch();

    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <NavLink to={`${match.url}/components`} className="nav-link">Components</NavLink>
          </li>
          <li>
              
            <Link to={{pathname:`${match.url}/props-v-state`}}>
              Props v. State
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
}

export default Topics;
