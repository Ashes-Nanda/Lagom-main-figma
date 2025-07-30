import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Users, UserCheck, Heart, Shield, MessageCircle, Clock, ExternalLink } from "lucide-react";

export function SupportPathCards() {
  const supportOptions = [
    {
      id: "green-path",
      title: "Green Path",
      description: "Self-help tools, check-ins, and preventive resources for maintaining mental wellness",
      icon: Heart,
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      actionText: "Start Self-Help",
      actionLink: "/resources"
    },
    {
      id: "yellow-path",
      title: "Yellow Path", 
      description: "Professional therapy matching with vetted therapists who understand healthcare challenges",
      icon: UserCheck,
      color: "yellow",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
      actionText: "Find a Therapist",
      actionLink: "https://beinglagom.detalks.com"
    },
    {
      id: "red-path",
      title: "Red Path",
      description: "Immediate crisis support and psychiatrist connection for urgent mental health needs",
      icon: Shield,
      color: "red", 
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      actionText: "Get Crisis Support",
      actionLink: "/contact"
    },
    {
      id: "peer-support",
      title: "P2P Support",
      description: "Connect with colleagues who understand - share experiences and build community",
      icon: Users,
      color: "blue",
      bgColor: "bg-blue-50", 
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      actionText: "Connect with Peers",
      actionLink: "https://placeholder-p2p.com"
    }
  ];

  const handleCardClick = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-12">
            <h2 className="typography-responsive-h2 text-primary mb-4">
              Choose Your Support Path
            </h2>
            <p className="typography-body-large text-muted-foreground max-w-3xl mx-auto">
              Different ways to get support, all designed for healthcare professionals
            </p>
          </div>

          {/* Support Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <Card 
                  key={option.id}
                  className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${option.bgColor} ${option.borderColor} border-2`}
                  onClick={() => handleCardClick(option.actionLink)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className={`w-12 h-12 ${option.bgColor} rounded-full flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${option.textColor}`} />
                      </div>
                    </div>
                    <CardTitle className={`typography-h4 ${option.textColor} mb-2`}>
                      {option.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <p className={`typography-body-small ${option.textColor} mb-6 flex-grow`}>
                      {option.description}
                    </p>
                    <Button 
                      className={`w-full ${option.bgColor} ${option.textColor} hover:opacity-80 border ${option.borderColor}`}
                      variant="outline"
                    >
                      {option.actionText}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 