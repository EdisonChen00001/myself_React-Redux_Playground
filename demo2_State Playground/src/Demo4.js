import React , {Component} from 'react';
import {render} from 'react-dom';

class Demo4 extends Component{
    constructor(props){
        super(props);

        this.state = { text:true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({text: ! this.state.text});
    }



    render(){
        const words = this.state.text ? 'not clicked yet': 'yes be clicked';

        return(
        <div>
            <p onClick={this.handleClick}>{words}</p>
        </div>);
    }
}

export default Demo4;