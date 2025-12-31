import "./propertyInformation.css";

export default function PropertyInformation({ propertyData, setPropertyData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setPropertyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="info-card">
      <h2>Information</h2>

      <div className="form-group">
        <label>Title *</label>
        <input
          type="text"
          name="title"
          placeholder="Property title"
          value={propertyData.title || ""}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Property description"
          value={propertyData.description || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
