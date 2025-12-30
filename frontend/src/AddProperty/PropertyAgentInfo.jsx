import "./propertyAgentInfo.css";

export default function PropertyAgentInfo() {
  return (
    <>
      {/* AGENT INFO */}
      <div className="info-card">
        <h2>Agent Information</h2>

        <p className="agent-subtitle">
          Choose type agent information?
        </p>

        <div className="agent-radio">
          <label>
            <input type="radio" name="agentInfo" />
            Your current user information
          </label>

          <label>
            <input type="radio" name="agentInfo" />
            Other contact
          </label>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="property-actions">
        <button className="btn-primary">Add Property</button>
        <button className="btn-outline">Save & Preview</button>
      </div>

      {/* FOOTER */}
      <div className="property-footer">
        <span>Copyright © 2024 Popty</span>
        <span>Privacy / Terms / Support</span>
      </div>
    </>
  );
}
