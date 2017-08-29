import React, {Component} from 'react';
import axios from 'axios';

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
        .catch(console.error);

        axios.get(`/api/campus/${this.state.campusId}`)
        .then(res => res.data)
        .then(campus => this.setState({campus}))
    }

    render(){
        console.log('single ', this.state.campusId)
        return (
            <div>
                <h1>{this.state.name} Profile</h1>
                
            </div>
        )
    }
}