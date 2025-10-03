import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Check, X, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const TailorDashboard = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([
    {
      id: 1,
      customerName: "John Smith",
      service: "Custom Suit",
      measurements: { chest: "40in", waist: "34in", height: "5'11\"" },
      notes: "Navy blue, peak lapel, two-button",
      status: "pending",
      date: "2025-03-15",
    },
    {
      id: 2,
      customerName: "Sarah Johnson",
      service: "Dress Alteration",
      measurements: { bust: "36in", waist: "28in", hips: "38in" },
      notes: "Hem length adjustment needed",
      status: "pending",
      date: "2025-03-18",
    },
  ]);

  const handleAccept = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "accepted" } : req
    ));
    toast.success("Request accepted! Customer will be notified.");
  };

  const handleReject = (id: number) => {
    setRequests(requests.filter(req => req.id !== id));
    toast.info("Request declined.");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-accent text-accent-foreground";
      case "accepted": return "bg-success text-success-foreground";
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
            <span className="text-xl font-bold text-primary">TailorConnect Pro</span>
          </div>
          <Button variant="ghost" onClick={() => navigate("/")}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Tailor Dashboard</h1>
          <p className="text-muted-foreground">Manage your incoming requests and customers</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">
                {requests.filter(r => r.status === "pending").length}
              </div>
              <div className="text-sm text-muted-foreground">Pending Requests</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-success mb-1">
                {requests.filter(r => r.status === "accepted").length}
              </div>
              <div className="text-sm text-muted-foreground">Accepted Orders</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-1">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Requests */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Customer Requests</CardTitle>
            <CardDescription>Review and respond to tailoring requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {requests.map((request) => (
                <div
                  key={request.id}
                  className="p-6 rounded-lg border border-border hover:shadow-card transition-smooth"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground">{request.customerName}</h3>
                        <p className="text-sm text-muted-foreground">{request.service}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(request.status)}>
                      {request.status}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium text-card-foreground mb-2">Measurements</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        {Object.entries(request.measurements).map(([key, value]) => (
                          <div key={key}>
                            <span className="capitalize">{key}:</span> {value}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-card-foreground mb-2">Special Notes</h4>
                      <p className="text-sm text-muted-foreground">{request.notes}</p>
                    </div>
                  </div>

                  {request.status === "pending" && (
                    <div className="flex gap-3">
                      <Button
                        onClick={() => handleAccept(request.id)}
                        className="bg-success text-success-foreground hover:opacity-90 transition-smooth"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Accept Request
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleReject(request.id)}
                        className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-smooth"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Decline
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TailorDashboard;