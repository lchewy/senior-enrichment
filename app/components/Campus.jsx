import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Campus extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: [],
            campusName: ''
        }
    }

    componentDidMount(){
        axios.get('/api/students')
         .then(res => res.data)
         .then(students =>{
             this.setState({students: students.filter(x => x.campusId === +this.props.match.params.id)})
         })
         .catch(console.error)

         axios.get(`api/campus/${+this.props.match.params.id}`)
         .then(res => res.data)
         .then(campus =>{
             this.setState({campusName: campus.name})
         })
    }

    render(){
    
        return(
            <div>
                <h1>Welcome to the {this.state.campusName} Campus</h1>
                
                <ul>
                    {
                        this.state.students.map(student => {
                            return(
                                <li key={student.id}><Link to={`/students/${student.id}`}>{student.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
