import React, {Component} from 'react';
import axios from 'axios'

export default class AddCampus extends Component{

    constructor(){
        super();
        this.state = {
            campus: [],
            inputVal: ''
        }

        this.handleAddCampus = this.handleAddCampus.bind(this);
        this.handleType = this.handleType.bind(this);
    }

    componentDidMount(){
        axios.get('/api/campus')
        .then(res => res.data)
        .then(campus => {
            this.setState({campus})
        })
    }

    handleAddCampus(e){
        e.preventDefault();

        // this.state.campus.forEach(el => console.log(el.name.toLowerCase()))
        console.log(this.state.inputVal.toLowerCase())
        // el.name.toLowerCase() === this.state.inputVal.toLowerCase()? alert('Campus already exist!'):null

        axios.post('/api/campus', {name: this.state.inputVal, url: randUrl()})

    }

    handleType(e){
        // console.log(e.target.value)
        this.setState({inputVal: e.target.value})
    }


    render(){
        console.log(this.state.campus)
        
        return(
            <div> 
                <form onSubmit={this.handleAddCampus}> 
                    <fieldset>
                        <legend>Add Campus</legend>
                        <input
                            className="form-control"
                            type="text" 
                            onChange={this.handleType}
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
