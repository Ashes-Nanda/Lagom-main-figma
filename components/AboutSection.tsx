import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Globe, Users, Award, Target, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import WorldMap from "./ui/world-map";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  specialty: string;
  socialLinks?: { platform: "linkedin" | "instagram"; url: string }[];
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  className?: string;
}

// Team members data for Being.Lagom
const teamMembers: TeamMember[] = [
  {
    name: "Dr. Vyshnavi Desiraju",
    role: "Medical doctor, Executive Director of Being.Lagom (Singapore)",
    bio: "BJMC Taskforce : Strategy Lead",
    imageUrl: "/assets/Vyshnavi_1.jpg",
    specialty: "Strategy & Leadership",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/vyshnavi-desiraju-b09b1799",
      },
    ],
  },
  {
    name: "Dr Raj Mistry",
    role: "IMA State Convener, Gujarat, BJMC",
    bio: "BJMC Taskforce : Operations Co-Lead (Ahmedabad)",
    imageUrl: "/assets/Raj.jpeg",
    specialty: "Operations",
    socialLinks: [
      {
        platform: "instagram",
        url: "https://www.instagram.com/dr_raj_mistry?igsh=MXpsYXZzY3p4dzEw",
      },
    ],
  },
  {
    name: "Dr Sunil Kumar",
    role: "Clinical Advisor",
    bio: "MBBS, MRCA, FCAI, FRSA, FBSLM, DipIBLM Anaesthesiologist | Foundation Programme Director (FY1) Morecambe Bay NHS Trust, UK",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQEu9QDWZ6OW2Q/profile-displayphoto-shrink_400_400/B4EZRkgOs4HMAg-/0/1736852959129?e=1757548800&v=beta&t=1caZUpg_WWMm6cFfTywoTzHRTDxM1oGfRaBKTtYv0J0",
    specialty: "Clinical Advisory",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/drsunilkumarlifestylemedicine/",
      },
    ],
  },
  {
    name: "Dr Raghumoy Gosh",
    role: "Project research scientist in Department of Hematology, PGI Chandigarh",
    bio: "Ops Lead in Being.Lagom, BJMC Taskforce : Operations Co-Lead (Psych team)",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C5103AQHp29dHnaaa7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1530876982749?e=1757548800&v=beta&t=UrEcgHJW1kG_1rg3UdpIsRmbHhM2jXQrfC5NuEqkrCw",
    specialty: "Research & Operations",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/raghumoyghosh751051a6/",
      },
    ],
  },
  {
    name: "Vanessa Yim",
    role: "Chartered Clinical Psychologist, Hong Kong/ UK",
    bio: "BJMC Taskforce : Clinical Triage Co-Lead",
    imageUrl: "/assets/vanessa_5.JPG",
    specialty: "Clinical Psychology",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/dr-vanessa-yim-a4220b10a/",
      },
    ],
  },
  {
    name: "Anuradha Kavuri",
    role: "Counselling Psychologist, Founder of Sumedha Centre",
    bio: "BJMC Taskforce : Clinical Protocol & Escalation Lead",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGyw9md4EKG4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721802767353?e=1757548800&v=beta&t=mrFbfAAXqqXr6CwtK_ILnUIcPt7_D9HQ177U5jWIu2w",
    specialty: "Counselling Psychology",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/anuradha-kavuri-75034591/",
      },
    ],
  },
  {
    name: "Dhwani Shah",
    role: "Counselling psychologist",
    bio: "BJMC Taskforce: Psych Volunteer Manager, Therapist Vetting & Quality Assurance",
    imageUrl: "/assets/Dhwani_7.jpg",
    specialty: "Quality Assurance",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/dhwani-shah-38063a5b/",
      },
    ],
  },
  {
    name: "Vamsi Pratap",
    role: "NestUp Space Founder, Business Development Head at Being.Lagom",
    bio: "BJMC Taskforce : Strategic Partnerships Lead",
    imageUrl: "/assets/Vamsi_07.jpeg",
    specialty: "Business Development",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/vamsi-pratap-b0a196ab/",
      },
    ],
  },
  {
    name: "Raviraj Jain",
    role: "Senior Manager at KPMG UK, Chartered Accountant",
    bio: "BJMC Taskforce : Fundraising Lead",
    imageUrl: "/assets/Ravi_27.jpeg",
    specialty: "Finance & Fundraising",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/raviraj-jain-aca-8098ba58/",
      },
    ],
  },
];

