import React , {Component} from 'react';
import {render} from 'react-dom';

class Demo3 extends Component{

    constructor(props){
        super(props)
        this.state = {text: false} 
    }

    ButtonClicked = () => {
        this.setState({text: !this.state.text})
    }

    render(){
        const text = this.state.text ? 'not click': 'is clicked';

        return (
            <div>
                <button onClick = {this.ButtonClicked}>{text}</button>
            </div>
        );
    }
}


export default Demo3;