import React, {Component} from 'react' ; 
import {render} from 'react-dom';


class Demo9 extends Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    render(){
        return (<div>Hello {this.props.name}

            <h3>The clock time is : {this.state.date.toLocaleTimeString()}</h3>
        
        </div>);
    }
} 

export default Demo9;