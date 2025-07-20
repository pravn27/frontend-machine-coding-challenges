import { useState } from "react";
import DatePicker from "../DatePicker/DatePicker.jsx";

const AgeCalculator = () => {
  const [dateValue, setDateValue] = useState("");
  const [result, setResult] = useState({
    isShow: false,
    finalResult: "",
  });

  const handleDateChange = (event) => {
    setResult({
      isShow: false,
      finalResult: "",
    });
    setDateValue(event.target.value);
  };

  const calculateAgeHandler = () => {
    const currentDate = new Date();
    const birthDate = new Date(dateValue);
    const yearDiff = Math.abs(
      currentDate.getFullYear() - birthDate.getFullYear()
    );
    const monthDiff = Math.abs(currentDate.getMonth() - birthDate.getMonth());
    const dayDiff = Math.abs(currentDate.getDate() - birthDate.getDate());

    const finalResult = `${yearDiff} years, ${monthDiff} months, ${dayDiff} days`;
    setResult({
      isShow: true,
      finalResult,
    });
  };

  return (
    <div className="age-calculator-container">
      <h2>Age Calculator</h2>
      <DatePicker
        label="Enter / Select a birthdate:"
        dateValue={dateValue}
        handleDateChange={handleDateChange}
      />
      <button
        disabled={!dateValue}
        className="calculate-button"
        onClick={calculateAgeHandler}
      >
        Calculate Age
      </button>
      {result.isShow && (
        <div className="result-container">
          <p>{result.finalResult}</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
