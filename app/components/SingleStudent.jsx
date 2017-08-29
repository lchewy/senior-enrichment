import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class SingleStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            campusId: '',
            campus: ''
        }
    }

    componentDidMount(){
        axios.get(`/api/students/${+this.props.match.params.id}`)
        .then(res => res.data)
        .then(student => this.setState({name: student.name, campusId: +student.campusId}))
        .then(()=>{
             axios.get(`/api/campus/${this.state.campusId}`)
            .then(res => res.data)
            .then(campus => this.setState({campus: campus.name}))
        })
        .catch(console.error);

       
    }

    render(){
        return (
            <div>
                <h1>{this.state.name} Profile</h1>
                <br/>
                <br/>
                <h3><Link to={`/campus/${+this.state.campusId}`}>{this.state.campus}</Link></h3>
                
            </div>
        )
    }
}