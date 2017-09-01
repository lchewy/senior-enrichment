import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
import {fetchStudents, deleteStudent, handleClick} from '../reducers/index';
import AddPerson from './AddPerson';


export default class Students extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.click = this.click.bind(this);
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
        store.dispatch(fetchStudents())
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    click(){
        store.dispatch(handleClick())
    }

    handleDelete(id, event){
        store.dispatch(deleteStudent(id));   
    }

    render(){
    return(
      <div>
        {/*<Link to="/newstudent"><button style={{float: "right"}} type="button" className="btn btn-outline-secondary"><h4>Add Student</h4></button></Link>*/}
    {/*<button onClick={this.click} style={{float: "right"}} type="button" className="btn btn-outline-secondary"><h4>Add Student</h4></button>*/}
         <AddPerson />
        <br/>
        <br/>
        <table className="table">
            <tbody>
                <tr>
                    <th>STUDENT ID</th>
                    <th>NAME</th>
                    <th>CAMPUS</th>
                </tr>
                
                    {
                        this.state.students ? this.state.students.map((student, ind) =>{
            
                            return (
                                
                                <tr key={student.id}>
                                    <td >{student.id}</td>
                                    <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                                    <td>{student.campus.name}</td>
                                    <td ><button onClick={this.handleDelete.bind(this, student.id)} type="button" className="btn btn-danger">X</button></td>
                                </tr>
                                
                            )
                        }) : <div>no students</div>
                    }

                
            </tbody>
        </table>
    
       
      
      </div>
    )
    }
    
}


