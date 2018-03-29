import React, {Component} from 'react';

export default class Child extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                {this.props.text}
                <br />
                <button onClick={this.props.refreshParent}>
                    refresh parent component
                </button>
            </div>
        )
    }
}