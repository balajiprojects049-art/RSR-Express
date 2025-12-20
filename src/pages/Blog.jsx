import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import './Blog.css';

const blogPosts = [
    {
        id: 1,
        title: "10 Essential Car Maintenance Tips Every Driver Should Know",
        excerpt: "Regular maintenance can prevent unexpected breakdowns. Learn the key checks that keep your vehicle running smoothly.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2071&auto=format&fit=crop",
        category: "Maintenance",
        date: "Dec 15, 2024",
        author: "RSR Team",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "What to Do When Your Car Battery Dies",
        excerpt: "A dead battery can happen anytime. Here's your complete guide to jumpstarting and preventing battery issues.",
        image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=2070&auto=format&fit=crop",
        category: "Emergency",
        date: "Dec 10, 2024",
        author: "RSR Team",
        readTime: "4 min read"
    },
    {
        id: 3,
        title: "How to Choose the Right Towing Service",
        excerpt: "Not all towing services are created equal. Learn what to look for when you need professional vehicle recovery.",
        image: "https://images.unsplash.com/photo-1581578949510-fa7315c4c350?q=80&w=2070&auto=format&fit=crop",
        category: "Towing",
        date: "Dec 5, 2024",
        author: "RSR Team",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "Flat Tire? Here's What You Need to Know",
        excerpt: "From identifying the cause to temporary fixes, master the art of dealing with flat tires on the road.",
        image: "https://images.unsplash.com/photo-1625043484555-47841a752840?q=80&w=2070&auto=format&fit=crop",
        category: "Roadside",
        date: "Nov 28, 2024",
        author: "RSR Team",
        readTime: "5 min read"
    },
    {
        id: 5,
        title: "Winter Driving: Preparation and Safety Tips",
        excerpt: "Cold weather brings unique challenges. Prepare your vehicle and yourself for safe winter driving.",
        image: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=2070&auto=format&fit=crop",
        category: "Safety",
        date: "Nov 20, 2024",
        author: "RSR Team",
        readTime: "7 min read"
    },
    {
        id: 6,
        title: "Understanding Your Car's Warning Lights",
        excerpt: "Dashboard lights can be confusing. Learn what each warning indicator means and when to take action.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
        category: "Maintenance",
        date: "Nov 12, 2024",
        author: "RSR Team",
        readTime: "4 min read"
    }
];

const Blog = () => {
    return (
        <main className="blog-page">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="container">
                    <div className="hero-content animate-fadeInUp">
                        <span className="subtitle">RSR Express Blog</span>
                        <h1 className="page-title">Tips, Guides & Stories</h1>
                        <p className="hero-description">
                            Expert advice on vehicle maintenance, roadside assistance,
                            and everything you need to stay safe on the road.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="section-padding">
                <div className="container">
                    <div className="featured-post card-glow hover-lift">
                        <div className="featured-grid">
                            <div className="featured-image img-hover-zoom">
                                <img src={blogPosts[0].image} alt={blogPosts[0].title} />
                                <span className="category-badge">{blogPosts[0].category}</span>
                            </div>
                            <div className="featured-content">
                                <div className="post-meta">
                                    <span><Calendar size={16} /> {blogPosts[0].date}</span>
                                    <span><Clock size={16} /> {blogPosts[0].readTime}</span>
                                </div>
                                <h2 className="featured-title">{blogPosts[0].title}</h2>
                                <p className="featured-excerpt">{blogPosts[0].excerpt}</p>
                                <a href={`/blog/${blogPosts[0].id}`} className="read-more-btn">
                                    Read Full Article <ArrowRight size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="blog-grid-section section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Latest Articles</h2>
                    </div>
                    <div className="blog-grid">
                        {blogPosts.slice(1).map((post) => (
                            <article key={post.id} className="blog-card card hover-lift">
                                <div className="blog-image img-hover-zoom">
                                    <img src={post.image} alt={post.title} />
                                    <span className="category-badge">{post.category}</span>
                                </div>
                                <div className="blog-content">
                                    <div className="post-meta">
                                        <span><Calendar size={14} /> {post.date}</span>
                                        <span><Clock size={14} /> {post.readTime}</span>
                                    </div>
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <a href={`/blog/${post.id}`} className="read-more">
                                        Read More <ArrowRight size={16} />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