function Team2({
  title = "Meet Our Team",
  subtitle = "Our dedicated team of healthcare professionals and mental health experts working together to support healthcare workers worldwide.",
  members = teamMembers,
  className,
}: TeamProps) {
  return (
    <section
      className={`relative w-full overflow-hidden py-16 md:py-24 ${
        className || ""
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
        <div className="bg-primary/5 absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl" />
        <div className="bg-primary/10 absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <h2 className="from-foreground/80 via-foreground to-foreground/80 dark:from-foreground/70 dark:via-foreground dark:to-foreground/70 mb-4 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground md:text-lg">{subtitle}</p>
        </motion.div>

        {/* Team members grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {members.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * (index % 4) }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl"
    >
      {/* Image container */}
      <div className="bg-muted relative aspect-square overflow-hidden rounded-xl">
        <div className="from-background/80 absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <img
          src={member.imageUrl}
          alt={member.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          style={{
            objectPosition: "center top",
            minHeight: "100%",
            minWidth: "100%",
          }}
        />

        {/* Social links that appear on hover */}
        {member.socialLinks && (
          <div className="absolute right-0 bottom-4 left-0 z-20 flex justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {member.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-all"
              >
                {link.platform === "linkedin" && (
                  <Linkedin className="h-5 w-5" />
                )}
                {link.platform === "instagram" && (
                  <Instagram className="h-5 w-5" />
                )}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Name and role */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-primary text-sm">{member.role}</p>
        <p className="text-muted-foreground text-xs mt-1">{member.specialty}</p>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "1,200+",
      description: "Healthcare workers supported",
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "15+",
      description: "Countries reached",
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "4+",
      description: "Years of Service",
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "24/7",
      description: "Crisis Support Available",
    },
  ];

  const countriesServed = [
    "India",
    "Singapore",
    "UK",
    "Canada",
    "Australia",
    "USA",
    "Spain",
    "Germany",
    "Egypt",
    "South Africa",
    "Brazil",
    "Japan",
    "Netherlands",
    "Sweden",
    "France",
    "New Zealand",
  ];

  const countryData = [
    {
      start: { lat: 28.6139, lng: 77.209, label: "India" },
      end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
    },
    {
      start: { lat: 51.5074, lng: -0.1278, label: "UK" },
      end: { lat: 45.4215, lng: -75.6972, label: "Canada" },
    },
    {
      start: { lat: -33.8688, lng: 151.2093, label: "Australia" },
      end: { lat: 40.7128, lng: -74.006, label: "USA" },
    },
    {
      start: { lat: 40.4168, lng: -3.7038, label: "Spain" },
      end: { lat: 52.52, lng: 13.405, label: "Germany" },
    },
    {
      start: { lat: 30.0444, lng: 31.2357, label: "Egypt" },
      end: { lat: -33.9249, lng: 18.4241, label: "South Africa" },
    },
    {
      start: { lat: -23.5505, lng: -46.6333, label: "Brazil" },
      end: { lat: 35.6762, lng: 139.6503, label: "Japan" },
    },
    {
      start: { lat: 52.3676, lng: 4.9041, label: "Netherlands" },
      end: { lat: 59.3293, lng: 18.0686, label: "Sweden" },
    },
    {
      start: { lat: 48.8566, lng: 2.3522, label: "France" },
      end: { lat: -36.8485, lng: 174.7633, label: "New Zealand" },
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              About Being.Lagom
            </h2>
            <p className="text-xl text-muted-foreground">
              Our story, mission, and the people behind the movement
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To create a world where every healthcare professional has
                  access to compassionate, specialized mental health support. We
                  envision a future where seeking help is seen as a sign of
                  strength, not weakness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Being.Lagom serves as a lifeline, lantern, and long-term
                  movement, providing healthcare professionals with the tools,
                  community, and support they need to thrive both personally and
                  professionally.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <blockquote className="text-lg italic text-accent max-w-3xl mx-auto">
              "Lagom is a Swedish concept meaning 'just the right amount' - not
              too little, not too much, but exactly what's needed."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              To care for others, we must first learn to care for ourselves -
              not selfishly, but sustainably.
            </p>
          </div>
          <br></br>
          {/* Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Our Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Team - Using the new Team2 component */}
          <Team2 />

          {/* Global Movement */}
          <Card className="border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">
                Join the Global Movement
              </CardTitle>
              <CardDescription className="text-lg">
                Being.Lagom is more than a platform—it's a movement spreading
                worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                {/* World Map Component */}
                <div className="mb-8">
                  <WorldMap dots={countryData} />
                </div>

                {/* Description and Countries */}
                <div className="max-w-4xl mx-auto">
                  <p className="text-muted-foreground mb-8 text-lg">
                    Healthcare workers around the globe are coming together to
                    break the stigma around mental health in medicine. Join
                    thousands of professionals who are choosing to prioritize
                    their wellbeing.
                  </p>

                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Countries We Serve
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
                    {countriesServed.map((country, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm px-2 py-1 justify-center"
                      >
                        {country}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
