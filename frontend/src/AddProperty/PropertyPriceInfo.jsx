import "./propertyPriceInfo.css";

export default function PropertyPriceInfo({ propertyData, setPropertyData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPropertyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {/* PRICE */}
      <div className="info-card">
        <h2>Price</h2>

        <div className="form-row two">
          <div className="form-group">
            <label>Price *</label>
            <input
              type="number"
              name="price"
              placeholder="Example value: 12345.67"
              value={propertyData.price || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Unit Price *</label>
            <select
              name="unitPrice"
              value={propertyData.unitPrice || ""}
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="Per Month">Per Month</option>
              <option value="Per Year">Per Year</option>
              <option value="Total">Total</option>
            </select>
          </div>
        </div>

        <div className="form-row two">
          <div className="form-group">
            <label>Before Price Label</label>
            <input
              type="text"
              name="beforePriceLabel"
              value={propertyData.beforePriceLabel || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>After Price Label</label>
            <input
              type="text"
              name="afterPriceLabel"
              value={propertyData.afterPriceLabel || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* ADDITIONAL INFORMATION */}
      <div className="info-card">
        <h2>Additional Information</h2>

        <div className="form-row three">
          <div className="form-group">
            <label>Property Type *</label>
            <select
              name="propertyType"
              value={propertyData.propertyType || ""}
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Villa">Villa</option>
            </select>
          </div>

          <div className="form-group">
            <label>Property Status *</label>
            <select
              name="propertyStatus"
              value={propertyData.propertyStatus || ""}
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>

          <div className="form-group">
            <label>Property Label *</label>
            <select
              name="propertyLabel"
              value={propertyData.propertyLabel || ""}
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="Featured">Featured</option>
              <option value="Hot">Hot</option>
            </select>
          </div>
        </div>

        <div className="form-row three">
          <div className="form-group">
            <label>Size (SqFt)</label>
            <input
              type="number"
              name="size"
              value={propertyData.size || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Land Area (SqFt)</label>
            <input
              type="number"
              name="landArea"
              value={propertyData.landArea || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Property ID</label>
            <input
              type="text"
              name="propertyId"
              value={propertyData.propertyId || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row three">
          <div className="form-group">
            <label>Rooms</label>
            <input
              type="number"
              name="rooms"
              value={propertyData.rooms || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Bedrooms</label>
            <input
              type="number"
              name="bedrooms"
              value={propertyData.bedrooms || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              value={propertyData.bathrooms || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row three">
          <div className="form-group">
            <label>Garages</label>
            <input
              type="number"
              name="garages"
              value={propertyData.garages || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Garage Size (SqFt)</label>
            <input
              type="number"
              name="garageSize"
              value={propertyData.garageSize || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Year Built</label>
            <input
              type="number"
              name="yearBuilt"
              value={propertyData.yearBuilt || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
