import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { PhoneCall, MessageSquare, Clock, MapPin, AlertTriangle } from "lucide-react";

export function CrisisSupport() {
  const handleCallMeNow = () => {
    window.open("tel:988", "_self");
  };

  return (
    <section id="crisis-support" className="py-20 bg-destructive/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Crisis Support
            </h2>
            <p className="text-xl text-muted-foreground">
              If you're experiencing a mental health crisis, help is available immediately
            </p>
          </div>

          <Alert className="mb-8 border-destructive bg-destructive/10">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-destructive">
              If you're having thoughts of self-harm or suicide, please call emergency services (911) immediately 
              or go to your nearest emergency room.
            </AlertDescription>
          </Alert>

          {/* Call Me Now Button */}
          <div className="text-center mb-12">
            <Button
              onClick={handleCallMeNow}
              size="lg"
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 text-xl px-12 py-6 h-auto"
            >
              <PhoneCall className="w-6 h-6 mr-3" />
              Call Me Now - 988
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Connect with a crisis counselor immediately
            </p>
          </div>

          {/* Emergency Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PhoneCall className="w-5 h-5 mr-2 text-destructive" />
                  24/7 Crisis Hotlines
                </CardTitle>
                <CardDescription>
                  Free, confidential support available 24/7
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>National Suicide Prevention Lifeline</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("tel:988", "_self")}
                  >
                    988
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <span>Crisis Text Line</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("sms:741741?body=HOME", "_self")}
                  >
                    Text HOME to 741741
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <span>SAMHSA National Helpline</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("tel:1-800-662-4357", "_self")}
                  >
                    1-800-662-4357
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <span>National Domestic Violence Hotline</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open("tel:1-800-799-7233", "_self")}
                  >
                    1-800-799-7233
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-accent" />
                  Online Support
                </CardTitle>
                <CardDescription>
                  Chat with trained counselors online
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <a href="https://forms.gle/VE5MmXh7AtRde6eP9" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Get Support Form
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <a href="https://calendly.com/being-lagom/" target="_blank" rel="noopener noreferrer">
                    <Clock className="w-4 h-4 mr-2" />
                    Schedule Callback
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  asChild
                >
                  <a href="https://pam.stanford.edu/" target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" />
                    Stanford PAM Resources
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Healthcare-Specific Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Healthcare Worker-Specific Support</CardTitle>
              <CardDescription>
                Resources designed specifically for medical professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Join Our Peer Network</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Connect with healthcare professionals who understand your challenges
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <a href="https://forms.gle/JzUp8ch12umkSvDM9" target="_blank" rel="noopener noreferrer">
                      Join P2P Support
                    </a>
                  </Button>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Professional Support Team</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Access our team of trauma-trained professionals
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <a href="https://forms.gle/gk3rPYC7PCkHFEp97" target="_blank" rel="noopener noreferrer">
                      Join Psych Network
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Philosophical Support */}
          <div className="mt-12 text-center">
            <blockquote className="text-lg italic text-accent max-w-3xl mx-auto">
              "To care for others, we must first learn to care for ourselves - not selfishly, but sustainably."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}