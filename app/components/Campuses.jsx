import React, {Component} from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import store from '../store';
import AddCampus from './AddCampus';
import {fetchCampuses, deleteCampus, handleClick} from '../reducers/index';

export default class Home extends Component{

    constructor(){
        super();
        this.state = store.getState();
        this.click = this.click.bind(this);
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
        store.dispatch(fetchCampuses())
    }

     componentWillUnmount () {
        this.unsubscribe();
    }

    handleDestroy(id){
        store.dispatch(deleteCampus(id))
    }

    click(){
        store.dispatch(handleClick());
    }

    render(){
        // console.log(this.state)
        return(
            <div> 

           {/* <Link to="/addcampus"><button style={{float: "right"}} type="button" className="btn btn-outline-secondary"><h4>Create Campus</h4></button></Link>*/}
            <button onClick={this.click} style={{float: "right"}} type="button" className="btn btn-outline-secondary"><h4>Create Campus</h4></button>
            <br/>
            <br/>
            <br/>

                <div className="container-fluid">
                   
                    <div className="row"> 
                        <ul id="campus-grid" className="list-unstyled">
                            {
                                this.state.campuses.map(campus => {
                                    return (
                                        <li key={campus.id} className="col-xs-6">
                                            <Link to={`/campus/${campus.id}`}> <div style={{backgroundImage: `url(${campus.url})`, height: "200px", backgroundSize: "cover"}}></div></Link>
                                           
                                           
                                            <button  onClick={this.handleDestroy.bind(this, campus.id)} type="button" className="btn btn-danger">DESTROY  <h6>{campus.name}</h6></button>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <br/>
                    <br/>
                    <div>
                    {
                        this.state.gotClick && <AddCampus />
                    }
                        
                    </div>
                    
                    <br/>
                    <br/>
                </div>
            </div>
        )
    }
}

