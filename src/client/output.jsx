import React from 'react';
import PropTypes from 'prop-types';

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

// validates the types of props with PropTypes
Output.propTypes = {
  numberOfDays: PropTypes.string,
  startDate: PropTypes.string,
  totalCost: PropTypes.number,
};
export default Output;
