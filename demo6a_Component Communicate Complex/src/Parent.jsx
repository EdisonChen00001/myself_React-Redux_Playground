import React, {Component} from 'react';

export default class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    getChildContext(){//设置传递给子组件的属性， 可以覆盖，可以新增
        return{
            refresh:this.refresh(),
            text: this.state.text,
        }
    }

    refresh(){
        return(event)=>{
            this.setState({
                text: 'brother communicate is success'
            })
        }
    }

    render(){
        return(
            <div>
                <h2>brother communcation</h2>
                <Brother1 />
                <Brother2 text = {this.state.text} />
            </div>
        )
    }
}

