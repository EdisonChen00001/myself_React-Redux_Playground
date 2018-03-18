import React , {Component} from 'react';
import {render} from 'react-dom';

class Demo4 extends Component{
    constructor(props){
        super(props)
        this.state = { counter:0,text:'not do yet!' }
    }


    addClick(){
        this.setState({counter:this.state.counter+1, text:'add action'});
    }
    
    minusClick(){
        this.setState({counter:this.state.counter-1 , text:'minus action'});
    }
    
    time2Click(){
        this.setState({counter:this.state.counter*2, text:'time * 2 action'});
    }

    divid2Click(){
        this.setState({counter:this.state.counter/2, text:'divid / 2 action'});
    }



    render(){

        return (
            <div>
                You action is --- {this.state.text} this.;
            <div className='buttonList'>
                <button onClick ={this.addClick.bind(this)}>add 1</button>
                <button onClick ={this.minusClick.bind(this)}>minus 1</button>
                <button onClick ={this.time2Click.bind(this)}>time 2</button>
                <button onClick ={this.divid2Click.bind(this)}>divid 2</button>
            </div>
            {this.state.counter}
            </div>
        );
    }
}

export default Demo4;