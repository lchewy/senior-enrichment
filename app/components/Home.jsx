import React, {Component} from 'react';
import Navbar from './Navbar';
import axios from 'axios'

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            campus: []
        }
    }

    componentDidMount(){
        axios.get('/api/campus')
        .then(res => res.data)
        .then(campus => {
            this.setState({campus})
        })
    }


    render(){
        // console.log(this.state)
        return(
            <div> 
                

                <div className="container-fluid">
                    <div className="row"> 
                        <ul id="campus-grid" className="list-unstyled">
                            {
                                this.state.campus.map(campus => {
                                    return (
                                        <li key={campus.id} className="col-xs-6">
                                            <div style={{backgroundImage: `url(${campus.url})`, height: "200px", backgroundSize: "cover"}}> 
                                          
                                            </div>
                                            {campus.name} 
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
