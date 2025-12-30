import { useState } from "react";
import "./PropertyType.css";

const propertyTypes = [
  { id: 1, title: "Apartment", count: 234, icon: "fa-building" },
  { id: 2, title: "Villa", count: 234, icon: "fa-house" },
  { id: 3, title: "Commercial", count: 234, icon: "fa-store" },
  { id: 4, title: "Office", count: 234, icon: "fa-city" },
  { id: 5, title: "Townhouse", count: 234, icon: "fa-house-chimney" },
];

export default function PropertyType() {
  const [active, setActive] = useState("Studio");

  return (
    <section className="property-section">
      <h2>Try Searching For</h2>
      <p>
        Thousands of luxury home enthusiasts just like you have found their
        dream home
      </p>

      <div className="property-grid">
        {propertyTypes.map((item) => (
          <div
            key={item.id}
            className={`property-card ${active === item.title ? "active" : ""}`}
            onClick={() => setActive(item.title)}
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <h4>{item.title}</h4>
            <span>{item.count} Property</span>
          </div>
        ))}
      </div>
    </section>
  );
}
