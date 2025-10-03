import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, ArrowLeft, Ruler } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const BodyScan = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [measurements, setMeasurements] = useState<any>(null);

  const handleStartScan = () => {
    setIsScanning(true);
    // Simulate AI scanning process
    setTimeout(() => {
      setMeasurements({
        chest: "40 inches",
        waist: "34 inches",
        shoulders: "18 inches",
        armLength: "25 inches",
        height: "5'11\"",
      });
      setIsScanning(false);
      toast.success("Body scan complete! Measurements extracted.");
    }, 3000);
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
            <Camera className="h-6 w-6 text-secondary" />
            <span className="text-xl font-bold text-primary">AI Body Scan</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Get Accurate Measurements</h1>
          <p className="text-muted-foreground">
            Use your camera to scan your body. Our AI will extract precise measurements automatically.
          </p>
        </div>

        {/* Camera/Scan Area */}
        <Card className="shadow-elegant mb-8">
          <CardHeader>
            <CardTitle>Camera Scan</CardTitle>
            <CardDescription>
              Stand in good lighting and follow the on-screen instructions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center relative overflow-hidden">
              {!isScanning && !measurements && (
                <div className="text-center">
                  <Camera className="h-20 w-20 text-primary mx-auto mb-4" />
                  <p className="text-xl font-semibold text-card-foreground mb-2">
                    Ready to Scan
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Click the button below to start your body scan
                  </p>
                </div>
              )}

              {isScanning && (
                <div className="text-center">
                  <div className="relative">
                    <div className="w-32 h-32 border-4 border-secondary rounded-full border-t-transparent animate-spin mx-auto mb-4" />
                    <Ruler className="h-12 w-12 text-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <p className="text-xl font-semibold text-card-foreground mb-2">
                    Scanning in Progress...
                  </p>
                  <p className="text-muted-foreground">
                    Please stay still while we capture your measurements
                  </p>
                </div>
              )}

              {measurements && (
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-success flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-10 w-10 text-success-foreground" />
                  </div>
                  <p className="text-xl font-semibold text-card-foreground mb-2">
                    Scan Complete!
                  </p>
                  <p className="text-muted-foreground">
                    Your measurements have been extracted successfully
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 flex gap-3">
              {!measurements && !isScanning && (
                <Button
                  onClick={handleStartScan}
                  className="flex-1 bg-gradient-accent text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Start Body Scan
                </Button>
              )}
              {measurements && (
                <>
                  <Button
                    onClick={() => setMeasurements(null)}
                    variant="outline"
                    className="flex-1"
                  >
                    Scan Again
                  </Button>
                  <Button
                    onClick={() => navigate("/map")}
                    className="flex-1 bg-gradient-accent text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
                  >
                    Find Tailors
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Measurements Display */}
        {measurements && (
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Your Measurements</CardTitle>
              <CardDescription>AI-extracted body measurements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(measurements).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-4 rounded-lg border border-border"
                  >
                    <span className="font-medium text-card-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className="text-lg font-bold text-primary">{value as string}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Info Card */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-card-foreground mb-2">Note</h3>
            <p className="text-sm text-muted-foreground">
              AI body scanning will be implemented using MediaPipe or similar pose estimation libraries. 
              This demo shows the user interface and flow. Backend integration with Lovable Cloud will 
              enable storing and managing these measurements securely.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BodyScan;