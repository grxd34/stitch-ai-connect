import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, User, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center">
              <Scissors className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-primary mb-2">Join TailorConnect</h1>
          <p className="text-muted-foreground">Choose how you'd like to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Customer Card */}
          <Card className="shadow-card hover:shadow-elegant transition-smooth cursor-pointer" onClick={() => navigate("/customer-signup")}>
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-10 w-10 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">I Need a Tailor</CardTitle>
              <CardDescription className="text-base">
                Find expert tailors near you and get custom-made clothing with AI body scanning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-accent text-primary-foreground shadow-glow hover:opacity-90 transition-smooth">
                Sign Up as Customer
              </Button>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Find nearby tailoring shops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>AI-powered body measurements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Track your orders in real-time</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Tailor Card */}
          <Card className="shadow-card hover:shadow-elegant transition-smooth cursor-pointer" onClick={() => navigate("/tailor-signup")}>
            <CardHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Store className="h-10 w-10 text-secondary" />
                </div>
              </div>
              <CardTitle className="text-2xl">I'm a Tailor</CardTitle>
              <CardDescription className="text-base">
                Connect with customers, manage requests, and grow your tailoring business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth">
                Sign Up as Tailor
              </Button>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Receive customer requests</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Manage your shop profile</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Build your reputation with reviews</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 text-center">
          <span className="text-muted-foreground">Already have an account? </span>
          <button
            onClick={() => navigate("/login")}
            className="text-primary hover:text-secondary transition-smooth font-medium"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;