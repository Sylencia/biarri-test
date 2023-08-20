import "./DegreesSwitch.scss";

export const DegreesSwitch = ({ handleSwitch, usingCelcius }) => {
  return (
    <button className="degrees-button" onClick={() => handleSwitch()}>
      Switch to °{usingCelcius ? "F" : "C"}
    </button>
  );
};
