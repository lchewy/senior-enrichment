import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class SingleStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedCampus: '',
            selectedCampusId: 0,
            campuses: [],
            name: '',
            campusId: '',
            campus: ''
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount(){
        axios.get('/api/campus')
        .then(res => res.data)
        .then(campuses => this.setState({campuses}))
        .catch(console.error)

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

    handleSelect(e){
        let selectId = this.state.campuses.filter(campus => campus.name === e.target.value)[0];
        this.setState({selectedCampusId: selectId.id})
        this.setState({selectedCampus: e.target.value })
        console.log(e.target.value)
        
    }

    handleEdit(e){
        e.preventDefault();
        axios.put(`/api/students/${+this.props.match.params.id}`, {id:this.state.selectedCampusId})
        this.setState({campus: this.state.selectedCampus})
        this.setState({campusId: this.state.selectedCampusId})
    }

    render(){
      
        return (
            <div>
                <h1>{this.state.name} Profile</h1>
                <br/>
                <br/>
                <h3><Link to={`/campus/${this.state.campusId}`}>{this.state.campus}</Link></h3>
                
                <form onSubmit={this.handleEdit}>

                    <select  onChange={this.handleSelect} required>
                    {
                        this.state.campuses.map(campus => {
                            return (
                                <option key={campus.id}>{campus.name}</option>
                            )
                        })
                    }
                    </select>
                    
                    <button type="submit">change campus</button>

                </form>

            </div>
        )
    }
}