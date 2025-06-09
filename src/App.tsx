
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Welcome from "./components/Welcome";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const hasSeenWelcome = localStorage.getItem('hasSeenWelcome') === 'true';

  // Reset the welcome flag when needed (e.g., after a certain time or on logout)
  useEffect(() => {
    // This is where you could add logic to reset the welcome flag
    // For example, after 24 hours:
    // const timer = setTimeout(() => {
    //   localStorage.removeItem('hasSeenWelcome');
    // }, 24 * 60 * 60 * 1000);
    // return () => clearTimeout(timer);
  }, []);

  return (
    <Routes location={location}>
      <Route 
        path="/" 
        element={
          hasSeenWelcome ? 
          <Navigate to="/home" replace /> : 
          <Welcome />
        } 
      />
      <Route path="/home" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/index" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
