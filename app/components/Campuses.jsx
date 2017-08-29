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

        this.handleAddCampus = this.handleAddCampus.bind(this);
        this.handleType = this.handleType.bind(this);
    }

    componentDidMount(){
        axios.get('/api/campus')
        .then(res => res.data)
        .then(campus => {
            this.setState({campus})
        })
    }

    handleAddCampus(){
        axios.post()

    }

    handleType(e){
        console.log(e.target.value)
        this.setState({inputVal: e.target.value})
    }


    render(){
        
        return(
            <div> 

                <div className="container-fluid">
                   
                    <div className="row"> 
                        <ul id="campus-grid" className="list-unstyled">
                            {
                                this.state.campus.map(campus => {
                                    return (
                                        <li key={campus.id} className="col-xs-6">
                                            <Link to={`/campus/${campus.id}`}> <div style={{backgroundImage: `url(${campus.url})`, height: "200px", backgroundSize: "cover"}}></div></Link>
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


//  <button onClick={this.handleAddCampus}>Add Campus</button>

                // <form> 
                //     <fieldset>
                //         Add Campus
                //         <input
                //             className="form-control"
                //             type="text" 
                //             onChange={this.handleType}
                        
                //         />
                //     </fieldset>
                
                // </form>
               
                
                // <br/>
                // <br/>
                