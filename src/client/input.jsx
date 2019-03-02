import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { handleCost, handleNumberOfDays, handleStartDate } = props;
  return (
    <div>
      <input type="date" className="startDate" onChange={handleStartDate} />
      <input type="number" className="numberOfDays" onChange={handleNumberOfDays} />
      <button type="button" onClick={handleCost}>Calculate Total</button>
    </div>
  );
};

// validates the type of props with PropTypes
Input.propTypes = {
  handleCost: PropTypes.func,
  handleStartDate: PropTypes.func,
  handleNumberOfDays: PropTypes.func,
};
export default Input;
