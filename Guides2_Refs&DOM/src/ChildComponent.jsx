import React, {Component} from 'react';

export default class ChildComponent extends Component{
    componentDidMount(){
        console.log('this is in Child Component this.refs["child-h1"] is = '+ this.refs['child-h1']);
    }
    render(){
        return (
            <div>
                <h1 ref='child-h1'>this is child component</h1>
            </div>
        );
    }
    
}