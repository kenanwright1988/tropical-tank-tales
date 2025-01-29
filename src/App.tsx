import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlantedGuide from "./pages/PlantedGuide";
import TropicalFishGuide from "./pages/TropicalFishGuide";
import LowTechGuide from "./pages/LowTechGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guides/planted-aquascaping" element={<PlantedGuide />} />
          <Route path="/guides/tropical-fish" element={<TropicalFishGuide />} />
          <Route path="/guides/low-tech-plants" element={<LowTechGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;