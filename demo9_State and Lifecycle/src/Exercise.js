import React, {Component} from 'react';

class Exercise extends Component{
    
    num1 = 1;
    num2 = 5;


    constructor(props){
        super(props);
        this.state = {txtExercise :"this is start, wait 6 second"}
       }   

    
    componentDidMount(){
        this.changeTxt = setInterval(
            ()=> this.change(),3000
        );
        this.changeTxt = setInterval(
            ()=> this.change2(),6000
        );
    }

    componentWillUnmount(){
        clearInterval(this.changeTxt); // 移除定时器
    }

    change(){
        this.setState({txtExercise:'this is componentDidMount working'})
        this.num1 += 1
        console.log(this.num1);
    }

    change2(){
        this.num2 += 5
        console.log(this.num2);
        this.setState({txtExercise:'this is componentWillUnMount working'})
    }


    render(){
        return(
            <div>
                {this.state.txtExercise}
            </div>
        );
    }
}

export default Exercise;