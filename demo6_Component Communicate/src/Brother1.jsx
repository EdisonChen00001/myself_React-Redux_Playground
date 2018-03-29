import React,{Component} from 'react';

export default class Brother1 extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div>
                <button onClick = {this.props.refresh}>
                    update brother componet
                </button>
            </div>
        )
    }
} 