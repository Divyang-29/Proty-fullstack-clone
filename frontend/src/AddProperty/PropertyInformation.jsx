import "./propertyInformation.css";

export default function PropertyInformation() {
  return (
    <div className="info-card">
      <h2>Information</h2>

      {/* TITLE */}
      <div className="form-group">
        <label>Title<span>*</span></label>
        <input type="text" placeholder="Choose" />
      </div>

      {/* DESCRIPTION */}
      <div className="form-group">
        <label>Description</label>
        <textarea placeholder="Your Description"></textarea>
      </div>

      {/* ADDRESS ROW */}
      <div className="form-row">
        <div className="form-group">
          <label>Full Address<span>*</span></label>
          <input type="text" placeholder="Enter property full address" />
        </div>

        <div className="form-group">
          <label>Zip Code<span>*</span></label>
          <input type="text" placeholder="Enter property zip code" />
        </div>

        <div className="form-group">
          <label>Country<span>*</span></label>
          <select>
            <option>United States</option>
          </select>
        </div>
      </div>

      {/* DROPDOWNS */}
      <div className="form-row">
        <div className="form-group">
          <label>Province/State<span>*</span></label>
          <select>
            <option>None</option>
          </select>
        </div>

        <div className="form-group">
          <label>Neighborhood<span>*</span></label>
          <select>
            <option>None</option>
          </select>
        </div>
      </div>

      {/* LOCATION */}
      <div className="form-group">
        <label>Location<span>*</span></label>
        <input type="text" placeholder="None" />
      </div>

      {/* MAP */}
      <div className="map-box">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=new%20york&t=&z=10&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </div>
  );
}
