import React, { Component } from 'react';

class Bills extends Component {

  constructor(props){
    super(props);

    this.state = {
      rent: '',
      electric: '',
      gas: '',
      cable: '',
      other: ''
    }
  }

  handleChange(name, val){
    switch(name) {
      case "dosa$":
        this.setState({rent: val});
        break;
      case "pongal$":
        this.setState({electric: val});
        break;
      case "sapathi$":
        this.setState({gas: val});
        break;
      case "sapathi$":
        this.setState({cable: val});
        break;
      case "other":
        this.setState({other: val});
        break;
      default:
        console.log("No earning state to assign in Bills component");
    }

    this.props.billsvalue(name, val)
  }

  render(){
    return(
      <div className="row bills">

        <div className="col-lg-6 bill">
          <h4>dosa$</h4>
          <span>$ </span>
          <input
            type="text"
            value={this.state.rent}
            onChange={e => this.handleChange('rent', e.target.value)} />

          <h4>pongal $</h4>
          <span>$ </span>
          <input
            type="text"
            value={this.state.electric}
            onChange={e => this.handleChange('electric', e.target.value)} />
        </div>

        <div className="col-lg-6 bill">
          <h4>sapathi $</h4>
          <span>$ </span>
          <input
            type="text"
            value={this.state.gas}
            onChange={e => this.handleChange('gas', e.target.value)} />

          <h4>sapathi</h4>
          <span>$ </span>
          <input
            type="text"
            value={this.state.cable}
            onChange={e => this.handleChange('cable', e.target.value)} />
        </div>

        <div className="col-lg-6 bill">
          <h4>Other</h4>
          <span>$ </span>
          <input
            type="text"
            value={this.state.other}
            onChange={e => this.handleChange('other', e.target.value)} />
        </div>

      </div>
    );
  }
}

export default Bills;