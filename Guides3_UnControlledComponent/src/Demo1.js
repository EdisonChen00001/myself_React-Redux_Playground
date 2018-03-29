import React, {Component} from 'react' ; 

class Demo1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: props.value
        }
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    
    render(){
        return (<div>
            Hello {this.props.name}
            <input value = {"hello world"}/><span>this is uncontrolled Component</span><br/>
            <input defaultValue = {"hello world"}/><span>this is value change to defaultValue</span>
            <br/>
            <input value = {this.state.value} onChange= {e => this.handleChange(e)}/>
        </div>);
    }
} 

export default Demo1;