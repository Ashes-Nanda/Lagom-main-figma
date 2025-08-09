import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";
import { PhoneCall, MessageSquare, AlertTriangle } from "lucide-react";
import { CountrySearch } from "./ui/CountrySearch";

export function CrisisSupport() {

  return (
    <section id="crisis-support" className="py-20 bg-destructive/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              You Are Not Alone – Crisis Support for Healthcare Professionals
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              If you are feeling overwhelmed, unsafe, or in emotional distress, help is here for you — right now.
            </p>
            <p className="text-lg font-medium text-primary">
              You deserve the same care you give to others.
            </p>
          </div>

          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
            <AlertDescription className="text-red-800 flex items-center flex-wrap gap-1">
              <span><strong>If you're currently in Ahmedabad & need to urgently refer someone:</strong> On-call Psychiatrist: Dr Nilima Shah</span>
              <Button 
                variant="link" 
                className="p-0 h-auto text-red-600 underline font-semibold ml-1"
                onClick={() => window.open("tel:+919979880789", "_self")}
              >
                +91 99798 80789
              </Button>
            </AlertDescription>
          </Alert>

          {/* Section Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              1. Immediate Help – One Tap to Call/Text
            </h3>
            <p className="text-muted-foreground">
              Buttons are large, color-coded, and mobile-friendly for instant dialing
            </p>
          </div>

          {/* Emergency Contacts by Country */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  🇺🇸 United States
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-foreground leading-relaxed">
                  <PhoneCall className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                  <span>Call or Text <span className="font-bold">988</span> – Suicide & Crisis Lifeline</span>
                </div>
                <div className="flex items-center text-sm text-foreground leading-relaxed">
                  <MessageSquare className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Text HOME to <span className="font-bold">741741</span> – Crisis Text Line</span>
                </div>
                <div className="flex items-center text-sm text-foreground leading-relaxed">
                  <PhoneCall className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                  <span>Call <span className="font-bold">1-800-662-4357</span> – SAMHSA Mental Health</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  🇮🇳 India
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-foreground leading-relaxed">
                  <PhoneCall className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                  <span>Call <span className="font-bold">+91 95822 16860</span> – Snehi Helpline</span>
                </div>
                <div className="flex items-center text-sm text-foreground leading-relaxed">
                  <PhoneCall className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Call <span className="font-bold">+91 98204 66726</span> – AASRA</span>
                </div>
                <div className="flex items-center text-sm text-foreground leading-relaxed">
                  <PhoneCall className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                  <span>Call <span className="font-bold">1860 266 2345</span> – Vandrevala Foundation</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  🇬🇧 United Kingdom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-foreground leading-relaxed">
                  <PhoneCall className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                  <span>Call <span className="font-bold">116 123</span> – Samaritans</span>
                </div>
                <div className="flex items-center text-sm text-foreground leading-relaxed">
                  <MessageSquare className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Text <span className="font-bold">85258</span> – Shout Crisis Text Line</span>
                </div>
                <div className="flex items-center text-sm text-foreground leading-relaxed">
                  <PhoneCall className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                  <span>Call <span className="font-bold">111</span> – NHS Mental Health Helpline</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Find My Country */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Find Crisis Support in Your Country
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Search for your country to find local crisis support numbers and resources
            </p>
            <CountrySearch />
          </div>

          {/* Healthcare Professional Support */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              2. For Healthcare Professionals – Talk to Someone Who Gets It
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Buttons link to Being.Lagom's specialised services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full">
                <CardContent className="p-6 text-center flex flex-col flex-grow">
                  <div className="text-4xl mb-4">👥</div>
                  <h4 className="font-semibold mb-2">Peer-to-Peer Network</h4>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Speak with another HCP trained in listening and support.
                  </p>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto"
                    asChild
                  >
                    <a href="https://forms.gle/JzUp8ch12umkSvDM9" target="_blank" rel="noopener noreferrer">
                      Connect with a Peer
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardContent className="p-6 text-center flex flex-col flex-grow">
                  <div className="text-4xl mb-4">🧠</div>
                  <h4 className="font-semibold mb-2">Trauma-Trained Professional Support</h4>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Confidential sessions with mental health professionals who understand healthcare culture.
                  </p>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto"
                    asChild
                  >
                    <a href="https://forms.gle/gk3rPYC7PCkHFEp97" target="_blank" rel="noopener noreferrer">
                      Book Professional Support
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardContent className="p-6 text-center flex flex-col flex-grow">
                  <div className="text-4xl mb-4">🩺</div>
                  <h4 className="font-semibold mb-2">Burnout & Stress Relief Tools</h4>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Stanford PAM micro-practices for shift breaks and post-call recovery.
                  </p>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-auto"
                    asChild
                  >
                    <a href="https://pam.stanford.edu/" target="_blank" rel="noopener noreferrer">
                      Access Tools Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* If You're Not Ready to Talk */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              3. If You're Not Ready to Talk
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Read real stories from other healthcare workers who've been where you are.
                  </p>
                  <Button variant="outline" className="w-full mt-auto">
                    Read Stories
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Try a 3-minute guided grounding practice.
                  </p>
                  <Button variant="outline" className="w-full mt-auto">
                    Start Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Learn the signs of burnout, compassion fatigue, and moral injury — and what you can do next.
                  </p>
                  <Button variant="outline" className="w-full mt-auto">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tips for Using This Page Under Stress */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                4. Tips for Using This Page Under Stress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-muted-foreground">Choose the fastest option — calling is quickest.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-muted-foreground">If one line is busy, try another.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-muted-foreground">Save your country's helpline in your phone for future use.</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-muted-foreground">If you are at work, step outside or to a private space for the call.</span>
                </div>
              </div>
            </CardContent>
          </Card>


        </div>
      </div>
    </section>
  );
}