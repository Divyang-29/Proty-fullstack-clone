import "./propertyPriceInfo.css";

export default function PropertyPriceInfo() {
  return (
    <>
      {/* PRICE */}
      <div className="info-card">
        <h2>Price</h2>

        <div className="form-row two">
          <div className="form-group">
            <label>Price<span>*</span></label>
            <input type="number" placeholder="Example value: 12345.67" />
          </div>

          <div className="form-group">
            <label>Unit Price<span>*</span></label>
            <select>
              <option>None</option>
              <option>Per Month</option>
              <option>Per Year</option>
              <option>Total</option>
            </select>
          </div>
        </div>

        <div className="form-row two">
          <div className="form-group">
            <label>Before Price Label<span>*</span></label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>After Price Label<span>*</span></label>
            <input type="text" />
          </div>
        </div>
      </div>

      {/* ADDITIONAL INFORMATION */}
      <div className="info-card">
        <h2>Additional Information</h2>

        <div className="form-row three">
          <div className="form-group">
            <label>Property Type<span>*</span></label>
            <select>
              <option>Choose</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
            </select>
          </div>

          <div className="form-group">
            <label>Property Status<span>*</span></label>
            <select>
              <option>Choose</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>

          <div className="form-group">
            <label>Property Label<span>*</span></label>
            <select>
              <option>Choose</option>
              <option>Featured</option>
              <option>Hot</option>
            </select>
          </div>
        </div>

        <div className="form-row three">
          <div className="form-group">
            <label>Size (SqFt)<span>*</span></label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Land Area (SqFt)<span>*</span></label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Property ID<span>*</span></label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row three">
          <div className="form-group">
            <label>Rooms<span>*</span></label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Bedrooms<span>*</span></label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Bathrooms<span>*</span></label>
            <input type="number" />
          </div>
        </div>

        <div className="form-row three">
          <div className="form-group">
            <label>Garages<span>*</span></label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Garages Size (SqFt)<span>*</span></label>
            <input type="number" />
          </div>

          <div className="form-group">
            <label>Year Built<span>*</span></label>
            <input type="number" />
          </div>
        </div>
      </div>
    </>
  );
}
