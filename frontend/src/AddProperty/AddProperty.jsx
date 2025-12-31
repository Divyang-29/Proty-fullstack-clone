import { useState } from "react";
import UploadMedia from "./UploadMedia";
import PropertyInformation from "./PropertyInformation";
import PropertyPriceInfo from "./PropertyPriceInfo";
import PropertyFloors from "./PropertyFloors";
import PropertyAgentInfo from "./PropertyAgentInfo";
import api from "../utils/api";

export default function AddProperty() {
  const [propertyData, setPropertyData] = useState({});
  const [images, setImages] = useState([]);
  const [floors, setFloors] = useState([]);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      images.forEach((img) => {
        if (img.file) {
          formData.append("images", img.file);
        }
      });

      Object.keys(propertyData).forEach((key) => {
        if (propertyData[key] !== undefined) {
          formData.append(key, propertyData[key]);
        }
      });

      formData.append("floors", JSON.stringify(floors));

      await api.post("/properties", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Property added successfully");
    } catch (error) {
      console.error("ADD PROPERTY ERROR:", error.response?.data || error);
      alert("Failed to add property. Check backend logs.");
    }
  };

  return (
    <>
      <UploadMedia images={images} setImages={setImages} />
      <PropertyInformation
        propertyData={propertyData}
        setPropertyData={setPropertyData}
      />
      <PropertyPriceInfo
        propertyData={propertyData}
        setPropertyData={setPropertyData}
      />
      <PropertyFloors floors={floors} setFloors={setFloors} />
      <PropertyAgentInfo
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        onSubmit={handleSubmit}
      />
    </>
  );
}
