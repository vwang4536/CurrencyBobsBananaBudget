import React, { Component } from 'react';
import Input from './input.jsx';
import Output from './output.jsx';

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

  handleCost() {
    const { startDate, numberOfDays } = this.state;
    if (startDate && numberOfDays) {
      fetch('/api/handleCost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ startDate, numberOfDays: Number(numberOfDays) }),
      })
        .then(res => res.json())
        .then(res => this.setState({
          totalCost: Number(res.totalCost),
        }));
    }
  }

  render() {
    const {
      numberOfDays, startDate, totalCost,
    } = this.state;
    return (
      <div>
        <h1>Bob&#8217;s Banana Budget Tool</h1>
        <h2>Please enter your start date and number of days</h2>
        <Input handleCost={this.handleCost} handleNumberOfDays={this.handleNumberOfDays} handleStartDate={this.handleStartDate} />
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
