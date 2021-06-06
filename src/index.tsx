import React from 'react';
import ReactDOM from 'react-dom';
import { Home, ContactMe, Projects} from './components';
import './styles.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home title={'Kutah Sillah'}/>
        </Route>
        <Route path='/contactkutah'>
          <ContactMe title={'Contact Kutah'}/>
        </Route>
        <Route path='/projects'>
          <Projects title={'Projects'}/>
        </Route>
      </Switch>
     </Router>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
