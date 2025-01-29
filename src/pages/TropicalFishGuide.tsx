import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const TropicalFishGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="outline" className="mb-8 text-white border-white hover:bg-white/10">
            ← Back to Home
          </Button>
        </Link>
        
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert lg:prose-xl mx-auto bg-gray-900/50 p-8 rounded-lg shadow-xl backdrop-blur-sm"
        >
          <h1 className="text-aqua-300 mb-8">Caring for Tropical Fish: Beginner's Guide</h1>
          
          <h2 className="text-aqua-200 mt-8">Getting Started</h2>
          <p className="text-gray-300 leading-relaxed">
            Tropical fish keeping is a rewarding hobby that requires understanding 
            of basic aquarium maintenance and fish care principles. This guide will 
            help you create the perfect environment for your tropical fish.
          </p>

          <h2 className="text-aqua-200 mt-8">Essential Equipment</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Appropriately sized aquarium (larger is more stable)</li>
            <li>Quality filter system</li>
            <li>Heater and thermometer</li>
            <li>Water testing kit</li>
            <li>Lighting system</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Water Parameters</h2>
          <p className="text-gray-300 leading-relaxed">
            Maintaining proper water parameters is crucial:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>Temperature: 75-80°F (24-27°C)</li>
            <li>pH: 6.8-7.5 (species dependent)</li>
            <li>Ammonia: 0 ppm</li>
            <li>Nitrite: 0 ppm</li>
            <li>Nitrate: &lt;20 ppm</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Popular Beginner-Friendly Fish</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Guppies - Colorful and easy to care for</li>
            <li>Tetras - Peaceful schooling fish</li>
            <li>Platies - Hardy and active</li>
            <li>Corydoras - Bottom-dwelling cleaners</li>
            <li>Bettas - Beautiful but need specific care</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Feeding Guidelines</h2>
          <p className="text-gray-300 leading-relaxed">
            Proper nutrition is key to healthy fish:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>Feed small amounts 2-3 times daily</li>
            <li>Vary diet with quality flakes, pellets, and frozen foods</li>
            <li>Remove uneaten food after 5 minutes</li>
            <li>Consider fasting day once per week</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Common Health Issues</h2>
          <p className="text-gray-300 leading-relaxed">
            Watch for these common problems:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>Ich (white spot disease)</li>
            <li>Fin rot</li>
            <li>Swim bladder issues</li>
            <li>Fungal infections</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Maintenance Schedule</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Daily: Feed fish, check temperature and equipment</li>
            <li>Weekly: 25% water change, test parameters</li>
            <li>Monthly: Deep clean filter, trim plants</li>
            <li>Yearly: Replace old equipment, deep clean</li>
          </ul>
        </motion.article>
      </div>
    </div>
  );
};

export default TropicalFishGuide;