import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store from '../store';
import {fetchStudents, getCampusName, fetchCampusName} from '../reducers/index';


export default class Campus extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        // {
        //     students: [],
        //     campusName: ''
        // }
    // this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
        // axios.get('/api/students')
        //  .then(res => res.data)
        //  .then(students =>{
        //     //  this.setState({students: students.filter(x => x.campusId === +this.props.match.params.id)})
        //     this.setState({students})
        //  })
        //  .catch(console.error)

        //  axios.get(`api/campus/${+this.props.match.params.id}`)
        //  .then(res => res.data)
        //  .then(campus =>{
        //      this.setState({campusName: campus.name})
        //  })

        store.dispatch(fetchStudents());
        // store.dispatch(fetchSingleCampus(+this.props.match.params.id));
        store.dispatch(fetchCampusName(+this.props.match.params.id));


    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render(){
        // const studentCampus = this.state.students.filter(student => student.campusId === +this.props.match.params.id);
        // console.log( studentCampus.map(x=>x.campus.name)[0])
        // console.log(studentCampus)
        // console.log("hello",  this.state.campus)
        // const name = this.state.campus.map(x => x)
        // console.log('asdfa', this.state)
        const filterStudents = this.state.students.filter(student => student.campusId === +this.props.match.params.id)

        return(
            <div>
                <h1>Welcome to the {this.state.campusName} Campus</h1>
                <br/>
                <br/>
                <h2>Our Students</h2>
                <ul>
                    {
                        filterStudents.map(student => {

                            return(
                                <li key={student.id}><h3><Link to={`/students/${student.id}`}>{student.name}</Link></h3></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
// this.state.campus[0].name ? this.state.campus[0].name : null