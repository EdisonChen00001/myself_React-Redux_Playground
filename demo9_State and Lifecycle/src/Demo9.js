import React, {Component} from 'react' ; 
import {render} from 'react-dom';
import { FormattedDate } from './FormattedDate';
import Exercise from './Exercise';

class Demo9 extends Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }


    //lifecyle hooks 
    //当组件输出到DOM后会执行 componentDidMount()钩子
    //the Clock is rendered to the DOM fro the first time , this is called 'mounting' in React
    componentDidMount(){

        this.timerID = setInterval(
            ()=> this.tick(),1000
        );//生成定时器
    }  

    //lifecycle hooks
    //whenever the DOM produced the Clock is removed , this is called 'unmounting' in React
    //当生成的这个DOM被删除的时候， 就要卸载它。 我们用componentWillUnmount() 
    componentWillUnmount(){
        clearInterval(this.timerID); // 移除定时器
    }


    tick(){
        this.setState({
            date:new Date()
        });
    }

    render(){
        return (<div>Hello {this.props.name}
            <FormattedDate date={this.state.date} />
            <Exercise />
        </div>);
    }
} 

export default Demo9;