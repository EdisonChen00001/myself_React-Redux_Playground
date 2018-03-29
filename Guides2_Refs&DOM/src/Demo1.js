import React, {Component} from 'react' ; 

class Demo1 extends Component{
    render(){
        return (<div>
            Hello {this.props.name}
        </div>); 
    }
} 

export default Demo1;