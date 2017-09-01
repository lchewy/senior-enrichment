import React, {Component} from 'react';
import store from '../store';
import {inputValue, postCampus, clickOff} from '../reducers/index';

export default class AddCampus extends Component{

    constructor(){
        super();
        this.state = store.getState();

        this.handleAddCampus = this.handleAddCampus.bind(this);
        this.handleType = this.handleType.bind(this);
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(() => this.setState(store.getState())); 
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    handleType(event){
        store.dispatch(inputValue(event.target.value));
    }

    handleAddCampus(e){
    
        e.preventDefault();
        store.dispatch(postCampus(this.state.inputValue, randUrl()))
        store.dispatch(inputValue(''))
        store.dispatch(clickOff())

    }


    render(){
        
        return(
            <div> 
                <form onSubmit={this.handleAddCampus}> 
                    <fieldset>
                        <legend>Add Campus</legend>
                        <input
                            className="form-control"
                            type="text" 
                            onChange={this.handleType}
                            value={this.state.inputValue}
                            required 
                        />

                         <br/>
                         <br/>
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                            <button type="submit" className="btn btn-success">
                                Create Campus
                            </button>
                            </div>
                        </div>
                    </fieldset>
                
                </form>
               
                
            </div>
        )
    }
}


const randUrl = ()=>{
    let url = ["http://4.bp.blogspot.com/-8Bl5X0bXY_I/TlsGUp4f63I/AAAAAAAACI4/JSC9aei00ns/s1600/moon.jpg",
"http://serc.carleton.edu/images/earthlabs/globe_from_terra.jpg",
 "http://space-facts.com/wp-content/uploads/mars.jpg",
 "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/PIA20016-SaturnMoon-Titan-20151113.jpg/220px-PIA20016-SaturnMoon-Titan-20151113.jpg"]

 return url[Math.floor(Math.random()*4)]
}