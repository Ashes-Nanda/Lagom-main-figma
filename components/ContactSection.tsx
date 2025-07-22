import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, MapPin, MessageSquare, Heart, Building } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              We're here to support you and welcome partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-accent" />
                    General Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-muted-foreground">Phone:</span>
                    <span className="ml-2 font-medium">1-800-LAGOM-1</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-muted-foreground">Email:</span>
                    <span className="ml-2 font-medium">support@being.lagom</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-muted-foreground">Hours:</span>
                    <span className="ml-2 font-medium">24/7 Support Available</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="w-5 h-5 mr-2 text-accent" />
                    Partnership Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We welcome partnerships with healthcare organizations, 
                    mental health professionals, and institutions who share our mission.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-muted-foreground">•</span>
                      <span className="ml-2 text-sm">Healthcare Organizations</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground">•</span>
                      <span className="ml-2 text-sm">Mental Health Professionals</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground">•</span>
                      <span className="ml-2 text-sm">Educational Institutions</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-muted-foreground">•</span>
                      <span className="ml-2 text-sm">Wellness Program Providers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-accent" />
                    Find Local Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Enter your location to find local mental health resources 
                    and emergency contacts in your area.
                  </p>
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Enter your city or ZIP code"
                      className="flex-1"
                    />
                    <Button variant="outline">
                      Find Resources
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Partnership Inquiry Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-accent" />
                  Partnership Inquiry
                </CardTitle>
                <CardDescription>
                  Join us in supporting healthcare workers worldwide
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Organization Name
                  </label>
                  <Input placeholder="Your Healthcare Organization" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Partnership Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select partnership type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare-org">Healthcare Organization</SelectItem>
                      <SelectItem value="mental-health">Mental Health Provider</SelectItem>
                      <SelectItem value="educational">Educational Institution</SelectItem>
                      <SelectItem value="wellness">Wellness Program</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us about your organization and how you'd like to partner with Being.Lagom..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Partnership Inquiry
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contacts by Region */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-center">
                Emergency Contacts by Region
              </CardTitle>
              <CardDescription className="text-center">
                Crisis helplines available in your area
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-2">United States</h4>
                  <div className="space-y-1 text-sm">
                    <p>Suicide Prevention: 988</p>
                    <p>Crisis Text: Text HOME to 741741</p>
                    <p>SAMHSA: 1-800-662-4357</p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Canada</h4>
                  <div className="space-y-1 text-sm">
                    <p>Crisis Services: 1-833-456-4566</p>
                    <p>Kids Help Phone: 1-800-668-6868</p>
                    <p>Text: 45645</p>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">United Kingdom</h4>
                  <div className="space-y-1 text-sm">
                    <p>Samaritans: 116 123</p>
                    <p>NHS Crisis: 111</p>
                    <p>Text: 85258</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}