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
                    update parent component
                </button>
            </div>
        )
    }
}