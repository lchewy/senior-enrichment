import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import store from '../store';
import {fetchCampuses, fetchSingleStudent, fetchSingleCampus} from '../reducers/index';

export default class SingleStudent extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = store.getState();
  
    //     // this.handleEdit = this.handleEdit.bind(this);
    //     // this.handleSelect = this.handleSelect.bind(this);
    // }

    // componentDidMount(){
    //     this.unsubscribe = store.subscribe(() => this.setState(store.getState()));

    //     store.dispatch(fetchCampuses()) // DO I NEED THIS??

    //     // store.dispatch(fetchSingleStudent(this.props.match.params.id))

    //     store.dispatch(fetchSingleCampus())

 


    // }

    // componentWillUnmount() {
    //     this.unsubscribe();
    // }

    // handleSelect(e){
    //     let selectId = this.state.campuses.filter(campus => campus.name === e.target.value)[0];
    //     this.setState({selectedCampusId: selectId.id})
    //     this.setState({selectedCampus: e.target.value })
    //     console.log(e.target.value)
        
    // }

    // handleEdit(e){
    //     e.preventDefault();
    //     axios.put(`/api/students/${+this.props.match.params.id}`, {id:this.state.selectedCampusId})
    //     this.setState({campus: this.state.selectedCampus})
    //     this.setState({campusId: this.state.selectedCampusId})
    // }

    render(){
        // console.log("My state", this.state.student)
        // const studentId = this.props.match.params.id;
        //  console.log(this.state.campuses.filter(x => x))
        // const student = Object.assign({},this.state.student.student);
        // console.log('my object', student)
        // console.log('STATE OF SING', this.state.student[0], )

        

        return (
            <div>
                <h1>  Profile</h1>
                <br/>
                <br/>
                <h3>Campus:<Link to={`/campus/${this.state.campusId}`}> {this.state.campus}</Link></h3>
                
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

// {this.state.student[0] ? this.state.student[0].name : '*******************'}

       // axios.get(`/api/students/${+this.props.match.params.id}`)
        // .then(res => res.data)
        // .then(student => this.setState({name: student.name, campusId: +student.campusId}))
        // .then(()=>{
        //      axios.get(`/api/campus/${this.state.campusId}`)
        //     .then(res => res.data)
        //     .then(campus => this.setState({campus: campus.name}))
        // })
        // .catch(console.error);

        // store.dispatch(fetchSingleStudent(this.props.match.params.id))
        // console.log('easdfadf',this.state.campusName)
        // console.log('wheres this', this.props.match.params.id)
        // const student = Object.assign({},this.state.student.student)
        // store.dispatch(fetchSingleCampus(student.campusId))

              // {
        //     selectedCampus: '',
        //     selectedCampusId: 0,
        //     campuses: [],
        //     name: '',
        //     campusId: '',
        //     campus: ''
        // }
        // store.getState();

                // axios.get('/api/campus')
        // .then(res => res.data)
        // .then(campuses => this.setState({campuses}))
        // .catch(console.error)