import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PlantedGuide = () => {
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
          <h1 className="text-aqua-300 mb-8">Complete Guide to Planted Aquascaping</h1>
          
          <h2 className="text-aqua-200 mt-8">Introduction to Planted Aquariums</h2>
          <p className="text-gray-300 leading-relaxed">
            Planted aquascaping is the art of creating underwater landscapes using live aquatic plants. 
            This guide will walk you through everything you need to know to create and maintain a 
            beautiful planted aquarium.
          </p>

          <h2 className="text-aqua-200 mt-8">Essential Equipment</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Lighting system (LED recommended)</li>
            <li>CO2 system (optional but recommended)</li>
            <li>Substrate (aqua soil or nutrient-rich substrate)</li>
            <li>Filtration system</li>
            <li>Water test kits</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Choosing the Right Plants</h2>
          <p className="text-gray-300 leading-relaxed">
            Start with hardy plants that are easier to maintain:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>Anubias varieties (low light, easy)</li>
            <li>Java Fern (versatile, low maintenance)</li>
            <li>Amazon Sword (good background plant)</li>
            <li>Cryptocoryne varieties (mid-ground plants)</li>
            <li>Dwarf Hairgrass (carpet plant)</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Maintenance Schedule</h2>
          <p className="text-gray-300 leading-relaxed">
            Regular maintenance is key to a healthy planted aquarium:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>Daily: Check CO2 levels and equipment</li>
            <li>Weekly: 25-30% water change, prune plants</li>
            <li>Monthly: Deep clean filter, test water parameters</li>
            <li>Quarterly: Replace plant substrate nutrients</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Common Challenges</h2>
          <p className="text-gray-300 leading-relaxed">
            Watch out for these common issues:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>Algae growth</li>
            <li>Nutrient deficiencies</li>
            <li>CO2 fluctuations</li>
            <li>Plant melting</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Advanced Tips</h2>
          <p className="text-gray-300 leading-relaxed">
            Once you're comfortable with the basics, try these advanced techniques:
          </p>
          <ul className="text-gray-300 space-y-2">
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