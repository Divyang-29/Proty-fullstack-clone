import "./propertyListing.css";
import PropertyCard from "./PropertyCard";

export default function PropertyListing() {
  const properties = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="listing-page">
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <span className="active">Home</span> &gt; Property Listing
      </div>

      {/* HEADER */}
      <div className="listing-header">
        <h1>Property listing</h1>

        <div className="listing-actions">
          <button className="filter-btn">Filter</button>

          <div className="view-icons">
            <button className="active">☰</button>
            <button>☷</button>
          </div>

          <select className="sort-select">
            <option>Sort by (Default)</option>
          </select>

          <button className="settings-btn">⚙</button>
        </div>
      </div>

      {/* GRID */}
      <div className="property-grid">
        {properties.map((_, index) => (
          <PropertyCard key={index} />
        ))}
      </div>
    </div>
  );
}
