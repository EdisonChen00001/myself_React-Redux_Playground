import React, {Component} from 'react';
  
class TemperatureInput extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      //this.state = {temperature: ''};
    }
  
    handleChange(event) {
      //this.setState({temperature: e.target.value});
      this.props.onTemperatureChange(event.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
      };
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

export default TemperatureInput; 