import { Button } from "./ui/button";
import { PhoneCall, ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative py-10 lg:py-16 bg-gradient-to-br from-background via-secondary/10 to-accent/10">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-1">
            <div className="mt-[-25px] mb-[2px] flex justify-center">
              <img src="/trace.svg" alt="Being Lagom Logo" className="font-bold text-primary mb-[2px] w-auto drop-shadow-2xl" style={{height: '8rem', maxHeight: '12rem'}} />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 whitespace-nowrap">
              Mental Health Access and Equity Ecosystem
            </h1>
            
            <p className="text-lg lg:text-3xl font-semibold text-muted-foreground mb-7 max-w-3xl mx-auto whitespace-nowrap">
              By Healthcare Professionals, For Healthcare Professionals. 
            </p>

            <p className="text-lg font-bold text-center text-primary mb-4 max-w-3xl mx-auto">
              Health care professionals hold space for others’ pain, offer comfort in crisis, and show up every single day! While they tirelessly carry the weight of others’ wellbeing, who helps them carry theirs?
            </p>
            <p className="text-lg text-center text-muted-foreground mb-6 max-w-3xl mx-auto">
              At Being.Lagom, we offer compassionate, confidential, and trauma-informed support designed just for HCPs, by HCPs.
            </p>

            {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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
          {/* Removed extra spacing */}
          <br></br>

<p className="text-lg text-center font-semibold text-muted-foreground mb-6 max-w-3xl mx-auto">
If you are an HCP, looking for support, we’re here to help you take the first steps toward your own mental well-being - gently, respectfully, and without judgment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-center">
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

          

        </div>
      </div>
    </section>
  );
}