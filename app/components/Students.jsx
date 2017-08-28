import React, {Component} from 'react';
import axios from 'axios';

export default class Students extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: [],
            campus: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState({students}))
        let campuses
        axios.get('/api/campus')
        .then(res => res.data)
        .then(campus => {
            // campuses = campus.map(x=>{x.id, x.name})
            this.setState({campus: campus})
        
    })
    }

    handleDelete(){
        
        console.log('being clicked')
    }

    render(){
        // console.log(this.state.campus)


    return(
      <div>
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CAMPUS</th>
                </tr>
                
                    {
                        this.state.students.map(student =>{
                            return (
                                <tr key={student.id}>
                                    <td >{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.campus.name}</td>
                                    <td><button onClick={this.handleDelete}>X</button></td>
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


