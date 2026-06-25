import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import VFX from "./pages/VFX";
import RealEstateMartech from "./pages/RealEstateMartech";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BrandSolutions from "./pages/BrandSolutions";
import MotionPictures from "./pages/MotionPictures";

const queryClient = new QueryClient();

const App = () => (
    <HelmetProvider>
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/vfx" element={<VFX />} />
                        <Route path="/real-estate" element={<RealEstateMartech />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/awards" element={<Awards />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/brand-solutions" element={<BrandSolutions />} />
                        <Route path="/motion-pictures" element={<MotionPictures />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    </HelmetProvider>
);

export default App;
