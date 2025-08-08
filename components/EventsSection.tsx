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
      title: "Healing Circle Bangalore",
      description: "A safe space for healthcare workers to share experiences, process emotions, and find healing through community support. Join fellow HCPs in a guided circle focused on recovery and reconnection.",
      date: "August 17, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Bangalore, India",
      capacity: "15 participants",
      price: "Free",
      category: "Healing Circle",
      categoryId: "healing-circle",
      locationId: "bangalore",
      costId: "free",
      statusId: "open",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop",
      status: "Open"
    },
    {
      id: 2,
      title: "Healing Circle Mumbai",
      description: "Connect with healthcare professionals in Mumbai for a healing circle designed to provide emotional support and community connection. Share your journey and find strength in collective healing.",
      date: "August 20, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Mumbai, India",
      capacity: "15 participants",
      price: "Free",
      category: "Healing Circle",
      categoryId: "healing-circle",
      locationId: "mumbai",
      costId: "free",
      statusId: "open",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop",
      status: "Open"
    },
    {
      id: 3,
      title: "Healing Circle Ahmedabad",
      description: "Join healthcare workers in Ahmedabad for a supportive healing circle. This peer-led session focuses on sharing experiences, building resilience, and creating meaningful connections within the healthcare community.",
      date: "Coming Soon",
      time: "TBA",
      location: "Ahmedabad, India",
      capacity: "15 participants",
      price: "Free",
      category: "Healing Circle",
      categoryId: "healing-circle",
      locationId: "ahmedabad",
      costId: "free",
      statusId: "coming-soon",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=200&fit=crop",
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "Mantra Meditation",
      description: "Experience the healing power of mantra meditation designed specifically for healthcare workers. Learn ancient techniques to calm the mind, reduce stress, and find inner peace through guided meditation practice.",
      date: "August 11, 2025",
      time: "7:00 PM - 8:00 PM",
      location: "Virtual Event",
      capacity: "30 participants",
      price: "Free",
      category: "Meditation",
      categoryId: "meditation",
      locationId: "virtual",
      costId: "free",
      statusId: "open",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      status: "Open"
    },
    {
      id: 5,
      title: "Book Club",
      description: "Join our healthcare worker book club where we explore literature that speaks to the healthcare experience. Discuss books that offer insights into healing, resilience, and the human experience in medicine.",
      date: "Monthly",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      capacity: "20 participants",
      price: "Free",
      category: "Book Club",
      categoryId: "book-club",
      locationId: "virtual",
      costId: "free",
      statusId: "ongoing",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop",
      status: "Ongoing"
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