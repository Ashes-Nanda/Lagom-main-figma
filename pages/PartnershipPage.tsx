import { PageLayout } from "../components/layout";
import { BeingLagomFooter } from "../components/ui/footer";
import { BrainwaveDivider } from "../components/ui/BrainwaveDivider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Building, Users, Globe, Heart, Handshake, Target, Mail, Phone } from "lucide-react";

export function PartnershipPage() {
  return (
    <PageLayout withTopPadding={false} className="pt-8">
      <section id="partnership" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Partner With Us
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join us in transforming healthcare worker wellbeing. Together, we can create sustainable change and support those who care for others.
              </p>
            </div>

            {/* Partnership Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Building className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Institutional Partners</CardTitle>
                  <CardDescription>
                    Hospitals, medical schools, and healthcare organizations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Wellbeing program implementation</li>
                    <li>• Staff training and support</li>
                    <li>• Research collaboration</li>
                    <li>• Policy development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Handshake className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Corporate Partners</CardTitle>
                  <CardDescription>
                    Companies committed to healthcare worker wellbeing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Sponsorship opportunities</li>
                    <li>• Employee wellness programs</li>
                    <li>• CSR initiatives</li>
                    <li>• Technology partnerships</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Globe className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle>Global Partners</CardTitle>
                  <CardDescription>
                    International organizations and NGOs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Cross-border initiatives</li>
                    <li>• Knowledge sharing</li>
                    <li>• Resource development</li>
                    <li>• Advocacy campaigns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <BrainwaveDivider />

            {/* Why Partner With Us */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-primary text-center mb-8">
                Why Partner With Being.Lagom?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Proven Impact</h3>
                    <p className="text-muted-foreground">
                      We've supported over 1,200+ healthcare workers across 15+ countries with evidence-based interventions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">
                      Our multidisciplinary team includes physicians, psychologists, and healthcare professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Authentic Approach</h3>
                    <p className="text-muted-foreground">
                      We're healthcare workers supporting healthcare workers - we understand the challenges firsthand.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Global Reach</h3>
                    <p className="text-muted-foreground">
                      Our programs span multiple countries and cultures, with locally adapted solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Inquiry Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Let's Collaborate
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ready to make a difference? Fill out the form and we'll get back to you within 48 hours to discuss partnership opportunities.
                </p>
                
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">partnerships@being.lagom</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-accent" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">+91 99798 80789</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Partnership Inquiry</CardTitle>
                  <CardDescription>
                    Tell us about your organization and how you'd like to collaborate
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@organization.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Organization</label>
                    <Input placeholder="Your organization name" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Partnership Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="institutional">Institutional Partner</SelectItem>
                        <SelectItem value="corporate">Corporate Partner</SelectItem>
                        <SelectItem value="global">Global Partner</SelectItem>
                        <SelectItem value="research">Research Collaboration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your organization and how you'd like to partner with us..."
                      rows={4}
                    />
                  </div>
                  
                  <Button className="w-full">
                    Submit Partnership Inquiry
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <BeingLagomFooter />
    </PageLayout>
  );
}