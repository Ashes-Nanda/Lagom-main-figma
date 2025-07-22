import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BookOpen, Headphones, Play, Download, Heart, Brain, Zap } from "lucide-react";

export function SelfHelpResources() {
  const resources = {
    articles: [
      {
        title: "Managing Burnout: A Guide for Healthcare Workers",
        description: "Practical strategies to recognize and address burnout symptoms",
        duration: "8 min read",
        category: "Burnout",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop"
      },
      {
        title: "Building Resilience in High-Stress Environments",
        description: "Evidence-based techniques for developing emotional resilience",
        duration: "12 min read",
        category: "Resilience",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop"
      },
      {
        title: "Sleep Hygiene for Night Shift Workers",
        description: "Optimize your sleep schedule for better mental health",
        duration: "6 min read",
        category: "Sleep",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=200&fit=crop"
      }
    ],
    podcasts: [
      {
        title: "The Mindful Medic",
        description: "Weekly discussions on mindfulness in healthcare",
        duration: "45 min episodes",
        category: "Mindfulness",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=200&fit=crop"
      },
      {
        title: "Healing the Healer",
        description: "Stories of recovery and resilience from healthcare workers",
        duration: "30 min episodes",
        category: "Stories",
        image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=200&fit=crop"
      }
    ],
    videos: [
      {
        title: "5-Minute Stress Relief Meditation",
        description: "Quick meditation for busy healthcare professionals",
        duration: "5 min",
        category: "Meditation",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
      },
      {
        title: "Breathing Techniques for Anxiety",
        description: "Simple breathing exercises to manage acute stress",
        duration: "8 min",
        category: "Breathing",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=200&fit=crop"
      }
    ]
  };

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Self-Help Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Curated tools and content to support your mental wellness journey
            </p>
          </div>

          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="articles" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="podcasts" className="flex items-center gap-2">
                <Headphones className="w-4 h-4" />
                Podcasts
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.articles.map((article, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{article.duration}</span>
                      </div>
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <CardDescription>{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="podcasts" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.podcasts.map((podcast, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img
                        src={podcast.image}
                        alt={podcast.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {podcast.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{podcast.duration}</span>
                      </div>
                      <CardTitle className="text-lg">{podcast.title}</CardTitle>
                      <CardDescription>{podcast.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-2">
                        <Button className="flex-1">
                          <Headphones className="w-4 h-4 mr-2" />
                          Listen
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.videos.map((video, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                      <img
                        src={video.image}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <Button size="icon" className="w-16 h-16 rounded-full">
                          <Play className="w-6 h-6" />
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {video.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{video.duration}</span>
                      </div>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Watch Video
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Access Tools */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Quick Wellness Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="mb-2">Mood Tracker</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Track your daily mood and identify patterns
                </p>
                <Button variant="outline" className="w-full">
                  Start Tracking
                </Button>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Brain className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="mb-2">Guided Meditation</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  5-minute guided sessions for instant calm
                </p>
                <Button variant="outline" className="w-full">
                  Start Session
                </Button>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="mb-2">Energy Boost</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Quick exercises to boost your energy levels
                </p>
                <Button variant="outline" className="w-full">
                  Get Energized
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}