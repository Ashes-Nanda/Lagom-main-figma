import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink } from "lucide-react";

export function SupportPathSection() {
  const handleP2PClick = () => {
    window.open("https://placeholder-p2p.com", "_blank");
  };

  const supportPaths = [
    {
      id: "green",
      title: "Green Path: Prevent & Protect",
      description:
        "Self-paced tools, check-ins, and resources to help you stay balanced and grounded before burnout hits.",
      buttonText: "Explore Self-Help Tools",
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      descColor: "text-green-700",
      dotColor: "bg-green-500",
    },
    {
      id: "yellow",
      title: "Yellow Path: Therapy Matching",
      description:
        "Need more support? We'll match you with a vetted therapist who gets the unique stress of healthcare work.",
      buttonText: "Find a Therapist Who Gets It",
      color: "yellow",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
      descColor: "text-yellow-700",
      dotColor: "bg-yellow-500",
    },
    {
      id: "red",
      title: "Red Path: Urgent Support",
      description:
        "If you're in crisis or need to speak to a psychiatrist urgently, we've got you. You're not alone.",
      buttonText: "Access Immediate Help",
      color: "red",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      descColor: "text-red-700",
      dotColor: "bg-red-500",
    },
  ];

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-8">
            <h2 className="typography-responsive-h2 text-primary mb-4">
              Choose Your Support Path
            </h2>
            <p className="typography-body-large text-muted-foreground max-w-4xl mx-auto">
              Whether you need a quick check-in, someone to talk to, or just
              space to breathe - we've built different support tracks just for
              healthcare professionals to find their balance. No pressure. No
              judgment. Just options that meet you where you are.
            </p>
          </div>

          {/* Support Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {supportPaths.map((path) => (
              <Card
                key={path.id}
                className={`min-h-[280px] cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${path.bgColor} ${path.borderColor} border-2 flex flex-col`}
              >
                <CardHeader className="text-center pb-4 flex-shrink-0">
                  <div className="flex justify-center mb-4 h-4">
                    <div
                      className={`w-4 h-4 ${path.dotColor} rounded-full`}
                    ></div>
                  </div>
                  <CardTitle
                    className={`typography-h4 ${path.textColor} mb-2 min-h-[3rem] flex items-center justify-center`}
                  >
                    {path.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow text-center">
                  <p
                    className={`typography-body-small ${path.descColor} mb-6 flex-grow min-h-[4rem] flex items-start justify-center`}
                  >
                    {path.description}
                  </p>
                  <Button
                    className={`w-full ${path.bgColor} ${path.textColor} hover:opacity-80 border ${path.borderColor} mt-auto`}
                    variant="outline"
                  >
                    👉 {path.buttonText}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* P2P Directory Card */}
            <Card className="min-h-[280px] cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-blue-50 border-blue-200 border-2 flex flex-col">
              <CardHeader className="text-center pb-4 flex-shrink-0">
                <div className="flex justify-center mb-4 h-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
                <CardTitle className="typography-h4 text-blue-800 mb-2 min-h-[3rem] flex items-center justify-center">
                  Peer-to-Peer Support
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow text-center">
                <p className="typography-body-small text-blue-700 mb-6 flex-grow min-h-[4rem] flex items-start justify-center">
                  Sometimes, you just want to talk to someone who understands.
                  Connect with fellow HCPs in safe, peer-led spaces.
                </p>
                <Button
                  onClick={handleP2PClick}
                  className="w-full bg-blue-50 text-blue-800 hover:opacity-80 border border-blue-200 mt-auto"
                  variant="outline"
                >
                  👉 Talk to a Peer
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Triage Assessment CTA */}
          <div className="text-center">
            <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="typography-h4 text-primary mb-3">
                Not sure which path is right for you?
              </h3>
              <p className="typography-body text-muted-foreground mb-6">
                Take our triage assessment to get personalized recommendations
                for your support journey.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://forms.gle/VW2ESGsyT1yAzvgC8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Triage Assessment
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
