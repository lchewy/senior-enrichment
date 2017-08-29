import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Students extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState({students}))
    }

    handleDelete(e){
        
        let studentId = e.target.getAttribute('data-key');
        
        axios.delete(`/api/students/${studentId}`)
        
        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState({students}))
         
        
    }

    render(){
        console.log(this.state.students)


    return(
      <div>
        <Link to="/newstudent"><button style={{float: "right"}} type="button" className="btn btn-outline-secondary"><h4>+</h4></button></Link>
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
                        this.state.students.map((student, ind) =>{
                            console.log(student)
                            return (
                                
                                <tr key={student.id}>
                                    <td >{student.id}</td>
                                    <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                                    <td>{student.campus.name}</td>
                                    <td ><button data-key={student.id} onClick={this.handleDelete} type="button" className="btn btn-danger">X</button></td>
                                </tr>
                                
                            )
                        })
                    }

                
            </tbody>
        </table>
    
    

      
      </div>
    )
    }
    
}


