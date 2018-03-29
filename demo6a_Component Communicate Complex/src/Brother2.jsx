import React,{Component} from 'react';

class Brother2 extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    getChildContext(){
        return {
            refresh:this.refresh(),
            text: this.state.text,
        }
    }
    render(){
        return(
            <div>
                {this.context.text || 'brother component is not update'}
            </div>
        )
    }
}
