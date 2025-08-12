import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Users, UserCheck, ExternalLink, Heart, Shield, MessageCircle, Clock } from "lucide-react";

export function TherapistDirectory() {
  const handleP2PClick = () => {
    window.open("https://placeholder-p2p.com", "_blank");
  };

  const handleTherapistClick = () => {
    window.open("https://beinglagom.detalks.com", "_blank");
  };

  return (
    <section className="py-20 bg-[#fffbf5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Find Your People
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with trauma-trained peers, therapists, and coaches who understand the unique challenges of healthcare work. 
              Every conversation begins with safety.
            </p>
          </div>

          {/* Support Path Information */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-4 bg-green-50 border-green-200">
              <div className="flex justify-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h4 className="font-medium text-green-800 mb-1">Green Path</h4>
              <p className="text-sm text-green-700">Self-help tools, check-ins, preventive resources</p>
            </Card>
            <Card className="text-center p-4 bg-yellow-50 border-yellow-200">
              <div className="flex justify-center mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
              <h4 className="font-medium text-yellow-800 mb-1">Yellow Path</h4>
              <p className="text-sm text-yellow-700">Professional therapy matching with vetted therapists</p>
            </Card>
            <Card className="text-center p-4 bg-red-50 border-red-200">
              <div className="flex justify-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <h4 className="font-medium text-red-800 mb-1">Red Path</h4>
              <p className="text-sm text-red-700">Immediate crisis support, psychiatrist connection</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* P2P Directory Card */}
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Peer-to-Peer Directory</CardTitle>
                <CardDescription className="text-base">
                  Connect with colleagues who "get it" - share experiences and build community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <MessageCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Share experiences with colleagues who understand</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Learn coping strategies from peers</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Reduce isolation and build community</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Practice conversations in a safe space</span>
                  </li>
                </ul>
                <Button 
                  onClick={handleP2PClick}
                  size="lg" 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Connect with Peers
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Therapist Directory Card */}
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <UserCheck className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Therapist Directory</CardTitle>
                <CardDescription className="text-base">
                  Trauma-trained professionals who understand healthcare worker challenges
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <UserCheck className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Licensed and vetted mental health professionals</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Specialized in healthcare worker trauma and burnout</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Confidential and trauma-informed care</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Virtual and in-person options available</span>
                  </li>
                </ul>
                <Button 
                  onClick={handleTherapistClick}
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Find a Therapist
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-medium text-primary mb-2">Not sure which path is right for you?</h3>
              <p className="text-muted-foreground mb-4">
                Take our triage assessment to get personalized recommendations for your support journey.
              </p>
              <Button 
                variant="outline" 
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