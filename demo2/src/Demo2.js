import React, {Component} from 'react';
import { render } from 'react-dom';

class LikeButton extends Component{

    constructor(props){
        super(props);
        this.state = {liked:false,
                      isClicked: false};
        this.buttonChange = this.buttonChange.bind(this);
    }

    handleClick(e){
        this.setState({liked: !this.state.liked});
    }

    buttonChange(){
        this.setState({
            isClicked : !this.state.isClicked
        });
    }

    render(){
        const text = this.state.liked ? 'like' :'dont liked';
        const words = this.state.isClicked ? 'Not Be Click Yet' : 'Yes , Clicked'
        return (
            <div>
            <p onClick = {this.handleClick.bind(this)}>
                You {text} this. click toggle
            </p>
            <button onClick = {this.buttonChange}>{words}</button>
            </div>
        );
    }
}

export default LikeButton;