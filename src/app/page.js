// pages/index.js
import Head from 'next/head';
import ContactForm from './components/ContactForm';
import OptimizedImage from './components/OptimizedImage';
import AnimatedLogo from './components/AnimatedLogo';
import { FaShieldAlt, FaTools, FaHandshake, FaCertificate } from 'react-icons/fa';
import { BiSolidHomeHeart } from 'react-icons/bi';
import { MdAccessible, MdSecurity, MdConstruction } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <Head>
        <title>Senior Home Modifications & Aging in Place Solutions | Comfortable Living</title>
        <meta
          name="description"
          content="Expert home modification services for seniors. ADA-compliant bathroom remodels, grab bars, wheelchair ramps & stairlifts. Licensed & insured aging in place specialists. Free consultation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="senior home modifications, aging in place, grab bar installation, wheelchair ramps, bathroom modifications, stair lifts, home safety assessment, ADA compliance, senior living solutions, accessible home design" />
        <meta property="og:title" content="Senior Home Modifications & Aging in Place Solutions | Comfortable Living" />
        <meta property="og:description" content="Transform your home for safe, independent living. Expert installation of grab bars, wheelchair ramps, and bathroom modifications. Free consultation available." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://comfylivingmods.com" />
        <meta property="og:url" content="https://comfylivingmods.com" />
      </Head>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <AnimatedLogo />
          <nav>
            <a href="#services">Our Services</a>
            <a href="#expertise">Expertise</a>
            {/* <a href="#gallery">Project Gallery</a> */}
            <a href="#faq">FAQs</a>
            <a href="#contact" className="cta-button">Get Free Assessment</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <OptimizedImage
            src="/hero-image.jpg"
            alt="Modern, accessible home interior"
            width={1920}
            height={1080}
            priority={true}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIeHx8dIigjJCUmJSQkIiYoLC0sJiEoKjQqKC0wMTExJS5JQTY4Pjg2MC7/2wBDAR0XFx4eJx4eJzEuIy4xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTH/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            loading="eager"
            className="hero-image"
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <div className="hero-content">
          <h2>Safe, Independent Living Starts at Home</h2>
          <p className="hero-subtitle">Professional Home Modifications by Certified Aging-in-Place Specialists</p>
          <div className="hero-cta">
            <a href="#contact" className="primary-button">Schedule Free Assessment</a>
            <a href="tel:555-123-4567" className="secondary-button">Call (555) 123-4567</a>
          </div>
          <div className="trust-badges">
            <div className="badge">
              <FaShieldAlt />
              <span>Licensed & Insured</span>
            </div>
            <div className="badge">
              <FaCertificate />
              <span>CAPS Certified</span>
            </div>
            <div className="badge">
              <FaHandshake />
              <span>Friendly and Transparent</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="services">
        <div className="section-header">
          <h2>Comprehensive Home Modification Solutions</h2>
          <p>Expert installations and modifications to enhance safety and accessibility in every area of your home</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image-wrapper">
              <OptimizedImage 
                src="bathroom-mode.jpg"
                alt="Accessible bathroom with walk-in shower and safety features" 
                width={800}
                height={600}
                className="service-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="service-content">
              <h3>Bathroom Safety Solutions</h3>
              <ul>
                <li>Roll-in and walk-in showers</li>
                <li>Premium grab bar installation</li>
                <li>Comfort-height toilets</li>
                <li>Non-slip flooring</li>
                <li>Accessible vanities</li>
                <li>Motion-sensor lighting</li>
              </ul>
              <a href="#contact" className="learn-more">Request Consultation →</a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image-wrapper">
              <OptimizedImage 
                src="mobility-mod.jpg"
                alt="Custom wheelchair ramp installation with handrails" 
                width={800}
                height={600}
                className="service-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="service-content">
              <h3>Mobility & Access</h3>
              <ul>
                <li>Custom wheelchair ramps</li>
                <li>Stairlift installation</li>
                <li>Doorway widening</li>
                <li>Zero-step entries</li>
                <li>Handrail systems</li>
                <li>Threshold modifications</li>
              </ul>
              <a href="#contact" className="learn-more">Request Consultation →</a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image-wrapper">
              <OptimizedImage 
                src="kitchen-mod.jpg"
                alt="Accessible kitchen with lowered countertops and pull-out shelving" 
                width={800}
                height={600}
                className="service-image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="service-content">
              <h3>Kitchen Accessibility</h3>
              <ul>
                <li>Adjustable height countertops</li>
                <li>Pull-out shelving systems</li>
                <li>Easy-reach storage solutions</li>
                <li>Accessible appliance installation</li>
                <li>Task lighting</li>
                <li>Anti-scald devices</li>
              </ul>
              <a href="#contact" className="learn-more">Request Consultation →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="expertise">
        <div className="section-header">
          <h2>Why Choose Our Expertise</h2>
          <p>Trusted by families across the region for creating safer, more accessible homes</p>
        </div>
        <div className="expertise-grid">
          <div className="expertise-card">
            <MdAccessible className="expertise-icon" />
            <h3>Certified Specialists</h3>
            <p>CAPS-certified experts specializing in aging-in-place modifications and ADA compliance</p>
          </div>
          <div className="expertise-card">
            <MdSecurity className="expertise-icon" />
            <h3>Safety First</h3>
            <p>Rigorous safety standards and premium materials for lasting peace of mind</p>
          </div>
          <div className="expertise-card">
            <MdConstruction className="expertise-icon" />
            <h3>Custom Solutions</h3>
            <p>Personalized modifications tailored to your specific needs and home layout</p>
          </div>
          <div className="expertise-card">
            <FaTools className="expertise-icon" />
            <h3>Professional Installation</h3>
            <p>Expert installation teams with extensive experience in home modifications</p>
          </div>
        </div>
      </section>

      {/* Project Gallery - Temporarily hidden until we have projects to showcase */}
      {/*
      <section id="gallery" className="gallery">
        <div className="section-header">
          <h2>Recent Projects</h2>
          <p>View our recent home modification projects and transformations</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1564540586988-aa4e53c3d799"
              alt="Before and after of an accessible bathroom renovation"
              width={800}
              height={600}
              className="gallery-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="gallery-item">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
              alt="Custom wheelchair ramp installation project"
              width={800}
              height={600}
              className="gallery-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="gallery-item">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Kitchen modification with accessible features"
              width={800}
              height={600}
              className="gallery-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>
      */}

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about our home modification services</p>
        </div>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How long does a typical modification project take?</h3>
            <p>Project timelines vary based on scope, but most bathroom modifications are completed within 3-5 days, while larger projects may take 1-2 weeks. We provide detailed timelines during consultation.</p>
          </div>
          <div className="faq-item">
            <h3>Are your modifications covered by insurance or Medicare?</h3>
            <p>Some modifications may be covered by long-term care insurance or Medicare Advantage plans. We can provide detailed documentation to support insurance claims.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer financing options?</h3>
            <p>Yes, we partner with several financing providers to offer flexible payment plans. We can discuss options during your free consultation.</p>
          </div>
          <div className="faq-item">
            <h3>Are your modifications ADA compliant?</h3>
            <p>Yes, all our modifications meet or exceed ADA guidelines and local building codes. We're certified in ADA compliance and aging-in-place modifications.</p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog">
        <div className="section-header">
          <h2>Expert Insights & Resources</h2>
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
              <h3>Complete Guide to Aging in Place: Making Your Home Safe & Accessible</h3>
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
              <h3>Bathroom Safety: Essential Modifications for Independent Living</h3>
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
              <h3>Financial Resources for Home Modifications: Grants & Programs</h3>
              <p>Explore available funding options, including grants, tax deductions, and assistance programs for home modifications.</p>
              <div className="blog-meta">
                <span className="read-time">7 min read</span>
                <a href="/blog/funding-options" className="read-more">Read Article →</a>
              </div>
            </div>
          </article>
        </div>
        <div className="blog-cta">
          <a href="/blog" className="secondary-outline-button">View All Articles</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Start Your Home Safety Journey</h2>
            <p className="contact-intro">
              Schedule your free home assessment today. Our experts will evaluate your needs and provide detailed recommendations.
            </p>
            <div className="contact-details">
              <div className="contact-method">
                <FaHandshake className="contact-icon" />
                <div>
                  <h3>Free Consultation</h3>
                  <p>Comprehensive home assessment at no cost</p>
                </div>
              </div>
              <div className="contact-method">
                <MdSecurity className="contact-icon" />
                <div>
                  <h3>Licensed & Insured</h3>
                  <p>Full coverage for your peace of mind</p>
                </div>
              </div>
              <a href="tel:555-123-4567" className="phone-cta">
                Call (555) 123-4567
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <BiSolidHomeHeart className="footer-logo" />
            <h3>Comfortable Living</h3>
            <p>Making homes safer for independent living</p>
            <div className="footer-contact">
              <p>📍 Serving the Greater Area</p>
              <p>📱 (555) 123-4567</p>
              <p>✉️ info@comfylivingmods.com</p>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Services</h4>
              <a href="#services">Bathroom Modifications</a>
              <a href="#services">Mobility Solutions</a>
              <a href="#services">Kitchen Adaptations</a>
              <a href="#services">Safety Installations</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="/about">About Us</a>
              <a href="/testimonials">Testimonials</a>
              <a href="#gallery">Project Gallery</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <a href="/blog">Blog</a>
              <a href="#faq">FAQs</a>
              <a href="/financing">Financing Options</a>
              <a href="/ada-guidelines">ADA Guidelines</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Comfortable Living Modifications. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </footer>
    </>
  );
}
