import React, { Component } from 'react'
import './color.css';


class Color extends Component {
  constructor(props){
    super(props);
    this.state={
      redRange: 127,
      greenRange: 127,
      blueRange: 127
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event){
    switch (event.target.className) {
      case 'redRange':
        this.setState({
          redRange: +event.target.value
        });
        break;
      case 'greenRange':
        this.setState({
          greenRange: +event.target.value
        });
        break;
      case 'blueRange':
        this.setState({
          blueRange: +event.target.value
        });
        break;
    }
  };

  render() {

    let greenDec   = this.state.greenRange;
    let redDec     = this.state.redRange;
    let blueDec    = this.state.blueRange;
    let redHex     = redDec.toString(16);
    let greenHex   = greenDec.toString(16);
    let blueHex    = blueDec.toString(16);

    if (redDec < 16 && redDec[0] != 0) {
      redHex = '0' + redHex;
    }
    if (greenDec < 16 && greenDec[0] != 0) {
      greenHex = '0' + greenHex;
    }
    if (blueDec < 16 && blueDec[0] != 0) {
      blueHex = '0' + blueHex;
    }

    let color = redHex + greenHex + blueHex;

    return (
      <div className="main-block">
        <div className="range-block">
          <div className="color-block" style={{backgroundColor: "rgba("+ redDec +","+ greenDec +","+ blueDec +",1)"}}>
            <p className="color-main">#{color}</p>
          </div>
          <p className="one-color">R:{redDec}</p>
          <input className="redRange"
                 onChange={this.handleChange}
                 type="range"
                 min="0"
                 max="255"
                 step="1"
                 value={redDec}>
          </input>
          <p className="one-color">G:{greenDec}</p>
          <input className="greenRange"
                 onChange={this.handleChange}
                 type="range"
                 min="0"
                 max="255"
                 step="1"
                 value={greenDec}>
          </input>
          <p className="one-color">B:{blueDec}</p>
          <input className="blueRange"
                 onChange={this.handleChange}
                 type="range"
                 min="0"
                 max="255"
                 step="1"
                 value={blueDec}>
          </input>
        </div>
      </div>
    );
  }

}

export default Color;
