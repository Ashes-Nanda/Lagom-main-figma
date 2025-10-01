import { StandardCard } from "./ui/StandardCard";
import { Button } from "./ui/button";
import { Calendar, MapPin, Clock, CalendarX } from "lucide-react";
import { LagomGallery } from "./LagomGallery";

export function EventsSection() {
  // For now, all events are moved to recent events
  // Upcoming events array is empty to show the fallback message
  const upcomingEvents: any[] = [];
  
  const recentEvents = [
    {
      id: 1,
      title: "Healing Circle Bangalore",
      description:
        "A nurturing space to simply be, surrounded by people who understand your journey. Come as you are - leave feeling lighter!",
      date: "August 17, 2025",
      time: "3:00 PM - 7:00 PM",
      location: "Bangalore, India",
      price: "Free",
      category: "Healing Circle",
      image: "/events/1.png",
      status: "Completed",
      registrationUrl: "https://forms.gle/aEBVRTvV1swgRD178",
    },
    {
      id: 2,
      title: "Healing Circle Mumbai",
      description:
        "A nurturing space to simply be, surrounded by people who understand your journey. Come as you are - leave feeling lighter!",
      date: "August 20, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Mumbai, India",
      price: "Free",
      category: "Healing Circle",
      image: "/events/2.png",
      status: "Completed",
      registrationUrl: "https://forms.gle/m16iNNMbDeRDehxHA",
    },
    {
      id: 3,
      title: "Healing Circle Ahmedabad",
      description:
        "A nurturing space to simply be, surrounded by people who understand your journey. Come as you are - leave feeling lighter!",
      date: "August 23, 2025",
      time: "3:00 PM - 7:00 PM",
      location: "Ahmedabad, India",
      price: "Free",
      category: "Healing Circle",
      image: "/events/3.png",
      status: "Completed",
      registrationUrl: "https://forms.gle/8jVxrZ1MsbRfGzDcA",
    },
    {
      id: 4,
      title: "Mantra Meditation",
      description:
        "Experience the healing power of mantra meditation designed specifically for healthcare workers. Learn ancient techniques to calm the mind, reduce stress, and find inner peace through guided meditation practice.",
      date: "August 11, 2025",
      time: "7:00 PM - 8:00 PM",
      location: "Virtual Event",
      price: "Free",
      category: "Meditation",
      image: "/events/5.png",
      status: "Completed",
    },
    {
      id: 5,
      title: "Book Club",
      description:
        "Join our healthcare worker book club where we explore literature that speaks to the healthcare experience. Discuss books that offer insights into healing, resilience, and the human experience in medicine.",
      date: "Monthly",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Event",
      price: "Free",
      category: "Book Club",
      image: "/events/4.png",
      status: "Completed",
    },
  ];

  const EmptyEventsMessage = ({ type }: { type: 'upcoming' | 'recent' }) => (
    <div className="text-center py-16 px-4">
      <div className="max-w-md mx-auto">
        <CalendarX className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          No {type} events
        </h3>
        <p className="text-gray-500 mb-6">
          {type === 'upcoming' 
            ? "We're planning something special! Check back soon for upcoming events and workshops."
            : "No recent events to display at the moment."
          }
        </p>
        <Button 
          variant="outline" 
          className="border-accent text-accent hover:bg-accent hover:text-white"
          asChild
        >
          <a
            href="https://forms.gle/EventUpdates456"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Notified
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <section id="events" className="bg-[#fffbf5] pt-2 pb-8">
      {/* Lagom Gallery */}
      <LagomGallery />
      
      <div className="max-w-6xl mx-auto px-4 -mt-4">

        {/* Upcoming Events Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us for our next healing gatherings
            </p>
          </div>
          
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
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
                      className:
                        event.status === "Open"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : event.status === "Almost Full"
                          ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                          : "bg-blue-100 text-blue-800 border-blue-200",
                    },
                  ]}
                  metadata={[
                    {
                      icon: <Calendar className="w-4 h-4 text-accent" />,
                      text: event.date,
                    },
                    {
                      icon: <Clock className="w-4 h-4 text-accent" />,
                      text: event.time,
                    },
                    {
                      icon: <MapPin className="w-4 h-4 text-accent" />,
                      text: event.location,
                    },
                  ]}
                  price={event.price}
                  actions={[
                    {
                      text: "Register Now",
                      variant: "default",
                      size: "sm",
                      href: event.registrationUrl || "https://forms.gle/EventRegistration789",
                      className: "bg-accent text-accent-foreground hover:bg-accent/90",
                    },
                  ]}
                  expandable={true}
                  maxDescriptionLength={120}
                />
              ))}
            </div>
          ) : (
            <EmptyEventsMessage type="upcoming" />
          )}
        </div>

        {/* Recent Events Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
              Recent Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Moments of healing and connection we've shared
            </p>
          </div>
          
          {recentEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentEvents.map((event) => (
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
                      className: "bg-gray-100 text-gray-800 border-gray-200",
                    },
                  ]}
                  metadata={[
                    {
                      icon: <Calendar className="w-4 h-4 text-accent" />,
                      text: event.date,
                    },
                    {
                      icon: <Clock className="w-4 h-4 text-accent" />,
                      text: event.time,
                    },
                    {
                      icon: <MapPin className="w-4 h-4 text-accent" />,
                      text: event.location,
                    },
                  ]}
                  price={event.price}
                  expandable={true}
                  maxDescriptionLength={120}
                />
              ))}
            </div>
          ) : (
            <EmptyEventsMessage type="recent" />
          )}
        </div>

        {/* Bottom Actions */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="mr-4" asChild>
            <a
              href="https://forms.gle/AllEvents123"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Events
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <a
              href="https://forms.gle/EventUpdates456"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to Updates
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
