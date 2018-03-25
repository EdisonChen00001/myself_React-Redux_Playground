import React, {Component} from 'react' ; 
import {render} from 'react-dom';

class Demo11 extends Component{
    render(){
        return (<div>Hello {this.props.name}</div>);
    }
} 

export default Demo11;