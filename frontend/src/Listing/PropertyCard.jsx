import "./propertyCard.css";

export default function PropertyCard() {
  return (
    <div className="property-card">
      <div className="image-wrap">
        <img
          src={"https://themesflat.co/html/proty/images/section/box-house.jpg"}
          alt="Property"
        />

        <div className="badges">
          <span className="property-badge featured">Featured</span>
          <span className="property-badge sale">For Sale</span>
        </div>
      </div>

      <div className="card-body">
        <h3>Elegant studio flat</h3>

        <p className="location">📍 102 Ingraham St, Brooklyn, NY 11237</p>

        <p className="info">
          <strong>3</strong> Beds &nbsp;
          <strong>3</strong> Baths &nbsp;
          <strong>4,043</strong> Sqft
        </p>

        <div className="card-footer">
          <span className="price">$8.600</span>

          <div className="actions">
            <button className="compare">⇄ Compare</button>
            <button className="details">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}
