import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Users, UserCheck, ExternalLink, Heart, Shield, MessageCircle, Clock } from "lucide-react";

export function SupportPathSection() {
  const handleP2PClick = () => {
    window.open("https://placeholder-p2p.com", "_blank");
  };

  const handleTherapistClick = () => {
    window.open("https://beinglagom.detalks.com", "_blank");
  };

  const supportPaths = [
    {
      id: "green",
      title: "Green Path",
      description: "Self-help tools, check-ins, preventive resources",
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      descColor: "text-green-700",
      dotColor: "bg-green-500"
    },
    {
      id: "yellow",
      title: "Yellow Path",
      description: "Professional therapy matching with vetted therapists",
      color: "yellow",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
      descColor: "text-yellow-700",
      dotColor: "bg-yellow-500"
    },
    {
      id: "red",
      title: "Red Path",
      description: "Immediate crisis support, psychiatrist connection",
      color: "red",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      descColor: "text-red-700",
      dotColor: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-12">
            <h2 className="typography-responsive-h2 text-primary mb-4">
              Choose Your Support Path
            </h2>
            <p className="typography-body-large text-muted-foreground max-w-3xl mx-auto">
              Connect with trauma-trained peers, therapists, and coaches who understand the unique challenges of healthcare work. 
              Every conversation begins with safety.
            </p>
          </div>

          {/* Unified Support Path Grid - All cards in one balanced grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Support Path Cards - Green/Yellow/Red */}
            {supportPaths.map((path) => (
              <Card 
                key={path.id} 
                className={`text-center p-6 h-full ${path.bgColor} ${path.borderColor} hover:shadow-md transition-shadow`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-4 h-4 ${path.dotColor} rounded-full`}></div>
                </div>
                <h3 className={`typography-h4 ${path.textColor} mb-2`}>
                  {path.title}
                </h3>
                <p className={`typography-body-small ${path.descColor}`}>
                  {path.description}
                </p>
              </Card>
            ))}

            {/* P2P Directory Card */}
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50 h-full">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="typography-h3">Peer-to-Peer Directory</CardTitle>
                <CardDescription className="typography-body">
                  Connect with colleagues who "get it" - share experiences and build community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <ul className="space-y-3 text-muted-foreground flex-1">
                  <li className="flex items-start">
                    <MessageCircle className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Share experiences with colleagues who understand</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Learn coping strategies from peers</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Reduce isolation and build community</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Practice conversations in a safe space</span>
                  </li>
                </ul>
                <Button 
                  onClick={handleP2PClick}
                  size="lg" 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-auto"
                >
                  Connect with Peers
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Therapist Directory Card */}
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50 h-full">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <UserCheck className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="typography-h3">Therapist Directory</CardTitle>
                <CardDescription className="typography-body">
                  Trauma-trained professionals who understand healthcare worker challenges
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <ul className="space-y-3 text-muted-foreground flex-1">
                  <li className="flex items-start">
                    <UserCheck className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Licensed and vetted mental health professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Specialized in healthcare worker trauma and burnout</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Confidential and trauma-informed care</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>Virtual and in-person options available</span>
                  </li>
                </ul>
                <Button 
                  onClick={handleTherapistClick}
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto"
                >
                  Find a Therapist
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
                Take our triage assessment to get personalized recommendations for your support journey.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <a href="https://forms.gle/VW2ESGsyT1yAzvgC8" target="_blank" rel="noopener noreferrer">
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