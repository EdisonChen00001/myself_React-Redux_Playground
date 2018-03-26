import React, {Component} from 'react';

class WaterTemperateureInput extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
        const scaleNames = {c: 'Celsius', f: 'Fahrenheit'}
    }

    handleChange(event){
        this.props.onTemperatureChange(event.target.value);
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset className='fieldsetStyles'>
                <legend>please enter one of temperature: </legend>
                <input 
                    value={temperature}
                    onChange = {this.handleChange} 
                />
            </fieldset>
        );
    }}

export default WaterTemperateureInput;