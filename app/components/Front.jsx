import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Campuses from './Campuses';
import Students from './Students';
import AddPerson from './AddPerson';
import AddCampus from './AddCampus';
import Campus from './Campus';
import Home from './Home';
import SingleStudent from './SingleStudent';


export default class Front extends Component {

  render () {
    return (
      <Router>
        <div id="front" className="container-fluid">
          <Navbar />
          <div className="col-xs-10">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/campuses" component={Campuses} />
                <Route exact path="/students" component={Students} />
                <Route path="/newstudent" component={AddPerson} />
                <Route exact path="/addcampus" component={AddCampus} />
                <Route exact path="/campus/:id" component={Campus} />
              
              
            </Switch>
          </div>
        </div>
    </Router>
    );
  }
}


  // <Route exact path="/students/:id" component={SingleStudent} />