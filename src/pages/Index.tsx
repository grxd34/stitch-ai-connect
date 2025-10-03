import { Button } from "@/components/ui/button";
import { Scissors, MapPin, User, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-tailoring.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-secondary" />
            <span className="text-xl font-bold text-primary">TailorConnect</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Sign In
            </Button>
            <Button 
              className="bg-gradient-accent text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Professional tailoring" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Connect with Expert Tailors Near You
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get custom-made clothing with AI-powered body measurements and local professional tailors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground shadow-glow hover:opacity-90 transition-smooth text-lg px-8"
                onClick={() => navigate("/customer-signup")}
              >
                <User className="mr-2 h-5 w-5" />
                I Need a Tailor
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth text-lg px-8"
                onClick={() => navigate("/tailor-signup")}
              >
                <Store className="mr-2 h-5 w-5" />
                I'm a Tailor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* For Customers */}
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center mb-6">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Find Nearby Tailors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover professional tailoring shops near you on an interactive map with ratings and specializations
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center mb-6">
                <User className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">AI Body Scan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use your phone or webcam to scan your body. Our AI extracts accurate measurements automatically
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center mb-6">
                <Scissors className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Get Custom Made</h3>
              <p className="text-muted-foreground leading-relaxed">
                Send your request to tailors, track progress, and receive perfectly fitted custom clothing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers and professional tailors on our platform
          </p>
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground shadow-glow hover:opacity-90 transition-smooth text-lg px-8"
            onClick={() => navigate("/signup")}
          >
            Create Your Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 TailorConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;