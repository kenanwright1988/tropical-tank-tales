import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const NewsletterSignup = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our latest updates about aquarium care.",
    });
    setEmail("");
  };

  return (
    <div className="bg-aqua-50 p-8 rounded-lg">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
        Stay Updated
      </h3>
      <p className="text-gray-600 mb-6">
        Subscribe to our newsletter for the latest aquarium tips and tricks.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" className="bg-aqua-500 hover:bg-aqua-600">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;