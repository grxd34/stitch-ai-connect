import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, MapPin, Star, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Mock tailor shops data
const tailorShops = [
  {
    id: 1,
    name: "Elite Tailoring Co.",
    rating: 4.8,
    specialties: ["Suits", "Formal Wear"],
    location: "Downtown",
    distance: "0.5 miles",
  },
  {
    id: 2,
    name: "Fashion Stitches",
    rating: 4.6,
    specialties: ["Dresses", "Alterations"],
    location: "City Center",
    distance: "1.2 miles",
  },
  {
    id: 3,
    name: "Master Tailor Studio",
    rating: 4.9,
    specialties: ["Custom Suits", "Embroidery"],
    location: "West End",
    distance: "2.1 miles",
  },
];

const MapView = () => {
  const navigate = useNavigate();
  const [selectedShop, setSelectedShop] = useState<number | null>(null);

  const handleRequestTailor = (shopName: string) => {
    toast.success(`Request sent to ${shopName}!`);
    navigate("/customer-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/customer-dashboard")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-secondary" />
            <span className="text-xl font-bold text-primary">Find Tailors Near You</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Map Placeholder */}
        <Card className="mb-8 shadow-elegant overflow-hidden">
          <div className="h-96 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
            <div className="text-center z-10">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-xl font-semibold text-card-foreground mb-2">
                Interactive Map Coming Soon
              </p>
              <p className="text-muted-foreground">
                Map integration with Mapbox will be added with backend
              </p>
            </div>
            {/* Mock markers */}
            <div className="absolute top-20 left-1/4 w-8 h-8 bg-secondary rounded-full shadow-glow animate-bounce" />
            <div className="absolute top-32 right-1/3 w-8 h-8 bg-secondary rounded-full shadow-glow animate-bounce delay-100" />
            <div className="absolute bottom-24 left-1/2 w-8 h-8 bg-secondary rounded-full shadow-glow animate-bounce delay-200" />
          </div>
        </Card>

        {/* Tailor List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary mb-4">Nearby Tailoring Shops</h2>
          {tailorShops.map((shop) => (
            <Card
              key={shop.id}
              className={`shadow-card hover:shadow-elegant transition-smooth cursor-pointer ${
                selectedShop === shop.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedShop(shop.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      <Scissors className="h-5 w-5 text-secondary" />
                      {shop.name}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-semibold">{shop.rating}</span>
                        <span className="text-muted-foreground">• {shop.distance}</span>
                      </div>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="ml-4">
                    <MapPin className="h-3 w-3 mr-1" />
                    {shop.location}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {shop.specialties.map((specialty) => (
                    <Badge key={specialty} className="bg-primary/10 text-primary border-primary/20">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRequestTailor(shop.name);
                  }}
                  className="w-full bg-gradient-accent text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
                >
                  Send Tailoring Request
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapView;