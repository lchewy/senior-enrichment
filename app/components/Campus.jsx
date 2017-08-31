import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store from '../store';
import {fetchStudents, getCampusName} from '../reducers/index';


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
        store.dispatch(getCampusName(+this.props.match.params.id));


    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render(){
        const studentCampus = this.state.students.filter(student => student.campusId === +this.props.match.params.id);
        // console.log( studentCampus.map(x=>x.campus.name)[0])
        console.log(studentCampus)
        return(
            <div>
                <h1>Welcome to the {this.state.campusName} Campus</h1>
                
                <ul>
                    {
                        this.state.students.map(student => {
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
