const DatePicker = ({ label, dateValue, handleDateChange }) => {
  return (
    <div className="date-container">
      <span className="date-label">{label || "Select Date"}</span>
      <input
        type="date"
        value={dateValue}
        className="date-input"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
