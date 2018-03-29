import React, {Component} from 'react';
import ChildComponet from './ChildComponent';

export default class FatherComponent extends Component{
    componentDidMount(){
        console.log('this is in Father Component this.refs["child-h1"] is = '+this.refs['child-h1']);
    }
    render(){
        return (
            <div>
                <ChildComponet/>
            </div>
        );
    }
    
}