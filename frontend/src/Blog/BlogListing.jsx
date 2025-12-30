import "./blogListing.css";
import BlogCard from "./BlogCard";

export default function BlogListing() {
  return (
    <div className="blog-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span className="active">Home</span> &gt; Property Listing
      </div>

      <div className="blog-layout">
        {/* LEFT CONTENT */}
        <div className="blog-left">
          <div className="blog-header">
            <h1>Blog list</h1>

            <div className="blog-toolbar">
              <button className="view-btn active">▦</button>
              <button className="view-btn">≡</button>
            </div>
          </div>

          <BlogCard />
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="blog-sidebar">
          <h3>Search Blog</h3>

          <div className="search-box">
            <input placeholder="Search" />
          </div>

          <h3>Categories</h3>

          <ul className="category-list">
            <li>
              Market Updates <span>(50)</span>
            </li>
            <li>
              Buying Tips <span>(69)</span>
            </li>
            <li>
              Interior Inspiration <span>(69)</span>
            </li>
            <li>
              Investment Insights <span>(25)</span>
            </li>
            <li>
              Home Construction <span>(12)</span>
            </li>
            <li>
              Legal Guidance <span>(12)</span>
            </li>
            <li>
              Community Spotlight <span>(69)</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
