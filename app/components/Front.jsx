import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home'
import Students from './Students'
import AddPerson from './AddPerson'


export default class Front extends Component {

  render () {
    return (
      <Router>
        <div id="front" className="container-fluid">
          <Navbar />
          <div className="col-xs-10">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route path="/students" component={Students} />
                <Route path="/newstudent" component={AddPerson} />
              
            </Switch>
          </div>
        </div>
    </Router>
    );
  }
}

// <Route exact path="/albums" component={StatefulAlbums} />
//               <Route path="/albums/:albumId" component={SingleAlbum} />
//               <Route exact path="/artists" component={AllArtists} />
//               <Route path="/artists/:artistId" component={SingleArtist} />
//               <Route component={StatefulAlbums} />