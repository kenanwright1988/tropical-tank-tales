import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PlantedGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            ← Back to Home
          </Button>
        </Link>
        
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-invert lg:prose-xl mx-auto"
        >
          <h1>Complete Guide to Planted Aquascaping</h1>
          
          <h2>Introduction to Planted Aquariums</h2>
          <p>
            Planted aquascaping is the art of creating underwater landscapes using live aquatic plants. 
            This guide will walk you through everything you need to know to create and maintain a 
            beautiful planted aquarium.
          </p>

          <h2>Essential Equipment</h2>
          <ul>
            <li>Lighting system (LED recommended)</li>
            <li>CO2 system (optional but recommended)</li>
            <li>Substrate (aqua soil or nutrient-rich substrate)</li>
            <li>Filtration system</li>
            <li>Water test kits</li>
          </ul>

          <h2>Choosing the Right Plants</h2>
          <p>
            Start with hardy plants that are easier to maintain:
          </p>
          <ul>
            <li>Anubias varieties (low light, easy)</li>
            <li>Java Fern (versatile, low maintenance)</li>
            <li>Amazon Sword (good background plant)</li>
            <li>Cryptocoryne varieties (mid-ground plants)</li>
            <li>Dwarf Hairgrass (carpet plant)</li>
          </ul>

          <h2>Maintenance Schedule</h2>
          <p>
            Regular maintenance is key to a healthy planted aquarium:
          </p>
          <ul>
            <li>Daily: Check CO2 levels and equipment</li>
            <li>Weekly: 25-30% water change, prune plants</li>
            <li>Monthly: Deep clean filter, test water parameters</li>
            <li>Quarterly: Replace plant substrate nutrients</li>
          </ul>

          <h2>Common Challenges</h2>
          <p>
            Watch out for these common issues:
          </p>
          <ul>
            <li>Algae growth</li>
            <li>Nutrient deficiencies</li>
            <li>CO2 fluctuations</li>
            <li>Plant melting</li>
          </ul>

          <h2>Advanced Tips</h2>
          <p>
            Once you're comfortable with the basics, try these advanced techniques:
          </p>
          <ul>
            <li>Dry start method for carpet plants</li>
            <li>Custom CO2 diffusion systems</li>
            <li>Advanced pruning techniques</li>
            <li>Aquascape composition rules</li>
          </ul>
        </motion.article>
      </div>
    </div>
  );
};

export default PlantedGuide;