import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { PhoneCall, ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              🌟 A sanctuary for those who heal
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Mental Health Support for{" "}
              <span className="text-accent">Healthcare Workers</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              By Healthcare Professionals, For Healthcare Professionals. 
              Compassionate, confidential, and trauma-informed support for those who care for others.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
                asChild
              >
                <a href="https://forms.gle/VE5MmXh7AtRde6eP9" target="_blank" rel="noopener noreferrer">
                  <Heart className="w-5 h-5 mr-2" />
                  Get Support Now
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg"
                asChild
              >
                <Link to="/directory">
                  <Users className="w-5 h-5 mr-2" />
                  Find Your People
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-accent mr-2" />
                <span className="text-sm text-muted-foreground">
                  Confidential & Safe
                </span>
              </div>
              <div className="flex items-center">
                <PhoneCall className="w-5 h-5 text-accent mr-2" />
                <span className="text-sm text-muted-foreground">
                  24/7 Crisis Support
                </span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-accent mr-2" />
                <span className="text-sm text-muted-foreground">
                  Peer-to-Peer Network
                </span>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Healthcare Workers Supported</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Countries Reached</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Crisis Support</div>
            </div>
          </div>

          {/* Philosophical Quote */}
          <div className="mt-16 text-center">
            <blockquote className="text-lg italic text-accent max-w-3xl mx-auto">
              "Lagom is a Swedish concept meaning 'just the right amount' - not too little, not too much, but exactly what's needed."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              To care for others, we must first learn to care for ourselves - not selfishly, but sustainably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}