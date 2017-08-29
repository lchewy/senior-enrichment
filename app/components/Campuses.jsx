import React, {Component} from 'react';
import Navbar from './Navbar';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            campus: [],
            inputVal: ''
        }

        this.handleType = this.handleType.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
    }

    componentDidMount(){
        axios.get('/api/campus')
        .then(res => res.data)
        .then(campus => {
            this.setState({campus})
        })
    }



    handleType(e){
        this.setState({inputVal: e.target.value})
    }

    handleDestroy(e){

        let campusId = e.target.getAttribute('data-key');

        axios.delete(`/api/campus/${campusId}`)
   
        axios.get('/api/campus')
            .then(res => res.data)
            .then(campus => {
                this.setState({campus})
        })
    }

    render(){
        console.log(this.state.campus)
        
        return(
            <div> 

            <Link to="/addcampus"><button style={{float: "right"}} type="button" className="btn btn-outline-secondary"><h4>+</h4></button></Link>
            <br/>
            <br/>
            <br/>

                <div className="container-fluid">
                   
                    <div className="row"> 
                        <ul id="campus-grid" className="list-unstyled">
                            {
                                this.state.campus.map(campus => {
                                    return (
                                        <li key={campus.id} className="col-xs-6">
                                            <Link to={`/campus/${campus.id}`}> <div style={{backgroundImage: `url(${campus.url})`, height: "200px", backgroundSize: "cover"}}></div></Link>
                                           
                                           
                                            <button data-key={campus.id} onClick={this.handleDestroy} type="button" className="btn btn-danger">DESTROY  <h6>{campus.name}</h6></button>

                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>


                </div>
            </div>
        )
    }
}

