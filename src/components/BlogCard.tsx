import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
}

const BlogCard = ({ title, excerpt, category, imageUrl, date }: BlogCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-aqua-100 text-aqua-500">
              {category}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-aqua-500 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-2">{excerpt}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default BlogCard;