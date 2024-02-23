import "../styled/Rules.css"

const Rules = () => {
  return (
    <div className="ruleContainer">
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>If you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </div>
  );
};

export default Rules;
