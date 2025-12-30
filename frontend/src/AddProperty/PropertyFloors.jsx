import "./propertyFloors.css";

export default function PropertyFloors() {
  return (
    <div className="info-card">
      <h2>Floors</h2>

      {/* ENABLE FLOOR PLAN */}
      <div className="floor-toggle">
        <label>Enable Floor Plan:</label>

        <div className="radio-group">
          <label>
            <input type="radio" name="floorPlan" /> Enable
          </label>

          <label>
            <input type="radio" name="floorPlan" /> Disable
          </label>
        </div>
      </div>

      {/* FLOOR CARD */}
      <div className="floor-card">
        <div className="floor-header">
          <h4>Floor 1:</h4>
          <button className="close-btn">×</button>
        </div>

        <div className="form-group">
          <label>Floor Name:</label>
          <input type="text" />
        </div>

        <div className="form-row two">
          <div className="form-group">
            <label>Floor Price (Only Digits):</label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Price Postfix:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row two">
          <div className="form-group">
            <label>Floor Size (Only Digits):</label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Size Postfix:</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row two">
          <div className="form-group">
            <label>Bedrooms:</label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Bathrooms:</label>
            <input type="number" />
          </div>
        </div>

        <div className="form-row two">
          <div className="form-group">
            <label>Floor Image:</label>

            <div className="upload-box">
              <button type="button">🖼 Choose File</button>
              <span>Or drop file here to upload</span>
            </div>
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
