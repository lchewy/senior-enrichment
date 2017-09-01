import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import store from '../store';
import {fetchCampuses, fetchStudentName, fetchStudentCampusId, fetchCampusName} from '../reducers/index'

export default class SingleStudent extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        // {
        //     selectedCampus: '',
        //     selectedCampusId: 0,
        //     campuses: [],
        //     name: '',
        //     campusId: '',
        //     campus: ''
        // }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount(){
         this.unsubscribe = store.subscribe(() => this.setState(store.getState()));

         store.dispatch(fetchCampuses());
         store.dispatch(fetchStudentCampusId(this.props.match.params.id));
         store.dispatch(fetchStudentName(this.props.match.params.id));
         store.dispatch(fetchCampusName(this.state.campus))
         
        // axios.get('/api/campus')
        // .then(res => res.data)
        // .then(campuses => this.setState({campuses}))
        // .catch(console.error)

        // axios.get(`/api/students/${+this.props.match.params.id}`)
        // .then(res => res.data)
        // .then(student => this.setState({name: student.name, campusId: +student.campusId}))
        // .then(()=>{
        //      axios.get(`/api/campus/${this.state.campusId}`)
        //     .then(res => res.data)
        //     .then(campus => this.setState({campus: campus.name}))
        // })
        // .catch(console.error);
    }

     componentWillUnmount () {
        this.unsubscribe();
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
        console.log('jello', this.state)
        let mainCampus = Object.assign({},this.state.campuses.filter(campus=>campus.id === this.state.campusId)[0]);
        console.log(mainCampus.name)
        return (
            <div>
                <h1>{this.state.studentName} Profile</h1>
                <br/>
                <br/>
                <h3>Campus:<Link to={`/campus/${this.state.campusId}`}> {mainCampus.name}</Link></h3>
                
                <form onSubmit={this.handleEdit}>

                    <select className="form-control" onChange={this.handleSelect} required>
                        <option></option>
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

// this.state.campus