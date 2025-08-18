import { Card, CardContent } from "./ui/card";
import { Users, Target, Heart } from "lucide-react";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { BrainwaveDivider } from "./ui/BrainwaveDivider";
import { LazyImage } from "./ui/lazy-image";
import { TeamCardSkeleton } from "./ui/skeleton";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  specialty: string;
  category: string;
  actionFigureUrl?: string;
  socialLinks?: {
    platform: "linkedin" | "instagram" | "facebook" | "twitter";
    url: string;
  }[];
}

interface TeamProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  className?: string;
}

// Team members data for Being.Lagom
const teamMembers: TeamMember[] = [
  // Amd TaskForce Members
  {
    name: "Dr. Vyshnavi Desiraju",
    role: "Medical doctor, Executive Director of Being.Lagom (Singapore)",
    bio: "Ahmedabad Taskforce: Strategy Lead",
    imageUrl: "/assets/Vyshnavi.jpg",
    actionFigureUrl: "/action-fig/Vyshnavi-action.png",
    specialty: "Strategy & Leadership",
    category: "Amd TaskForce",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/vyshnavi-desiraju-b09b1799",
      },
    ],
  },
  {
    name: "Vanessa Yim",
    role: "Chartered Clinical Psychologist, Hong Kong/ UK",
    bio: "Ahmedabad Taskforce: Clinical Triage+ Research Lead",
    imageUrl: "/assets/vanessa_5.JPG",
    specialty: "Clinical Psychology",
    category: "Amd TaskForce",
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
    bio: "Ahmedabad Taskforce: Clinical Protocols Lead",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQGyw9md4EKG4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721802767353?e=1757548800&v=beta&t=mrFbfAAXqqXr6CwtK_ILnUIcPt7_D9HQ177U5jWIu2w",
    specialty: "Counselling Psychology",
    category: "Amd TaskForce",
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
    bio: "Ahmedabad Taskforce: Psychologist Volunteer Network Manager",
    imageUrl: "/assets/Dhwani_7.jpg",
    specialty: "Quality Assurance",
    category: "Amd TaskForce",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/dhwani-shah-38063a5b/",
      },
    ],
  },
  {
    name: "Raviraj Jain",
    role: "Senior Manager at KPMG UK, Chartered Accountant",
    bio: "Ahmedabad Taskforce: Fundraising Lead",
    imageUrl: "/assets/Ravi_27.jpeg",
    specialty: "Finance & Fundraising",
    category: "Amd TaskForce",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/raviraj-jain-aca-8098ba58/",
      },
    ],
  },
  {
    name: "Dr Shweta Sinha",
    role: "Ph.D. Multisector Communication, MBA, M.Sc, Molecular and Genetic Medicine",
    bio: "Branding and Business Consultant, Professor in 3 NY universities, Ahmedabad Taskforce: MedEd Curriculum Design & Comms Strategist",
    imageUrl: "/assets/Shweta.jpg",
    specialty: "MedEd Curriculum Design & Communications",
    category: "Amd TaskForce",
    socialLinks: [],
  },
  {
    name: "Dr Sunil Kumar",
    role: "MBBS, MRCA, FCAI, FRSA, FBSLM, DipIBLM Anaesthesiologist",
    bio: "Foundation Programme Director (FY1) Morecambe Bay NHS Trust, UK, Ahmedabad Taskforce: Clinical Advisor & Lifestyle Med Curriculum Lead",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQEu9QDWZ6OW2Q/profile-displayphoto-shrink_400_400/B4EZRkgOs4HMAg-/0/1736852959129?e=1757548800&v=beta&t=1caZUpg_WWMm6cFfTywoTzHRTDxM1oGfRaBKTtYv0J0",
    specialty: "Clinical Advisory & Lifestyle Medicine",
    category: "Amd TaskForce",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/drsunilkumarlifestylemedicine/",
      },
    ],
  },
  {
    name: "Dr Hvovi Bhagwagar",
    role: "Clinical Research Lead",
    bio: "Ph.D. in Social Sciences from Tata Institute of Social Sciences (TISS), Mumbai,  Master’s in Clinical Psychology from SNDT University.Registered as an Associate Mental Health Professional with the Maharashtra State Mental Health Authority (MSMHA).",
    imageUrl: "/assets/Hvovi.jpeg",
    specialty: "EMDR",
    category: "Amd TaskForce",
    socialLinks: [],
  },
  {
    name: "Dr Sathwikaw Manikandan",
    role: "Ahmedabad Taskforce: Social Media Head",
    bio: "Ahmedabad Taskforce: Social Media Head",
    imageUrl: "/assets/sath_16.jpg",
    actionFigureUrl: "/action-fig/Sathwikaw.jpeg",
    specialty: "Social Media Management",
    category: "Amd TaskForce",
    socialLinks: [],
  },
  {
    name: "Dr Natnael Dejene",
    role: "Ahmedabad Taskforce: External Comms",
    bio: "Ahmedabad Taskforce: External Comms",
    imageUrl: "/assets/Nate.jpg",
    specialty: "External Communications",
    category: "Amd TaskForce",
    socialLinks: [],
  },
  {
    name: "Dr Devika Menrai",
    role: "Ahmedabad Taskforce: Internal Comms & Ground-ops Coordination",
    bio: "Ahmedabad Taskforce: Internal Comms & Ground-ops Coordination",
    imageUrl: "/assets/devika.jpg",
    specialty: "Internal Communications & Operations",
    category: "Amd TaskForce",
    socialLinks: [],
  },
  {
    name: "Dr Rachit Shah",
    role: "Ahmedabad Taskforce: External Comms",
    bio: "Ahmedabad Taskforce: External Comms",
    imageUrl: "/assets/Rachit.jpg",
    specialty: "External Communications",
    category: "Amd TaskForce",
    socialLinks: [],
  },
  {
    name: "Dr Raj Mistry",
    role: "IMA State Convener, Gujarat, BJMC",
    bio: "BJMC Taskforce Lead (Ahmedabad)",
    imageUrl: "/assets/Mistry.jpg",
    specialty: "Operations",
    category: "Amd TaskForce",
    socialLinks: [
      {
        platform: "instagram",
        url: "https://www.instagram.com/dr_raj_mistry?igsh=MXpsYXZzY3p4dzEw",
      },
    ],
  },
  {
    name: "Dr Lavish",
    role: "HR Local Liaison",
    bio: "HR Local Liaison",
    imageUrl: "/assets/Lavish.jpg",
    specialty: "Human Resources",
    category: "Amd TaskForce",
    socialLinks: [],
  },
  {
    name: "Dr Krish",
    role: "Ground Operations Coordinator",
    bio: "Ground Operations Coordinator",
    imageUrl: "/assets/Krish_1.jpg",
    specialty: "Ground Operations",
    category: "Amd TaskForce",
    socialLinks: [],
  },
  {
    name: "Dr Avdhesh",
    role: "Gujarat College Coordination",
    bio: "Gujarat College Coordination",
    imageUrl: "/assets/Avdhesh_1.jpg",
    specialty: "College Coordination",
    category: "Amd TaskForce",
    socialLinks: [],
  },
  {
    name: "Dr Umang",
    role: "P2P Coordination",
    bio: "P2P Coordination",
    imageUrl: "/assets/Umang.jpg",
    specialty: "Peer-to-Peer Coordination",
    category: "Amd TaskForce",
    socialLinks: [],
  },
  {
    name: "Dr Khushi",
    role: "Community Mapping",
    bio: "Community Mapping",
    imageUrl: "/assets/Khushi.jpg",
    specialty: "Community Mapping",
    category: "Amd TaskForce",
    socialLinks: [],
  },

  // Leadership
  {
    name: "Dr. Vyshnavi Desiraju",
    role: "Medical doctor, Executive Director of Being.Lagom (Singapore)",
    bio: "Ahmedabad Taskforce: Strategy Lead",
    imageUrl: "/assets/Vyshnavi.jpg",
    actionFigureUrl: "/action-fig/Vyshnavi-action.png",
    specialty: "Strategy & Leadership",
    category: "Leadership",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/vyshnavi-desiraju-b09b1799",
      },
    ],
  },

  // Core Leads
  {
    name: "Dr Sathwikaw Manikandan",
    role: "Ahmedabad Taskforce: Social Media Head",
    bio: "Ahmedabad Taskforce: Social Media Head",
    imageUrl: "/assets/sath_16.jpg",
    actionFigureUrl: "/action-fig/Sathwikaw.jpeg",
    specialty: "Social Media Management",
    category: "Core Leads",
    socialLinks: [],
  },
  {
    name: "Shehani Jayalath",
    role: "Grants Specialist",
    bio: "Clinical Research Manager, BlinkLab Ltd.",
    imageUrl: "/assets/Shehani.jpeg",
    actionFigureUrl: "/action-fig/Shehani action figure.jpg",
    specialty: "Grants & Clinical Research",
    category: "Core Leads",
    socialLinks: [],
  },
  {
    name: "Dr. Sibi Chakravathy",
    role: "Partnerships Lead",
    bio: "Partnerships Lead",
    imageUrl: "/placeholder.svg",
    specialty: "Partnerships",
    category: "Core Leads",
    socialLinks: [],
  },
  {
    name: "Dr Raghumoy Ghosh",
    role: "Operations Lead",
    bio: "Project Research Scientist, Dept. of Hematology, PGI Chandigarh",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C5103AQHp29dHnaaa7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1530876982749?e=1757548800&v=beta&t=UrEcgHJW1kG_1rg3UdpIsRmbHhM2jXQrfC5NuEqkrCw",
    actionFigureUrl: "/action-fig/Raghumoy.png",
    specialty: "Research & Operations",
    category: "Core Leads",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/raghumoyghosh751051a6/",
      },
    ],
  },
  {
    name: "Raviraj Jain",
    role: "Senior Manager at KPMG UK, Chartered Accountant",
    bio: "Ahmedabad Taskforce: Fundraising Lead",
    imageUrl: "/assets/Ravi_27.jpeg",
    specialty: "Finance & Fundraising",
    category: "Core Leads",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/raviraj-jain-aca-8098ba58/",
      },
    ],
  },
  {
    name: "Dr Natnael Dejene",
    role: "Ahmedabad Taskforce: External Comms",
    bio: "Ahmedabad Taskforce: External Comms",
    imageUrl: "/assets/Nate.jpg",
    specialty: "External Communications",
    category: "Core Leads",
    socialLinks: [],
  },

  // Psychology & Clinical Team
  {
    name: "Andy",
    role: "Psych Team",
    bio: "Psych Team Member",
    imageUrl: "/assets/Andy.jpeg",
    specialty: "Psychology",
    category: "Psychology & Clinical Team",
    socialLinks: [],
  },
  {
    name: "Dr. Faraaz",
    role: "Psych Team",
    bio: "Psych Team Member",
    imageUrl: "/placeholder.svg",
    specialty: "Psychology",
    category: "Psychology & Clinical Team",
    socialLinks: [],
  },

  // Social Media & Communications
  {
    name: "Dr Sathwikaw Manikandan",
    role: "Ahmedabad Taskforce: Social Media Head",
    bio: "Ahmedabad Taskforce: Social Media Head",
    imageUrl: "/assets/sath_16.jpg",
    actionFigureUrl: "/action-fig/Sathwikaw.jpeg",
    specialty: "Social Media Management",
    category: "Social Media & Communications",
    socialLinks: [],
  },
  {
    name: "Dr. Achu Bose",
    role: "Social Media Strategist",
    bio: "Social Media Strategist",
    imageUrl: "/assets/Achu.png",
    actionFigureUrl: "/action-fig/Bose.jpeg",
    specialty: "Social Media Strategy",
    category: "Social Media & Communications",
    socialLinks: [],
  },
  {
    name: "Arya Manoj",
    role: "Social Media Team",
    bio: "Social Media Team Member",
    imageUrl: "/assets/Genie.jpg",
    specialty: "Social Media",
    category: "Social Media & Communications",
    socialLinks: [],
  },
  {
    name: "Dr. Simran Shakya",
    role: "Social Media Team",
    bio: "Social Media Team Member",
    imageUrl: "/assets/Simran_28.jpg",
    actionFigureUrl: "/action-fig/Simran.jpeg",
    specialty: "Social Media",
    category: "Social Media & Communications",
    socialLinks: [],
  },
  {
    name: "Dr. Shamali Pai",
    role: "Social Media Team",
    bio: "Social Media Team Member",
    imageUrl: "/assets/Shamali.jpeg",
    actionFigureUrl: "/action-fig/Shamali.png",
    specialty: "Social Media",
    category: "Social Media & Communications",
    socialLinks: [],
  },
  {
    name: "Dr. Shenara",
    role: "External Comms Team",
    bio: "External Communications Team Member",
    imageUrl: "/assets/Shenara_28.jpeg",
    actionFigureUrl: "/action-fig/Shenara.jpeg",
    specialty: "External Communications",
    category: "Social Media & Communications",
    socialLinks: [],
  },

  // Curriculum & Education
  {
    name: "Dr. Lubna",
    role: "Curriculum Team",
    bio: "Curriculum Team Member",
    imageUrl: "/placeholder.svg",
    specialty: "Curriculum Development",
    category: "Curriculum & Education",
    socialLinks: [],
  },

  // Operations & Support
  {
    name: "Dr Raghumoy Ghosh",
    role: "Operations Lead",
    bio: "Project Research Scientist, Dept. of Hematology, PGI Chandigarh",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/C5103AQHp29dHnaaa7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1530876982749?e=1757548800&v=beta&t=UrEcgHJW1kG_1rg3UdpIsRmbHhM2jXQrfC5NuEqkrCw",
    actionFigureUrl: "/action-fig/Raghumoy.png",
    specialty: "Research & Operations",
    category: "Operations and Support",
    socialLinks: [
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/raghumoyghosh751051a6/",
      },
    ],
  },

  {
    name: "Dr. Sadiya Khan",
    role: "Ops Team",
    bio: "Operations Team Member",
    imageUrl: "/assets/Sadiya.jpeg",
    actionFigureUrl: "/action-fig/Sadiya Khan.jpeg",
    specialty: "Operations",
    category: "Operations & Support",
    socialLinks: [],
  },
  {
    name: "Harshitha K",
    role: "Ops Volunteer",
    bio: "Medical Intern, India",
    imageUrl: "/assets/Harshitha_19.jpg",
    actionFigureUrl: "/action-fig/Harshitha.png",
    specialty: "Operations Support",
    category: "Operations & Support",
    socialLinks: [],
  },
  {
    name: "Staffan Stewart",
    role: "Business Development Specialist",
    bio: "Staff Nurse, Singapore",
    imageUrl: "/assets/Staffan.jpg",
    actionFigureUrl: "/action-fig/Andy.png",
    specialty: "Operations Support",
    category: "Operations & Support",
    socialLinks: [],
  },

  // Tech
  {
    name: "Ashes",
    role: "Tech Team",
    bio: "Website Developer",
    imageUrl: "/assets/Ashes.jpg",
    specialty: "Technology",
    category: "Tech",
    socialLinks: [],
  },
  {
    name: "Gaurav",
    role: "Tech Team",
    bio: "Technology Team Member",
    imageUrl: "/placeholder.svg",
    specialty: "Technology",
    category: "Tech",
    socialLinks: [],
  },
  {
    name: "Prabhav",
    role: "Tech Team",
    bio: "Technology Team Member",
    imageUrl: "/placeholder.svg",
    specialty: "Technology",
    category: "Tech",
    socialLinks: [],
  },
];

