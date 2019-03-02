import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: undefined,
            numberOfDays: undefined,
            totalCost: 0,
        }
    }
    handleStartDate(event)
    render() {
        const {
            numberOfDays, startDate, totalCost,
        } = this.state;
        return (
            <div>
                <h1>Bob's Banana Budget Tool</h1>
                <h2>Please enter your start date and number of days</h2>
                <div>
                    <input type="date" className="startDate" />
                    <input type="number" className="numberOfDays" />
                </div>
            </div>
        )
    }
}

export default App;