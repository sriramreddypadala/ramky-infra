
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, Suspense } from 'react';
import Welcome from "./components/Welcome";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import VideoTest from "./pages/VideoTest";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const hasSeenWelcome = localStorage.getItem('hasSeenWelcome') === 'true';

  // Reset the welcome flag when needed (e.g., after a certain time or on logout)
  useEffect(() => {
    // For development, you might want to see the welcome page on every refresh
    // Uncomment the following line to reset the welcome flag
    // localStorage.removeItem('hasSeenWelcome');
  }, []);

  return (
    <Suspense fallback={<div className="w-screen h-screen flex items-center justify-center">Loading...</div>}>
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
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/video-test" element={<VideoTest />} />
        <Route path="/index" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
