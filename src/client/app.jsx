import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
      numberOfDays: undefined,
      totalCost: 0,
    };
    this.handleCost = this.handleCost.bind(this);
    this.handleNumberOfDays = this.handleNumberOfDays.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
  }
  handleNumberOfDays(event) {
    this.setState({
      numberOfDays: event.target.value,
    });
  }
  handleStartDate(event) {
    this.setState({
      startDate: event.target.value,
    });
  }
  handleCost() {}
  render() {
    const {
      numberOfDays, startDate, totalCost,
    } = this.state;
    return (
      <div>
        <h1>Bob's Banana Budget Tool</h1>
        <h2>Please enter your start date and number of days</h2>
        <div>
          <input type="date" className="startDate" onChange={this.handleStartDate} />
          <input type="number" className="numberOfDays" onChange={this.handleNumberOfDays} />
        </div>
        <div>
          <h3>Start Date: {startDate} </h3>
          <h3>Number of Days: {numberOfDays} </h3>
          <h3>Total Cost: ${totalCost}</h3>
        </div>
      </div>
    )
  }
}

export default App;