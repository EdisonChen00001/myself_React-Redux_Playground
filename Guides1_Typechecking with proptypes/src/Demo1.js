import React, {Component} from 'react' ; 
import PropTypes from 'prop-types';

class Demo1 extends Component{
    render(){
        return (<div>Hello {this.props.name}</div>);
    }
} 

Demo1.propTypes = {
    name: PropTypes.string
    /*optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,
    optionalNode: PropTypes.node,
    optionalEnum: PropTypes.oneOf(['News','Photos']),
    optionalUnion: PropTypes.oneOfType    ----   ,
                    shape({ '' : '' , '' : ''})
    */
}

export default Demo1;