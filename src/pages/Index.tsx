import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import NewsletterSignup from "../components/NewsletterSignup";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";

const Index = () => {
  const featuredPosts = [
    {
      title: "Complete Guide to Planted Aquascaping",
      excerpt: "Learn the fundamentals of creating a beautiful underwater landscape with live plants...",
      category: "Planted Tanks",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      date: "March 15, 2024",
      link: "/guides/planted-aquascaping"
    },
    {
      title: "Caring for Tropical Fish: Beginner's Guide",
      excerpt: "Everything you need to know about maintaining a healthy tropical fish aquarium...",
      category: "Fish Care",
      imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      date: "March 14, 2024",
      link: "/guides/tropical-fish"
    },
    {
      title: "Best Plants for Low-Tech Aquariums",
      excerpt: "Discover easy-to-maintain plants that thrive without CO2 injection...",
      category: "Plants",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
      date: "March 13, 2024",
      link: "/guides/low-tech-plants"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      <header className="relative z-10 py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Aquatic Life & Design
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Explore the beautiful world of tropical fish and planted aquariums
          </p>
          <div className="max-w-md mx-auto">
            <Input
              type="search"
              placeholder="Search articles..."
              className="w-full bg-gray-800/50 text-white placeholder:text-gray-400 border-gray-700"
            />
          </div>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link to={post.link} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard {...post} />
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-2xl mx-auto">
          <NewsletterSignup />
        </section>
      </main>

      <footer className="bg-gray-900 py-12 mt-20 relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Aquatic Life & Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;