import { StandardCard } from "./ui/StandardCard";
import { Button } from "./ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export function EventsSection() {
  const events = [
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
      status: "Open",
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
      status: "Open",
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
      status: "Open",
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
      status: "Open",
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
      status: "Ongoing",
    },
  ];

  return (
    <section id="events" className="bg-[#FFFBF5] py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section - Reduced spacing */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Calling all Healthcare Professionals, Therapists and
            <br />
            Mental Health Advocates
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-3">
              You care for so many - now is the time to care for yourself ❤️
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Join the Being.Lagom team across 3 different cities in India for
              an evening of connection, restoration and community specially
              designed for those who give so much in the service of others! A
              nurturing space to simply be, surrounded by people who understand
              your journey.
            </p>
            <p className="text-xl font-semibold text-primary italic">
              Come as you are - leave feeling lighter!!
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
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
                      : event.status === "Ongoing"
                      ? "bg-blue-100 text-blue-800 border-blue-200"
                      : "",
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
                  href:
                    event.registrationUrl ||
                    "https://forms.gle/EventRegistration789",
                  className:
                    "bg-accent text-accent-foreground hover:bg-accent/90",
                },
              ]}
              expandable={true}
              maxDescriptionLength={120}
            />
          ))}
        </div>

        {/* Bottom Actions - Reduced spacing */}
        <div className="text-center mt-8">
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
