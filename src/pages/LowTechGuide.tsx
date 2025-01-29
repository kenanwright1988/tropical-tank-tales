import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const LowTechGuide = () => {
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
          <h1 className="text-aqua-300 mb-8">Best Plants for Low-Tech Aquariums</h1>
          
          <h2 className="text-aqua-200 mt-8">What is a Low-Tech Aquarium?</h2>
          <p className="text-gray-300 leading-relaxed">
            A low-tech aquarium is a planted tank setup that doesn't require CO2 injection 
            or expensive lighting systems. These setups are perfect for beginners or those 
            who want a more natural, low-maintenance approach.
          </p>

          <h2 className="text-aqua-200 mt-8">Best Low-Tech Plants</h2>
          <h3 className="text-aqua-100 mt-6">Easy Foreground Plants</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Marsilea Hirsuta</li>
            <li>Sagittaria Subulata</li>
            <li>Cryptocoryne Parva</li>
          </ul>

          <h3 className="text-aqua-100 mt-6">Mid-ground Plants</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Anubias Nana</li>
            <li>Cryptocoryne Wendtii</li>
            <li>Java Fern</li>
            <li>Bucephalandra varieties</li>
          </ul>

          <h3 className="text-aqua-100 mt-6">Background Plants</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Vallisneria</li>
            <li>Amazon Sword</li>
            <li>Hygrophila Polysperma</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Basic Requirements</h2>
          <ul className="text-gray-300 space-y-2">
            <li>Lighting: 6-8 hours daily of moderate lighting</li>
            <li>Substrate: Regular aquarium gravel or sand</li>
            <li>Fertilization: Root tabs and occasional liquid fertilizers</li>
            <li>Water changes: 25% weekly</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Plant Care Tips</h2>
          <p className="text-gray-300 leading-relaxed">
            Follow these guidelines for healthy plants:
          </p>
          <ul className="text-gray-300 space-y-2">
            <li>Use root tabs every 3-4 months</li>
            <li>Trim dead or yellowing leaves</li>
            <li>Avoid overfeeding fish to prevent algae</li>
            <li>Maintain consistent lighting schedule</li>
            <li>Don't overcrowd the tank</li>
          </ul>

          <h2 className="text-aqua-200 mt-8">Common Issues and Solutions</h2>
          <h3 className="text-aqua-100 mt-6">Algae Growth</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Reduce lighting duration</li>
            <li>Add floating plants</li>
            <li>Maintain regular water changes</li>
            <li>Consider adding cleanup crew (snails, shrimp)</li>
          </ul>

          <h3 className="text-aqua-100 mt-6">Plant Melting</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Be patient during initial adaptation</li>
            <li>Remove dead plant matter</li>
            <li>Maintain stable water parameters</li>
            <li>Ensure proper planting depth</li>
          </ul>
        </motion.article>
      </div>
    </div>
  );
};

export default LowTechGuide;