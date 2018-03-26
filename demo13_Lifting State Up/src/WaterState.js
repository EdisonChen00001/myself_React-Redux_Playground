import React , {Component} from 'react';
import {CheckWaterState} from './CheckWaterState';
import WaterTemperateureInput from './WaterTemperateureInput';
import {toCelsius,tofahrenheit,tryConvert } from './ConvertCandF';

class WaterState extends Component{
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }
    
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }
    
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, tofahrenheit) : temperature;
        
        return (
            <div>
            <WaterTemperateureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange} />

            <WaterTemperateureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange} />

            <CheckWaterState
            celsius={parseFloat(celsius)} />

            </div>
            )
        }
    }

export default WaterState;