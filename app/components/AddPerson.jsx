import React, {Component} from 'react';
import store from '../store';
import {fetchCampuses, inputValue, getCampusId, postStudent} from '../reducers/index';



export default class AddPerson extends Component{
    constructor(props){
        super(props);
        this.state= store.getState();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.setState(store.getState()));        
        store.dispatch(fetchCampuses());
        
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    handleType(event){
        store.dispatch(inputValue(event.target.value))
    }

    handleSelect(event){
        store.dispatch(getCampusId(event.target.value))
    }

    handleSubmit(e){
        e.preventDefault();
        store.dispatch(postStudent(this.state.inputValue, this.state.campusId));
        store.dispatch(inputValue(''))

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
                                    value={this.state.inputValue}
                                
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
                                        this.state.campuses.map(campus =>{
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

