import { useMemo } from 'react';
import { StandardCard } from "./ui/StandardCard";
import { Button } from "./ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { ActiveFilter } from "./ui/FilterPanel";

interface EventsSectionProps {
  searchQuery?: string;
  activeFilters?: ActiveFilter[];
}

export function EventsSection({ searchQuery = '', activeFilters = [] }: EventsSectionProps) {
  const events = [
    {
      id: 1,
      title: "Mindful Nature Retreat",
      description: "A weekend getaway focused on mindfulness and reconnecting with nature. This immersive experience combines guided meditation, nature walks, and group discussions to help healthcare workers find peace and restore their mental well-being in a supportive environment.",
      date: "March 15-17, 2025",
      time: "Friday 6 PM - Sunday 4 PM",
      location: "Redwood National Park, CA",
      capacity: "20 participants",
      price: "$299",
      category: "Retreat",
      categoryId: "retreat",
      locationId: "california",
      costId: "paid",
      statusId: "open",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop",
      status: "Open"
    },
    {
      id: 2,
      title: "Stress Management Workshop",
      description: "Learn evidence-based techniques for managing workplace stress and preventing burnout. This interactive workshop covers cognitive behavioral strategies, mindfulness techniques, and practical tools you can implement immediately in your daily work routine.",
      date: "March 8, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      capacity: "50 participants",
      price: "Free",
      category: "Workshop",
      categoryId: "workshop",
      locationId: "virtual",
      costId: "free",
      statusId: "open",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      status: "Open"
    },
    {
      id: 3,
      title: "Burnout Recovery Support Group",
      description: "Peer support group for healthcare workers experiencing burnout. Share experiences, learn coping strategies, and connect with colleagues who understand the unique challenges of healthcare work in a safe, confidential environment.",
      date: "Every Wednesday",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      capacity: "12 participants",
      price: "Free",
      category: "Support Group",
      categoryId: "support-group",
      locationId: "virtual",
      costId: "free",
      statusId: "ongoing",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop",
      status: "Ongoing"
    },
    {
      id: 4,
      title: "Yoga for Healthcare Workers",
      description: "Gentle yoga sessions designed specifically for tired bodies and stressed minds of healthcare professionals. Focus on poses that counteract long hours of standing and sitting, with breathing techniques for stress relief.",
      date: "March 12, 2025",
      time: "6:30 PM - 7:30 PM",
      location: "San Francisco, CA",
      capacity: "15 participants",
      price: "$25",
      category: "Wellness",
      categoryId: "wellness",
      locationId: "california",
      costId: "paid",
      statusId: "almost-full",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      status: "Almost Full"
    },
    {
      id: 5,
      title: "Resilience Building Webinar",
      description: "Building emotional resilience in high-stress healthcare environments through evidence-based psychological techniques and practical strategies for maintaining mental health during challenging times.",
      date: "March 20, 2025",
      time: "12:00 PM - 1:00 PM",
      location: "Virtual Event",
      capacity: "100 participants",
      price: "Free",
      category: "Webinar",
      categoryId: "webinar",
      locationId: "virtual",
      costId: "free",
      statusId: "open",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
      status: "Open"
    },
    {
      id: 6,
      title: "Art Therapy Session",
      description: "Express yourself through creative art therapy techniques designed to help process emotions and reduce stress. No artistic experience required - just bring an open mind and willingness to explore creative expression as a healing tool.",
      date: "March 25, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Chicago, IL",
      capacity: "8 participants",
      price: "$45",
      category: "Therapy",
      categoryId: "therapy",
      locationId: "chicago",
      costId: "paid",
      statusId: "open",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=200&fit=crop",
      status: "Open"
    }
  ];

  // Filter and search logic
  const filteredEvents = useMemo(() => {
    let filtered = events;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
      );
    }

    // Apply active filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter(event => {
        return activeFilters.every(filter => {
          switch (filter.groupId) {
            case 'category':
              return event.categoryId === filter.optionId;
            case 'location':
              return event.locationId === filter.optionId;
            case 'cost':
              return event.costId === filter.optionId;
            case 'status':
              return event.statusId === filter.optionId;
            default:
              return true;
          }
        });
      });
    }

    return filtered;
  }, [searchQuery, activeFilters]);



  // No results component
  const NoResults = () => (
    <div className="text-center py-12">
      <div className="text-muted-foreground mb-4">
        <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No events found</h3>
      <p className="text-muted-foreground mb-4">
        Try adjusting your search terms or filters to find events that match your interests.
      </p>
    </div>
  );

  return (
    <section id="events" className="bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {filteredEvents.length === 0 ? (
          <NoResults />
        ) : (
          <>
            {/* Results count */}
            <div className="mb-6 text-center">
              <p className="text-muted-foreground">
                Showing {filteredEvents.length} of {events.length} events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <StandardCard
                  key={event.id}
                  title={event.title}
                  description={event.description}
                  image={event.image}
                  category={event.category}
                  badges={[
                    {
                      text: event.status,
                      variant: "default",
                      className: event.status === "Open" 
                        ? "bg-green-100 text-green-800 border-green-200"
                        : event.status === "Almost Full"
                        ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                        : event.status === "Ongoing"
                        ? "bg-blue-100 text-blue-800 border-blue-200"
                        : ""
                    }
                  ]}
                  metadata={[
                    {
                      icon: <Calendar className="w-4 h-4 text-accent" />,
                      text: event.date
                    },
                    {
                      icon: <Clock className="w-4 h-4 text-accent" />,
                      text: event.time
                    },
                    {
                      icon: <MapPin className="w-4 h-4 text-accent" />,
                      text: event.location
                    },
                    {
                      icon: <Users className="w-4 h-4 text-accent" />,
                      text: event.capacity
                    }
                  ]}
                  price={event.price}
                  actions={[
                    {
                      text: "Register",
                      variant: "default",
                      size: "sm",
                      href: "https://forms.gle/EventRegistration789",
                      className: "bg-accent text-accent-foreground hover:bg-accent/90"
                    }
                  ]}
                  expandable={true}
                  maxDescriptionLength={120}
                />
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
          </>
        )}
      </div>
    </section>
  );
}