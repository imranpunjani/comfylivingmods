import OptimizedImage from '../../components/OptimizedImage';

export const metadata = {
  title: 'Complete Guide to Aging in Place | Comfortable Living',
  description: 'Comprehensive guide to making your home safe and accessible for aging in place. Learn about essential modifications, smart technology, and practical solutions.',
};

export default function AgingInPlaceGuide() {
  return (
    <article className="blog-post">
      <div className="blog-post-header">
        <div className="blog-category">Guide</div>
        <h1>Complete Guide to Aging in Place: Making Your Home Safe & Accessible</h1>
        <div className="blog-meta">
          <span className="read-time">8 min read</span>
          <span className="publish-date">Updated February 2024</span>
        </div>
      </div>

      <div className="blog-post-image">
        <OptimizedImage 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
          alt="Senior couple reviewing home modification plans" 
          width={1200}
          height={800}
          className="featured-image"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      <div className="blog-post-content">
        <h2>Understanding Aging in Place</h2>
        <p>
          Aging in place means living in your own home safely, independently, and 
          comfortably as you age. This comprehensive guide will walk you through 
          essential modifications and strategies to make your home more accessible 
          and safer for long-term living.
        </p>

        <h2>Essential Home Modifications</h2>
        
        <h3>1. Entryway and Exterior</h3>
        <ul>
          <li>Install ramps or zero-step entries</li>
          <li>Add motion-sensor lighting</li>
          <li>Widen doorways to 36 inches</li>
          <li>Install lever-style door handles</li>
          <li>Create a covered entryway</li>
        </ul>

        <h3>2. Bathroom Safety</h3>
        <ul>
          <li>Install grab bars near toilet and shower</li>
          <li>Convert to a walk-in or roll-in shower</li>
          <li>Add a comfort-height toilet</li>
          <li>Install non-slip flooring</li>
          <li>Consider a walk-in tub</li>
        </ul>

        <h3>3. Kitchen Accessibility</h3>
        <ul>
          <li>Lower countertop heights</li>
          <li>Install pull-out shelves</li>
          <li>Add task lighting</li>
          <li>Choose easy-grip handles</li>
          <li>Install a side-opening oven</li>
        </ul>

        <h2>Smart Technology Integration</h2>
        <p>
          Modern technology can significantly enhance safety and convenience:
        </p>
        <ul>
          <li>Voice-controlled lighting and thermostats</li>
          <li>Smart security systems</li>
          <li>Medical alert devices</li>
          <li>Motion sensors for automated lighting</li>
          <li>Video doorbells</li>
        </ul>

        <h2>Planning and Implementation</h2>
        <p>
          When planning your aging-in-place modifications:
        </p>
        <ol>
          <li>Start with a professional home assessment</li>
          <li>Prioritize modifications based on immediate needs</li>
          <li>Consider future requirements</li>
          <li>Research funding options and tax benefits</li>
          <li>Work with certified aging-in-place specialists</li>
        </ol>

        <div className="cta-section">
          <h2>Ready to Start Your Aging-in-Place Journey?</h2>
          <p>
            Our certified specialists can help you create a customized plan for 
            your home modifications. Schedule a free consultation today.
          </p>
          <a href="/contact" className="primary-button">Schedule Free Assessment</a>
        </div>
      </div>
    </article>
  );
} 