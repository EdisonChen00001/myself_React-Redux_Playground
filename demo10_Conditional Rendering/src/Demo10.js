import React, {Component} from 'react' ; 
import {render} from 'react-dom';

class Demo10 extends Component{
    render(){
        return (<div>Hello {this.props.name}</div>);
    }
} 

export default Demo10;