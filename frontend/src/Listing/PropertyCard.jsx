import "./propertyCard.css";

export default function PropertyCard({ property, currentUser, onDelete }) {
  const isOwner =
    currentUser && property.createdBy === currentUser._id;

  return (
    <div className="property-card">
      <div className="image-wrap">
        <img
          src={
            property.images && property.images.length > 0
              ? `http://localhost:8080${property.images[0]}`
              : "https://themesflat.co/html/proty/images/section/box-house.jpg"
          }
          alt={property.title}
        />

        <div className="badges">
          {property.propertyLabel && (
            <span className="property-badge featured">
              {property.propertyLabel}
            </span>
          )}
          {property.propertyStatus && (
            <span className="property-badge sale">
              {property.propertyStatus}
            </span>
          )}
        </div>
      </div>

      <div className="card-body">
        <h3>{property.title}</h3>

        <p className="location">
          📍 {property.address || "Location not provided"}
        </p>

        <p className="info">
          <strong>{property.bedrooms || 0}</strong> Beds &nbsp;
          <strong>{property.bathrooms || 0}</strong> Baths &nbsp;
          <strong>{property.size || 0}</strong> Sqft
        </p>

        <div className="card-footer">
          <span className="price">₹{property.price}</span>

          <div className="actions">
            <button className="compare">⇄ Compare</button>
            <button className="details">Details</button>

            {isOwner && (
              <button
                className="delete"
                onClick={() => onDelete(property._id)}
                style={{ color: "red", border: "none", background: "transparent" }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
