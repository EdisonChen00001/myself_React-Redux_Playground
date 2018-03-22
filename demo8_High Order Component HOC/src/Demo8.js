import React, {Component} from 'react' ; 
import {render} from 'react-dom';

class Demo8 extends Component{
    render(){
        return (<div>Hello {this.props.name}</div>);
    }
} 

export default Demo8;