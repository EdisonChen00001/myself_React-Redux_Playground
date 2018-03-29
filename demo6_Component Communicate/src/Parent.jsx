import React,{Component} from 'react';
import Child from './Child';
import Brother1 from './Brother1';
import Brother2 from './Brother2';

export default class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    refreshChild(){
        return (event) => {this.setState({
            childText: 'parent Component communicate to child Component is success'
        })}
    }
    refreshParent(){
        this.setState({
            parentText:'Child component to parent component is success'
        })
    }
    refresh(){
        return (event) => {
            this.setState({
                text:'sbiling communicate is success',
            })
        }
    }

    render(){
        return(
            <div>
                <h1>parent and child component communicate </h1>
                <button onClick={this.refreshChild()}>
                    update child 
                </button>
                <Child
                    text={this.state.childText || 'child is not update'}
                    refreshParent = {this.refreshParent.bind(this)}
                />
                {this.state.parentText || 'parent is not update '}


                <h2>brother communicate each other</h2>
                <Brother1 refresh = {this.refresh()}/>
                <Brother2 text = {this.state.text}/>
            </div>
        )
    }
}