import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, MapPin, Camera, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [requests] = useState([
    {
      id: 1,
      tailorName: "Elite Tailoring Co.",
      service: "Custom Suit",
      status: "in-progress",
      date: "2025-03-15",
    },
    {
      id: 2,
      tailorName: "Fashion Stitches",
      service: "Dress Alteration",
      status: "pending",
      date: "2025-03-18",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-accent text-accent-foreground";
      case "in-progress": return "bg-primary text-primary-foreground";
      case "completed": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-secondary" />
            <span className="text-xl font-bold text-primary">TailorConnect</span>
          </div>
          <Button variant="ghost" onClick={() => navigate("/")}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Find tailors and manage your requests</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-card hover:shadow-elegant transition-smooth cursor-pointer" onClick={() => navigate("/map")}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Find Nearby Tailors</CardTitle>
                  <CardDescription>Browse shops on the map</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-smooth cursor-pointer" onClick={() => navigate("/body-scan")}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <CardTitle>AI Body Scan</CardTitle>
                  <CardDescription>Get accurate measurements</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* My Requests */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>My Tailoring Requests</CardTitle>
            <CardDescription>Track your orders and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {requests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-card transition-smooth"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground">{request.tailorName}</h3>
                    <p className="text-sm text-muted-foreground">{request.service}</p>
                    <p className="text-xs text-muted-foreground mt-1">Submitted: {request.date}</p>
                  </div>
                  <Badge className={getStatusColor(request.status)}>
                    {request.status.replace("-", " ")}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerDashboard;