import "./propertyAgentInfo.css";

export default function PropertyAgentInfo({ propertyData, setPropertyData, onSubmit }) {
  const handleChange = (e) => {
    setPropertyData((prev) => ({
      ...prev,
      agentType: e.target.value,
    }));
  };

  return (
    <>
      {/* AGENT INFO */}
      <div className="info-card">
        <h2>Agent Information</h2>

        <p className="agent-subtitle">Choose type agent information?</p>

        <div className="agent-radio">
          <label>
            <input
              type="radio"
              name="agentType"
              value="current"
              checked={propertyData.agentType === "current"}
              onChange={handleChange}
            />
            Your current user information
          </label>

          <label>
            <input
              type="radio"
              name="agentType"
              value="other"
              checked={propertyData.agentType === "other"}
              onChange={handleChange}
            />
            Other contact
          </label>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="property-actions">
        <button className="btn-primary" onClick={onSubmit}>
          Add Property
        </button>
      </div>

      {/* FOOTER */}
      <div className="property-footer">
        <span>Copyright © 2024 Popty</span>
        <span>Privacy / Terms / Support</span>
      </div>
    </>
  );
}