// Flippable Team Card Component
function TeamCard({ member }: { member: TeamMember }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (member.actionFigureUrl) {
      setIsFlipped(!isFlipped);
    }
  };

  if (member.actionFigureUrl) {
    // Flippable card for members with action figures
    return (
      <div
        className="group relative cursor-pointer h-80 w-full"
        onClick={handleClick}
        style={{ perspective: "1000px" }}
      >
        <div
          className={cn(
            "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
            isFlipped && "rotate-y-180"
          )}
        >
          {/* Front side */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>
              <LazyImage
                src={member.imageUrl || "/placeholder.svg"}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 filter grayscale hover:grayscale-0"
              />
            </div>

            {/* Default state - compact info */}
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300 group-hover:opacity-0">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-white/80 text-sm line-clamp-2">
                {member.role}
              </p>
            </div>

            {/* Hover state - expanded info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 opacity-0 transition-all duration-300 group-hover:opacity-100 flex flex-col justify-end">
              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-white/90 text-sm mb-3 leading-relaxed">
                {member.role}
              </p>
              <p className="text-white/80 text-xs mb-4 leading-relaxed">
                {member.bio}
              </p>
              <div className="flex space-x-3">
                {member.socialLinks?.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.platform === "facebook" && <Facebook size={18} />}
                    {link.platform === "twitter" && <Twitter size={18} />}
                    {link.platform === "linkedin" && <Linkedin size={18} />}
                    {link.platform === "instagram" && <Instagram size={18} />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Back side - Action Figure */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            <LazyImage
              src={member.actionFigureUrl}
              alt={`${member.name} Action Figure`}
              className="h-full w-full object-contain p-4"
            />
          </div>
        </div>
      </div>
    );
  }

  // Regular card for members without action figures
  return (
    <div className="group relative cursor-pointer">
      <div className="relative h-80 w-full overflow-hidden rounded-lg transition-all duration-300 group-hover:h-96">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>
        <LazyImage
          src={member.imageUrl || "/placeholder.svg"}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 filter grayscale hover:grayscale-0"
        />
      </div>

      {/* Default state - compact info */}
      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6 transition-all duration-300 group-hover:opacity-0">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-white/80 text-sm line-clamp-2">{member.role}</p>
      </div>

      {/* Hover state - expanded info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 opacity-0 transition-all duration-300 group-hover:opacity-100 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
        <p className="text-white/90 text-sm mb-3 leading-relaxed">
          {member.role}
        </p>
        <p className="text-white/80 text-xs mb-4 leading-relaxed">
          {member.bio}
        </p>
        <div className="flex space-x-3">
          {member.socialLinks?.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {link.platform === "facebook" && <Facebook size={18} />}
              {link.platform === "twitter" && <Twitter size={18} />}
              {link.platform === "linkedin" && <Linkedin size={18} />}
              {link.platform === "instagram" && <Instagram size={18} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Team3({
  title = "Meet the team that makes the magic happen",
  subtitle = "We are physicians, psychologists, nurses, students, and advocates. We've been where you are. We've stayed up late, missed meals, and cried in on-call rooms. We also know what it feels like to be heard, to be helped, and to belong.",
  members = teamMembers,
  className,
}: TeamProps) {
  const [activeFilter, setActiveFilter] = useState<string>("Amd TaskForce");
  const [isLoading, setIsLoading] = useState(true);

  const filterCategories = [
    "Amd TaskForce",
    "Leadership",
    "Core Leads",
    "Psychology & Clinical Team",
    "Social Media & Communications",
    "Curriculum & Education",
    "Operations & Support",
    "Tech",
  ];

  const filteredMembers = members.filter(
    (member) => member.category === activeFilter
  );

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn("w-full py-16 bg-[#fffbf5]", className)}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-primary">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {isLoading
            ? // Show skeleton loaders while loading
              Array.from({ length: 8 }).map((_, index) => (
                <TeamCardSkeleton key={index} />
              ))
            : filteredMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="pt-8 pb-20 bg-[#fffbf5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why We Exist?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              <em>
                Our story, our mission, and the people behind the movement.
              </em>
            </p>
          </div>
          {/* Healing Quote */}
          <div className="mb-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="relative">
                {/* Quote marks */}
                <div className="text-6xl text-primary/20 font-serif absolute -top-4 -left-4">
                  "
                </div>
                <div className="text-6xl text-primary/20 font-serif absolute -bottom-8 -right-4">
                  "
                </div>

                <blockquote className="relative z-10 px-8 py-6">
                  <p className="text-2xl lg:text-3xl text-foreground font-light leading-relaxed mb-4">
                    When we heal the healers, we heal the system
                  </p>
                  <hr className="w-24 h-0.5 bg-primary mx-auto my-6" />
                  <p className="text-lg text-muted-foreground italic">
                    Healthcare transformation begins with caring for those who
                    care for others
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="mb-16">
            <Card>
              <CardContent className="p-8 lg:p-12">
                <div className="max-w-4xl mx-auto">
                  {/* Video placeholder with same dimensions as the text content */}
                  <div className="relative w-full aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          Video Coming Soon
                        </h3>
                        <p className="text-muted-foreground">
                          Our story will be shared through a compelling video
                          experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What "Lagom" Means - Quote Format */}
          <div className="mb-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="relative">
                {/* Quote marks */}
                <div className="text-6xl text-primary/20 font-serif absolute -top-4 -left-4">
                  "
                </div>
                <div className="text-6xl text-primary/20 font-serif absolute -bottom-8 -right-4">
                  "
                </div>

                <blockquote className="relative z-10 px-8 py-6">
                  <p className="text-2xl lg:text-3xl text-foreground font-light leading-relaxed mb-4">
                    Lagom is a Swedish word for{" "}
                    <strong className="text-primary">
                      just the right amount
                    </strong>
                    .
                  </p>
                  <hr className="w-24 h-0.5 bg-primary mx-auto my-6" />
                  <p className="text-xl lg:text-2xl text-foreground font-light leading-relaxed">
                    Not too little, not too much - exactly what's needed.
                  </p>
                  <p className="text-lg text-accent font-medium mt-6 italic">
                    We believe mental health support should feel the same:
                    balanced, compassionate, and sustainable.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-primary mb-4">
                What We Do
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We work at both the personal and systemic level - because
                burnout isn't just an individual failing, it's a structural one.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {/* What We Do Image */}
              <div className="relative w-full rounded-lg overflow-hidden">
                <img
                  src="/what-we-do.png"
                  alt="What We Do - Visual representation of our work at personal and systemic levels"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Brainwave Divider */}
          <BrainwaveDivider />

          {/* Core Team - Using the new Team3 component */}
          <Team3 />

          {/* Why it Works? */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Why it Works?
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Because we are you. We're not parachuting in solutions from the
                outside. Every program is co-designed with healthcare workers,
                guided by our values.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {/* Core Values Image */}
              <div className="relative w-full rounded-lg overflow-hidden">
                <img
                  src="/core-values.png"
                  alt="Core Values - Our guiding principles for healthcare worker support"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Join Us */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Join us</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Whether you're a healthcare worker in need of support, a
                policymaker who can influence change, or someone who simply
                believes that the people who care for us deserve to be cared for
                - you have a place here.
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
                Together, we can create a world where healthcare workers don't
                just survive their careers - they flourish in them.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="px-8 py-3"
                onClick={() => (window.location.href = "/directory")}
              >
                Get Support
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3"
                onClick={() => (window.location.href = "/partnership")}
              >
                Partner With Us
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="px-8 py-3"
                onClick={() => alert("Donation functionality coming soon!")}
              >
                Donate
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Target className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">
                  Mental Health Support
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Access to counseling, therapy, and wellness resources designed
                  specifically for healthcare professionals.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">
                  Community Connection
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with peers who understand your challenges and share
                  experiences in a supportive environment.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Heart className="w-12 h-12 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-primary mb-3">
                  Advocacy & Change
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Join our mission to improve working conditions and policies
                  that affect healthcare workers nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
