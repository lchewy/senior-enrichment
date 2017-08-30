import React, {Component} from 'react';
import axios from 'axios'

export default class AddPerson extends Component{
    constructor(props){
        super(props);
        this.state={
            campus: [],
            inputVal: '',
            selectedCampus: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount(){
        axios.get('/api/campus')
        .then(res => res.data)
        .then(campus => {
            this.setState({campus})
        })
    }

    handleType(e){
        this.setState({inputVal: e.target.value})
    }

    handleSelect(e){
        this.setState({selectedCampus: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        axios.post('/api/students', {name: this.state.inputVal, campus: this.state.selectedCampus})
        this.setState({inputVal: ''})

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <fieldset>
                    <legend>Add Student</legend>
                         <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input
                                    className="form-control"
                                    type="text" 
                                    onChange={this.handleType}
                                    value={this.state.inputVal}
                                
                                />
                            </div>
                         </div>
                         
                         <br/>
                         <br/>

                         <div className="form-group">
                            <label className="col-xs-2 control-label">Campus</label>
                             <div className="col-xs-10">
                                <select className="form-control" onChange={this.handleSelect} required>
                                    <option></option>
                                    {
                                        this.state.campus.map(campus =>{
                                            return <option key={campus.id} value={campus.id}>{campus.name}</option>
                                        })
                                    }
                            
                                </select>  
                            </div>                       
                         </div>
                         <br/>
                         <br/>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                            <button type="submit" className="btn btn-success">
                                Enter Student's Info
                            </button>
                            </div>
                        </div>
                
                </fieldset>

            </form>
       
        )
    }
}

