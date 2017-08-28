'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Route, IndexRedirect, hashHistory, BrowserRouter as Router } from 'react-router-dom';

import store from './store'
// import Root from './components/Root'

import Home from './components/Home'
import Students from './components/Students'
import AddPerson from './components/AddPerson'
import Campus from './components/Campus'


render (
  <Provider store={store}>

    <Router history={hashHistory} >



       <Route path='/students' component={Students} />
        {/*<Route path='/newstudent' component={AddPerson} />*/}
        {/*<Route path='/home' component={Home} />*/}
      
       

    
    </Router>
  </Provider>
,
  document.getElementById('main')
)


  // <Provider store={store}>
  //   {/*<Root/>*/}
  //  {/*<Home />*/}
 

  // </Provider>

      
        //       <Route path='/home' component={Home} />
        // <Route path='/students' component={Students} />
        // <Route path='/newstudent' component={AddPerson} />
        // <Route path='/campus' component={Campus} />
        // <IndexRedirect to='/home' />