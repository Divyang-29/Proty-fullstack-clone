import "./blogDetails.css";
import BlogPost from "./BlogPost";
import FeaturedList from "./FeaturedList";

export default function BlogDetails() {
  return (
    <div className="blog-details-page">
      <div className="blog-layout">
        {/* LEFT */}
        <div className="blog-main">
          <BlogPost />
        </div>

        {/* RIGHT */}
        <aside className="blog-sidebar">
          <FeaturedList />

          <div className="newsletter">
            <h3>Join Our Newsletter</h3>
            <p>
              Signup to be the first to hear about exclusive deals, special
              offers and upcoming collections
            </p>

            <div className="newsletter-input">
              <input placeholder="Search" />
              <button>➤</button>
            </div>
          </div>

          <div className="tags">
            <h3>Popular Tags</h3>
            <div className="tag-list">
              <span>Property</span>
              <span>Office</span>
              <span>Finance</span>
              <span>Legal</span>
              <span>Market</span>
              <span>Invest</span>
              <span>Renovate</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
