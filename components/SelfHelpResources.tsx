import { useMemo } from "react";
import { StandardCard } from "./ui/StandardCard";
import { ArticleCard } from "./ui/ArticleCard";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { BookOpen, Headphones, Play, Download } from "lucide-react";
import { ActiveFilter } from "./ui/FilterPanel";
import { externalArticles } from "../lib/articleData";

interface BaseResource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  durationCategory: string;
}

interface MediaResource extends BaseResource {
  duration: string;
  image: string;
}

type Resource = MediaResource;

interface SelfHelpResourcesProps {
  searchQuery?: string;
  activeFilters?: ActiveFilter[];
  onClearSearchAndFilters?: () => void;
}

export function SelfHelpResources({
  searchQuery = "",
  activeFilters = [],
  onClearSearchAndFilters,
}: SelfHelpResourcesProps) {
  const articles: MediaResource[] = [
    {
      id: "article-1",
      title: "Managing Burnout: A Guide for Healthcare Workers",
      description:
        "Practical strategies to recognize and address burnout symptoms before they become overwhelming. This comprehensive guide covers early warning signs, evidence-based coping mechanisms, and actionable steps to restore your mental well-being while maintaining your commitment to patient care.",
      duration: "8 min read",
      category: "Burnout",
      type: "articles",
      durationCategory: "short",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
    },
    {
      id: "article-2",
      title: "Building Resilience in High-Stress Environments",
      description:
        "Evidence-based techniques for developing emotional resilience in healthcare settings. Learn how to bounce back from difficult situations, maintain perspective during crises, and build the psychological strength needed to thrive in demanding medical environments.",
      duration: "12 min read",
      category: "Resilience",
      type: "articles",
      durationCategory: "medium",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    },
    {
      id: "article-3",
      title: "Sleep Hygiene for Night Shift Workers",
      description:
        "Optimize your sleep schedule for better mental health and improved job performance. Discover practical tips for managing circadian rhythm disruption, creating an ideal sleep environment, and maintaining energy levels during irregular work schedules.",
      duration: "6 min read",
      category: "Sleep",
      type: "articles",
      durationCategory: "short",
      image:
        "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=200&fit=crop",
    },
  ];

  const podcasts: MediaResource[] = [
    {
      id: "podcast-1",
      title: "The Mindful Medic",
      description:
        "Weekly discussions on mindfulness in healthcare featuring expert interviews, practical meditation techniques, and real stories from healthcare professionals who have transformed their practice through mindfulness. Each episode offers actionable insights you can implement immediately.",
      duration: "45 min episodes",
      category: "Mindfulness",
      type: "podcasts",
      durationCategory: "long",
      image:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=200&fit=crop",
    },
    {
      id: "podcast-2",
      title: "Healing the Healer",
      description:
        "Stories of recovery and resilience from healthcare workers who have overcome burnout, trauma, and mental health challenges. These inspiring narratives provide hope and practical wisdom for anyone struggling with the emotional demands of healthcare work.",
      duration: "30 min episodes",
      category: "Stories",
      type: "podcasts",
      durationCategory: "long",
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=200&fit=crop",
    },
  ];

  const videos: MediaResource[] = [
    {
      id: "video-1",
      title: "Triage Training Video",
      description:
        "Comprehensive training video covering essential triage protocols and decision-making processes for healthcare professionals. Learn systematic approaches to patient assessment, priority classification, and effective resource allocation in emergency and clinical settings.",
      duration: "23 min",
      category: "Training",
      type: "videos",
      durationCategory: "long",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=200&fit=crop",
    },
  ];

  // Filter and search logic for external articles
  const filteredExternalArticles = useMemo(() => {
    let filtered = externalArticles;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (article: any) =>
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query) ||
          article.keywords.some((keyword: string) =>
            keyword.toLowerCase().includes(query)
          ) ||
          article.author?.toLowerCase().includes(query) ||
          article.category.toLowerCase().includes(query)
      );
    }

    // Apply active filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter((article: any) => {
        return activeFilters.every((filter) => {
          switch (filter.groupId) {
            case "category":
              return article.category.toLowerCase() === filter.optionId;
            case "type":
              return filter.optionId === "articles"; // External articles are always articles
            case "duration":
              return article.durationCategory === filter.optionId;
            default:
              return true;
          }
        });
      });
    }

    return filtered;
  }, [searchQuery, activeFilters]);

  // Filter and search logic for internal resources
  const filteredResources = useMemo(() => {
    const allResources: Resource[] = [...articles, ...podcasts, ...videos];

    let filtered = allResources;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query) ||
          resource.category.toLowerCase().includes(query)
      );
    }

    // Apply active filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter((resource) => {
        return activeFilters.every((filter) => {
          switch (filter.groupId) {
            case "category":
              return resource.category.toLowerCase() === filter.optionId;
            case "type":
              return resource.type === filter.optionId;
            case "duration":
              return resource.durationCategory === filter.optionId;
            default:
              return true;
          }
        });
      });
    }

    // Group filtered resources back by type
    return {
      articles: filtered.filter(
        (r) => r.type === "articles"
      ) as MediaResource[],
      podcasts: filtered.filter(
        (r) => r.type === "podcasts"
      ) as MediaResource[],
      videos: filtered.filter((r) => r.type === "videos") as MediaResource[],
    };
  }, [searchQuery, activeFilters]);

  // Check if we have any results (including external articles)
  const hasResults =
    filteredResources.articles.length > 0 ||
    filteredExternalArticles.length > 0 ||
    filteredResources.podcasts.length > 0 ||
    filteredResources.videos.length > 0;

  // No results component
  const NoResults = () => (
    <div className="text-center py-12">
      <div className="text-muted-foreground mb-4">
        <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No resources found</h3>
      <p className="text-muted-foreground mb-4">
        Try adjusting your search terms or filters to find what you're looking
        for.
      </p>
      {(searchQuery || activeFilters.length > 0) && onClearSearchAndFilters && (
        <Button variant="outline" onClick={onClearSearchAndFilters}>
          Clear search and filters
        </Button>
      )}
    </div>
  );

  return (
    <section id="resources" className="bg-[#FFFBF5]">
      <div className="max-w-6xl mx-auto">
        {!hasResults ? (
          <NoResults />
        ) : (
          <>
            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger
                  value="articles"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Articles (
                  {filteredResources.articles.length +
                    filteredExternalArticles.length}
                  )
                </TabsTrigger>
                <TabsTrigger
                  value="podcasts"
                  className="flex items-center gap-2"
                >
                  <Headphones className="w-4 h-4" />
                  Podcasts ({filteredResources.podcasts.length})
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Videos ({filteredResources.videos.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="articles" className="space-y-6">
                {filteredResources.articles.length === 0 &&
                filteredExternalArticles.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No articles match your current filters.
                  </div>
                ) : (
                  <div className="space-y-8">
                    {/* Featured External Articles Section */}
                    {filteredExternalArticles.filter(
                      (article: any) => article.isFeatured
                    ).length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-primary">
                          Featured Articles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                          {filteredExternalArticles
                            .filter((article: any) => article.isFeatured)
                            .map((article: any) => (
                              <ArticleCard
                                key={article.id}
                                article={article}
                                expandable={true}
                                maxDescriptionLength={120}
                              />
                            ))}
                        </div>
                      </div>
                    )}

                    {/* All Articles Section */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">
                        All Articles
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Internal Articles */}
                        {filteredResources.articles.map((article) => (
                          <StandardCard
                            key={article.id}
                            title={article.title}
                            description={article.description}
                            image={article.image}
                            category={article.category}
                            metadata={[
                              {
                                icon: (
                                  <BookOpen className="w-4 h-4 text-accent" />
                                ),
                                text: article.duration,
                              },
                            ]}
                            actions={[
                              {
                                text: "Read Article",
                                variant: "outline",
                                className: "w-full",
                              },
                            ]}
                            expandable={true}
                            maxDescriptionLength={120}
                          />
                        ))}

                        {/* External Articles */}
                        {filteredExternalArticles
                          .filter((article: any) => !article.isFeatured) // Don't show featured articles twice
                          .map((article: any) => (
                            <ArticleCard
                              key={article.id}
                              article={article}
                              expandable={true}
                              maxDescriptionLength={120}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="podcasts" className="space-y-6">
                {filteredResources.podcasts.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No podcasts match your current filters.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredResources.podcasts.map((podcast) => (
                      <StandardCard
                        key={podcast.id}
                        title={podcast.title}
                        description={podcast.description}
                        image={podcast.image}
                        category={podcast.category}
                        metadata={[
                          {
                            icon: (
                              <Headphones className="w-4 h-4 text-accent" />
                            ),
                            text: podcast.duration,
                          },
                        ]}
                        actions={[
                          {
                            text: "Listen",
                            variant: "default",
                            icon: <Headphones className="w-4 h-4 mr-2" />,
                            className: "flex-1",
                          },
                          {
                            text: "",
                            variant: "outline",
                            size: "icon",
                            icon: <Download className="w-4 h-4" />,
                          },
                        ]}
                        expandable={true}
                        maxDescriptionLength={120}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="videos" className="space-y-6">
                {filteredResources.videos.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No videos match your current filters.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredResources.videos.map((video) => (
                      <div key={video.id} className="relative">
                        <StandardCard
                          title={video.title}
                          description={video.description}
                          image={video.image}
                          category={video.category}
                          metadata={[
                            {
                              icon: <Play className="w-4 h-4 text-accent" />,
                              text: video.duration,
                            },
                          ]}
                          actions={[
                            {
                              text: "Watch Video",
                              variant: "outline",
                              className: "w-full",
                              onClick:
                                video.id === "video-1"
                                  ? () =>
                                      window.open(
                                        "https://drive.google.com/file/d/1wzLulaiugM7gustCofJdP1I8XYh2Buu9/view?usp=drive_link",
                                        "_blank"
                                      )
                                  : undefined,
                            },
                          ]}
                          expandable={true}
                          maxDescriptionLength={120}
                        />
                        <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                          <Button
                            size="icon"
                            className="w-16 h-16 rounded-full bg-white/90 text-primary hover:bg-white shadow-lg"
                          >
                            <Play className="w-6 h-6" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </section>
  );
}
