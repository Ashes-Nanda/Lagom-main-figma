import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

export function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Mindful Nature Retreat",
      description: "A weekend getaway focused on mindfulness and reconnecting with nature",
      date: "March 15-17, 2025",
      time: "Friday 6 PM - Sunday 4 PM",
      location: "Redwood National Park, CA",
      capacity: "20 participants",
      price: "$299",
      category: "Retreat",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
      status: "Open"
    },
    {
      id: 2,
      title: "Stress Management Workshop",
      description: "Learn evidence-based techniques for managing workplace stress",
      date: "March 8, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      capacity: "50 participants",
      price: "Free",
      category: "Workshop",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      status: "Open"
    },
    {
      id: 3,
      title: "Burnout Recovery Support Group",
      description: "Peer support group for healthcare workers experiencing burnout",
      date: "Every Wednesday",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      capacity: "12 participants",
      price: "Free",
      category: "Support Group",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop",
      status: "Ongoing"
    },
    {
      id: 4,
      title: "Yoga for Healthcare Workers",
      description: "Gentle yoga sessions designed for tired bodies and stressed minds",
      date: "March 12, 2025",
      time: "6:30 PM - 7:30 PM",
      location: "San Francisco, CA",
      capacity: "15 participants",
      price: "$25",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      status: "Almost Full"
    },
    {
      id: 5,
      title: "Resilience Building Webinar",
      description: "Building emotional resilience in high-stress healthcare environments",
      date: "March 20, 2025",
      time: "12:00 PM - 1:00 PM",
      location: "Virtual Event",
      capacity: "100 participants",
      price: "Free",
      category: "Webinar",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      status: "Open"
    },
    {
      id: 6,
      title: "Art Therapy Session",
      description: "Express yourself through creative art therapy techniques",
      date: "March 25, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Chicago, IL",
      capacity: "8 participants",
      price: "$45",
      category: "Therapy",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
      status: "Open"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Open":
        return <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">Open</Badge>;
      case "Almost Full":
        return <Badge variant="default" className="bg-yellow-100 text-yellow-800 border-yellow-200">Almost Full</Badge>;
      case "Ongoing":
        return <Badge variant="default" className="bg-blue-100 text-blue-800 border-blue-200">Ongoing</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <section id="events" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Wellness Events & Programs
            </h2>
            <p className="text-xl text-muted-foreground">
              Curated programs designed specifically for healthcare workers' well-being and community building
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {event.category}
                    </Badge>
                    {getStatusBadge(event.status)}
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-accent" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-accent" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-accent" />
                    {event.capacity}
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-semibold text-primary">
                      {event.price}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                      asChild
                    >
                      <a href="https://forms.gle/EventRegistration789" target="_blank" rel="noopener noreferrer">
                        Register
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="mr-4"
              asChild
            >
              <a href="https://forms.gle/AllEvents123" target="_blank" rel="noopener noreferrer">
                View All Events
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <a href="https://forms.gle/EventUpdates456" target="_blank" rel="noopener noreferrer">
                Subscribe to Updates
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}