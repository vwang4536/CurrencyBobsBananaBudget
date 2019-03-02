import React from 'react';

const Input = (props) => {
  const { handleCost, handleStartDate, handleNumberOfDays } = props;
  return (
    <div>
      <input type="date" className="startDate" onChange={handleStartDate} />
      <input type="number" className="numberOfDays" onChange={handleNumberOfDays} />
      <button type="button" onClick={handleCost}>Calculate Total</button>
    </div>
  );
};

export default Input;
