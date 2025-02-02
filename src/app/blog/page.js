import OptimizedImage from '../components/OptimizedImage';

export const metadata = {
  title: 'Home Modification & Aging in Place Blog | Comfortable Living',
  description: 'Expert insights on home modifications, aging in place, and creating safer living spaces for seniors. Tips, guides, and resources from certified specialists.',
};

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Expert Insights & Resources</h1>
        <p>Stay informed with our latest articles on home safety and aging in place</p>
      </div>

      <div className="blog-grid">
        <article className="blog-card">
          <div className="blog-image-wrapper">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
              alt="Senior couple reviewing home modification plans" 
              width={800}
              height={500}
              className="blog-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="blog-content">
            <div className="blog-category">Guide</div>
            <h2>Complete Guide to Aging in Place: Making Your Home Safe & Accessible</h2>
            <p>Learn about essential home modifications and smart strategies for creating a safe, comfortable living space that supports independence.</p>
            <div className="blog-meta">
              <span className="read-time">8 min read</span>
              <a href="/blog/aging-in-place-guide" className="read-more">Read Article →</a>
            </div>
          </div>
        </article>

        <article className="blog-card">
          <div className="blog-image-wrapper">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101"
              alt="Modern accessible bathroom with safety features" 
              width={800}
              height={500}
              className="blog-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="blog-content">
            <div className="blog-category">Safety Tips</div>
            <h2>Bathroom Safety: Essential Modifications for Independent Living</h2>
            <p>Discover the most important bathroom modifications that can significantly reduce fall risks and enhance accessibility.</p>
            <div className="blog-meta">
              <span className="read-time">6 min read</span>
              <a href="/blog/bathroom-safety-guide" className="read-more">Read Article →</a>
            </div>
          </div>
        </article>

        <article className="blog-card">
          <div className="blog-image-wrapper">
            <OptimizedImage 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
              alt="Senior couple reviewing documents" 
              width={800}
              height={500}
              className="blog-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="blog-content">
            <div className="blog-category">Financial Resources</div>
            <h2>Financial Resources for Home Modifications: Grants & Programs</h2>
            <p>Explore available funding options, including grants, tax deductions, and assistance programs for home modifications.</p>
            <div className="blog-meta">
              <span className="read-time">7 min read</span>
              <a href="/blog/funding-options" className="read-more">Read Article →</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 