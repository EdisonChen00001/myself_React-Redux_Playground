import React, {Component} from 'react';

export default class AutoFocusInput extends Component{
    
    componentDidMount(){
        this.input.focus()
    }

    render(){
        return(
            <div>
                <p> auto focus </p>
                <input ref = {(input) => this.input =input}/>
                <p>sometime we still need to use DOM， React.js give us one of ‘ref’ </p>
                <p> ref could help you get the DOM node, so you could give one of JSX element add ref property</p>
                <p>ref 可以帮助我们获取已经挂载的元素的DOM节点， 可以给jsx元素加上ref属性</p>
            </div>
        )
    }
}