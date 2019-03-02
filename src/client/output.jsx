import React from 'react';

const Output = (props) => {
  const { numberOfDays, startDate, totalCost } = props;
  return (
    <div>
      <h3>Start Date: {startDate}</h3>
      <h3>Number Of Days: {numberOfDays}</h3>
      <h3>Total Cost: ${totalCost}</h3>
    </div>
  );
};
export default Output;
