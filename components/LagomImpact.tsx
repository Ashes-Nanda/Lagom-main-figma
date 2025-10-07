import { useState } from "react";
import { MapPin } from "lucide-react";

interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
  participants?: number;
  duration?: string;
  status: "completed" | "ongoing" | "upcoming";
}

const projects: Project[] = [
  {
    id: "ahmedabad",
    title: "Flagship Study Site",
    location: "Ahmedabad, India",
    image: "/impact/ahd.jpg",
    description:
      "Building India's first trauma-to-data mental health infrastructure for healthcare workers through an integrated triage, therapy, and wearable-based research program at GCS Hospital.",
    status: "ongoing",
  },
  {
    id: "bangalore-stjohns",
    title: "Medical Education Pilot",
    location: "Bangalore / St. John's, India",
    image: "/impact/bangalore.jpg",
    description:
      "Redesigning medical training from the inside out with peer-healing circles that make mental health literacy a core competency for every future doctor.",
    status: "ongoing",
  },
  {
    id: "nepal-happyminds",
    title: "Cross-Border Adaptation",
    location: "Nepal / HappyMinds Partnership",
    image: "/impact/nepal.jpg",
    description:
      "Localizing Being.Lagom's trauma-informed peer model to support Nepali healthcare workers recovering from collective and migration-related trauma.",
    status: "ongoing",
  },
  {
    id: "philippines",
    title: "Therapist Match Network",
    location: "Philippines",
    image: "/impact/php.jpg",
    description:
      "Creating a bridge between Filipino healthcare professionals and culturally aligned global therapists to make mental health support truly accessible.",
    status: "ongoing",
  },
];

export function LagomImpact() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 bg-[#fffbf5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Lagom Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the meaningful projects we've undertaken to support
            healthcare workers and build resilient communities across different
            regions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    ongoing: "bg-blue-100 text-blue-800",
    upcoming: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={onClick}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center`;
          }}
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              statusColors[project.status]
            }`}
          >
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {project.location}
        </div>

        <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-4 text-accent font-medium group-hover:underline">
          Learn more →
        </div>
      </div>
    </div>
  );
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center`;
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {project.location}
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4">
            {project.title}
          </h2>

          <p className="text-muted-foreground mb-6">{project.description}</p>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              More detailed information about this project will be added soon.
              Stay tuned for updates on our impact and outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
