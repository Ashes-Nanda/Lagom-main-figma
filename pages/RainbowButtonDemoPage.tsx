import { RainbowButtonDemo } from "../components/ui/rainbow-button-demo";
import { RainbowButton } from "../components/ui/rainbow-button";
import { PageLayout, SectionContainer, ContentContainer } from "../components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Sparkles, Palette, Zap } from "lucide-react";

export function RainbowButtonDemoPage() {
  return (
    <PageLayout withTopPadding={true} spacing="md">
      <SectionContainer 
        spacing="lg" 
        size="xl"
        aria-label="Rainbow Button Component Demo"
      >
        <ContentContainer 
          spacing="normal" 
          centerContent={true}
          preventOverflow={true}
        >
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              UI Component Demo
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Rainbow Button Component
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An animated gradient button with rainbow effects, perfect for call-to-action elements
            </p>
          </div>

          {/* Demo Section */}
          <div className="space-y-12">
            {/* Basic Demo */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Basic Usage
                </CardTitle>
                <CardDescription>
                  The default rainbow button with animated gradient background
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <RainbowButtonDemo />
              </CardContent>
            </Card>

            {/* Variations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Variations
                </CardTitle>
                <CardDescription>
                  Different use cases and content examples
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center space-y-4">
                    <h4 className="font-medium text-primary">Call to Action</h4>
                    <RainbowButton>Get Started Today</RainbowButton>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h4 className="font-medium text-primary">Premium Feature</h4>
                    <RainbowButton>Upgrade to Pro</RainbowButton>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <h4 className="font-medium text-primary">Action Button</h4>
                    <RainbowButton>Join Community</RainbowButton>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <h4 className="font-medium text-primary">Disabled State</h4>
                  <RainbowButton disabled>Coming Soon</RainbowButton>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Implementation Guide</CardTitle>
                <CardDescription>
                  How to use the RainbowButton component in your project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-primary mb-3">Basic Usage:</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">
                      {`import { RainbowButton } from "@/components/ui/rainbow-button";

<RainbowButton onClick={handleClick}>
  Your Button Text
</RainbowButton>`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Features:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Animated rainbow gradient background
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Glowing blur effect underneath
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Dark mode support
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Accessibility compliant
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Customizable via className prop
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Best Use Cases:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Primary call-to-action buttons
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Premium feature highlights
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Special promotions or announcements
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2" />
                      Hero section action buttons
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContentContainer>
      </SectionContainer>
    </PageLayout>
  );
}