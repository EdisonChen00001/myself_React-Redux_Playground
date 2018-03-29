import React, {Component} from 'react' ; 

class Demo6 extends Component{

    handleClick(i){
        console.log('You clicked' + this.props.items[i]);
    }
    render(){
        return (
        <div>
            {this.props.items.map((item,i) => {
                return (
                    <div onClick={this.handleClick.bind(this, i)} key ={i}>
                        {item}
                    </div>
                );
            })}
        </div>
        );
    }
} 

export default Demo6;