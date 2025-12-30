import BlogPost from "./BlogPost";
import FeaturedList from "./FeaturedList";
import AgentCTA from "./AgentCTA";

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="blog-layout">
        {/* LEFT SIDE */}
        <div className="blog-left">
          <BlogPost />
        </div>

        {/* RIGHT SIDE */}
        <aside className="blog-sidebar">
          <AgentCTA />
        </aside>
      </div>
    </div>
  );
}
