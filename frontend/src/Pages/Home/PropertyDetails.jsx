import { useParams } from "react-router-dom";
import "./PropertyDetails.css";

const listings = [
  {
    id: "1",
    title: "Elegant studio flat",
    price: "$8,600",
    address: "102 Ingraham St, Brooklyn, NY 11237",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    description:
      "This elegant studio flat offers modern interiors, spacious rooms, and luxury amenities.",
  },
  // add more if needed
];

export default function PropertyDetails() {
  const { id } = useParams();

  const property = listings.find((item) => item.id === id);

  if (!property) return <h2>Property Not Found</h2>;

  return (
    <section className="details-page">
      <img src={property.image} alt={property.title} />

      <div className="details-content">
        <h1>{property.title}</h1>
        <p className="price">{property.price}</p>
        <p className="address">{property.address}</p>

        <p className="description">{property.description}</p>
      </div>
    </section>
  );
}
