import { useEffect, useState } from "react";
import "./propertyListing.css";
import PropertyCard from "./PropertyCard";
import api from "../utils/api";

export default function PropertyListing() {
  const [properties, setProperties] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api.get("/auth/me")
      .then(res => setCurrentUser(res.data.user))
      .catch(() => setCurrentUser(null));

    api.get("/properties")
      .then(res => setProperties(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this property?")) return;

    try {
      await api.delete(`/properties/${id}`);
      setProperties(prev => prev.filter(p => p._id !== id));
    } catch (error) {
      alert("You are not allowed to delete this property",error);
    }
  };

  return (
    <div className="listing-page">
      <div className="breadcrumb">
        <span className="active">Home</span> &gt; Property Listing
      </div>

      <div className="listing-header">
        <h1>Property listing</h1>
      </div>

      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
            currentUser={currentUser}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
