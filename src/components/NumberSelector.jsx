import "../styled/NumberSelector.css";

const NumberSelector = ({error, seterror,selectNumber, setSelectNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const handleBoxClick = (value) => {
    setSelectNumber(value);
    seterror("");
  };

  return (
    <>
      <div className="num">
        <p>{error}</p>
        <div className="grid-container">
          {arrNumber.map((value, i) => (
            <div
              className={`box ${value === selectNumber ? "selected" : ""}`}
              key={i}
              onClick={() => handleBoxClick(value)}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="para">
          <p>Select Number</p>
        </div>
      </div>
    </>
  );
};

export default NumberSelector;
