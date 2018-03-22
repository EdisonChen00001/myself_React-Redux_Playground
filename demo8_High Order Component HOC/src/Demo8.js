import React, {Component} from 'react' ; 
import {render} from 'react-dom';

class Demo8 extends Component{
    render(){
        return (
        <div>Hello {this.props.name}
        <p> hoc is componet factory</p>
        <p>hocFactory :: W: React.compoent = > E: React.Compoent</p>
        <p>W is wrapped Component 被包裹的</p>
        <p>E is Enhanced Component 指返回类型为新的hoc</p>

        <p>---> wrapped is two ways different method <i>one is 1. </i><b>props proxy : HOC 对传给wrapped compoennt W 的props进行操作</b></p>
        
        <p> <i>two is 2. </i><b>Inheritenance Inversion : HOC 继承 wrapped Component inversion </b></p>
        </div>);
    }
} 

export default Demo8;