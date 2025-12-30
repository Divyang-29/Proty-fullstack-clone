import "./agentCTA.css";

export default function AgentCTA() {
  return (
    <div className="agent-cta">
        
      <div className="agent-overlay"></div>

      <div className="agent-content">
        <div className="agent-brand">
          <span className="agent-logo">📍</span>
          <span className="agent-name">PROTY</span>
        </div>

        <h3>We can help you find a local real estate agent</h3>

        <p>
          Connect with a trusted agent who knows the market inside out –
          whether you're buying or selling.
        </p>

        <button className="agent-btn">Connect with an agent</button>
      </div>
    </div>
  );
}
