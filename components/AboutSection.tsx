import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Globe, Users, Award, Target } from "lucide-react";

export function AboutSection() {
  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder & Clinical Director",
      bio: "Emergency medicine physician with 15+ years experience",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      specialty: "Trauma & Burnout"
    },
    {
      name: "Dr. James Chen",
      role: "Chief Medical Officer",
      bio: "Psychiatrist specializing in healthcare worker mental health",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      specialty: "Psychiatry"
    },
    {
      name: "Maria Rodriguez",
      role: "Program Director",
      bio: "Licensed clinical social worker and former ICU nurse",
      image: "https://images.unsplash.com/photo-1594824871433-4bb9b5c1c37c?w=400&h=400&fit=crop&crop=face",
      specialty: "Social Work"
    }
  ];

  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "10,000+",
      description: "Healthcare workers supported"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "50+",
      description: "Countries reached"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "95%",
      description: "Satisfaction rate"
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "24/7",
      description: "Support availability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              About Being.Lagom
            </h2>
            <p className="text-xl text-muted-foreground">
              Our story, mission, and the people behind the movement
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To create a world where every healthcare professional has access to 
                  compassionate, specialized mental health support. We envision a future 
                  where seeking help is seen as a sign of strength, not weakness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Being.Lagom serves as a lifeline, lantern, and long-term movement, 
                  providing healthcare professionals with the tools, community, and 
                  support they need to thrive both personally and professionally.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <blockquote className="text-lg italic text-accent max-w-3xl mx-auto">
              "Lagom is a Swedish concept meaning 'just the right amount' - not too little, not too much, but exactly what's needed."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              To care for others, we must first learn to care for ourselves - not selfishly, but sustainably.
            </p>
          </div>
          <br></br>
          {/* Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Our Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Meet Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-3">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-accent">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {member.bio}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {member.specialty}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Global Movement */}
          <Card className="bg-gradient-to-r from-secondary/20 to-accent/20 border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">
                Join the Global Movement
              </CardTitle>
              <CardDescription className="text-lg">
                Being.Lagom is more than a platform—it's a movement spreading worldwide
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Healthcare workers around the globe are coming together to break the stigma 
                around mental health in medicine. Join thousands of professionals who are 
                choosing to prioritize their wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🇺🇸 United States
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🇨🇦 Canada
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🇬🇧 United Kingdom
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🇦🇺 Australia
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  🌍 50+ Countries
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}