import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Award, 
  Users, 
  Globe, 
  Heart, 
  Brain, 
  TrendingUp, 
  BookOpen, 
  MessageCircle, 
  Calendar 
} from "lucide-react";

export function InstitutionalCredibility() {
  const interventions = [
    {
      title: "Wellness Events & Workshops",
      description: "Evidence-based programs designed through community feedback",
      icon: Calendar,
      stats: [
        { value: "33", label: "Hybrid Events Conducted" },
        { value: "Monthly", label: "Lagom Surveys for Relevance" },
        { value: "Edutainment", label: "Interactive Learning Format" }
      ],
      highlights: [
        "Human-centric approach based on monthly community surveys",
        "Covering diverse topics from career counseling to yoga",
        "Educational and entertaining content delivery"
      ]
    },
    {
      title: "Advocacy Campaign",
      description: "Raising awareness about mental health in healthcare",
      icon: TrendingUp,
      stats: [
        { value: "37,000+", label: "Social Media Impressions" },
        { value: "858", label: "Instagram Followers Gained" },
        { value: "Multi-platform", label: "Campaign Reach" }
      ],
      highlights: [
        "Campaigns on psychiatric conditions across Instagram, Facebook, LinkedIn",
        "Comprehensive website integration for maximum impact",
        "Community engagement and awareness building"
      ]
    },
    {
      title: "Pro-bono Therapy",
      description: "Free therapy interventions for healthcare workers in LMICs",
      icon: Heart,
      stats: [
        { value: "60", label: "Doctors Supported" },
        { value: "70%", label: "Satisfaction Rate" },
        { value: "6-week", label: "Intervention Sessions" }
      ],
      highlights: [
        "Partnership with Overcome UK for structured support",
        "CBT and Motivational Interviewing interventions",
        "Focus on Low and Middle-Income Countries (LMICs)"
      ]
    },
    {
      title: "Global Wellbeing Fellowship",
      description: "8-week fellowship on biosecurity, AI, and wellbeing metrics",
      icon: Globe,
      stats: [
        { value: "80", label: "Participants to Date" },
        { value: "4", label: "Cohorts Completed" },
        { value: "8-week", label: "Program Duration" }
      ],
      highlights: [
        "Focus on biosecurity and AI in healthcare",
        "WELLBYs (wellbeing metrics) training",
        "Global reach for doctors and medical students"
      ]
    },
    {
      title: "Career Counselling",
      description: "1:1 mentorship with senior physicians globally",
      icon: MessageCircle,
      stats: [
        { value: "147", label: "Counseling Sessions" },
        { value: "66.7%", label: "Community Interest" },
        { value: "3", label: "Countries (US, Germany, UK)" }
      ],
      highlights: [
        "Designated mentors and senior physicians",
        "High community demand and preference shift",
        "International network of healthcare professionals"
      ]
    },
    {
      title: "Research Collaborations",
      description: "Academic partnerships and research initiatives",
      icon: BookOpen,
      stats: [
        { value: "Oxford", label: "University Partnership" },
        { value: "Stanford", label: "Collaboration" },
        { value: "In Progress", label: "Ethics Approval" }
      ],
      highlights: [
        "Humans of Healthcare exhibition at Oxford University",
        "30 selected 'relics' from 120 participant stories",
        "Van Houten Fund sponsorship for mental health initiatives"
      ]
    },
    {
      title: "Psychiatry First Aid Tools",
      description: "Evidence-based tools for anxiety and burnout support",
      icon: Brain,
      stats: [
        { value: "11,161", label: "Website Visitors" },
        { value: "581", label: "Registered Accounts" },
        { value: "Stanford", label: "University Partnership" }
      ],
      highlights: [
        "Collaboration with Stanford's 'Pause a Moment' Project",
        "Neuroscience protocols for anxiety and burnout",
        "Integration with pilot studies and interventions"
      ]
    }
  ];

  const CarouselCard = ({ intervention }: { intervention: typeof interventions[0], index: number }) => {
    const Icon = intervention.icon;
    return (
      <Card className="flex-shrink-0 w-80 mx-4 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
        <CardHeader className="pb-4">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-accent/10 rounded-lg mr-3">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <CardTitle className="text-lg">{intervention.title}</CardTitle>
            </div>
          </div>
          <CardDescription className="text-sm">
            {intervention.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Statistics */}
          <div className="grid grid-cols-1 gap-3">
            {intervention.stats.map((stat, statIndex) => (
              <div key={statIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className="font-semibold text-primary">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Key Highlights */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-primary">Key Highlights:</h4>
            <ul className="space-y-1">
              {intervention.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex} className="text-xs text-muted-foreground flex items-start">
                  <span className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Evidence-Based Impact
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Institutional Credibility
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Being.Lagom's interventions are backed by research, partnerships with leading institutions, 
              and measurable outcomes in supporting healthcare professionals globally.
            </p>
          </div>

          {/* Infinite Carousel */}
          <div className="carousel-container relative overflow-hidden mb-16">
            <div className="flex">
              {/* First set of cards */}
              <div className="flex animate-scroll-left">
                {interventions.map((intervention, index) => (
                  <CarouselCard key={`first-${index}`} intervention={intervention} index={index} />
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex animate-scroll-left">
                {interventions.map((intervention, index) => (
                  <CarouselCard key={`second-${index}`} intervention={intervention} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Research & Partnerships Section */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Academic Partnerships & Research Excellence
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment to evidence-based care is demonstrated through collaborations 
                with leading institutions and ongoing research initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Oxford University</h4>
                <p className="text-sm text-muted-foreground">
                  Physical exhibition featuring 30 mental health journey stories, 
                  sponsored by Van Houten Fund
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Stanford University</h4>
                <p className="text-sm text-muted-foreground">
                  Collaboration on 'Pause a Moment' Project with neuroscience protocols 
                  for anxiety and burnout tools
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Overcome UK</h4>
                <p className="text-sm text-muted-foreground">
                  Partnership for pro bono therapy interventions with CBT and 
                  Motivational Interviewing approaches
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-xl border border-border/50">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent mr-2" />
                <span className="font-medium text-primary">Research Publication</span>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Currently in the process of obtaining ethics approval for publication of research findings 
                on mental health interventions for healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}