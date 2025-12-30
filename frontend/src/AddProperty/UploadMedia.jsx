import { useRef, useState } from "react";
import "./uploadMedia.css";

export default function UploadMedia() {
  const inputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleFiles = (files) => {
    const selected = Array.from(files);

    if (images.length + selected.length > 10) {
      alert("You can upload up to 10 photos only");
      return;
    }

    const previews = selected.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...previews]);
  };

  const handleInputChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="upload-card">
      <h2>Upload Media</h2>

      {/* DROP ZONE */}
      <div
        className="drop-zone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <button
          type="button"
          className="upload-btn"
          onClick={() => inputRef.current.click()}
        >
          📄 Select photos
        </button>

        <p>or drag photos here</p>
        <span>(Up to 10 photos)</span>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={handleInputChange}
        />
      </div>

      {/* PREVIEW */}
      {images.length > 0 && (
        <div className="preview-row">
          {images.map((img, index) => (
            <div className="preview-item" key={index}>
              <img src={img.url} alt="preview" />
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeImage(index)}
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
