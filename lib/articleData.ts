// Article data structure for Google Drive integration
export interface ExternalArticle {
  id: string;
  title: string;
  description: string;
  author?: string;
  publishDate: string;
  category: string;
  keywords: string[];
  duration: string;
  durationCategory: "short" | "medium" | "long";
  image: string;
  googleDriveUrl: string;
  fileType: "pdf" | "doc" | "docx" | "txt";
  fileSize?: string;
  isFeatured?: boolean;
  tags: string[];
}

// Sample articles from your Google Drive (you'll replace these with your actual articles)
export const externalArticles: ExternalArticle[] = [
  {
    id: 'vyshnavi-article-1',
    title: "Human First: A Healthcare Worker's Perspective",
    description: "A personal reflection on the importance of maintaining humanity in healthcare work, written by Vyshnavi. This article explores the challenges and rewards of putting human connection first in medical practice.",
    author: "Vyshnavi",
    publishDate: "2023-07-13",
    category: "Community",
    keywords: ["human-first", "healthcare", "humanity", "connection", "perspective"],
    duration: "8 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=200&fit=crop",
    googleDriveUrl: "https://drive.google.com/file/d/1TblCAmcPoAht1ytfPv8oXLL0ewlMzs7x/view",
    fileType: "doc",
    fileSize: "1.2 MB",
    isFeatured: true,
    tags: ["human-first", "healthcare", "humanity", "connection", "perspective"]
  },
  {
    id: 'shehani-article-1',
    title: "What is the Root of Happiness",
    description: "A philosophical exploration of happiness and its fundamental sources, written by Shehani. This article delves into the deeper questions about what truly brings joy and fulfillment in life, particularly in the context of healthcare work.",
    author: "Shehani",
    publishDate: "2023-09-21",
    category: "Mindfulness",
    keywords: ["happiness", "philosophy", "fulfillment", "joy", "mindfulness"],
    duration: "10 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    googleDriveUrl: "https://drive.google.com/file/d/16SyBGC_lg3H88gYitP4BNS1KALeyCaHN/view",
    fileType: "doc",
    fileSize: "1.5 MB",
    isFeatured: true,
    tags: ["happiness", "philosophy", "fulfillment", "joy", "mindfulness"]
  },
  {
    id: 'gd-article-3',
    title: "Sleep Optimization for Healthcare Workers on Rotating Shifts",
    description: "Comprehensive guide to managing sleep patterns for healthcare workers on irregular schedules. Includes practical tips for circadian rhythm management and energy optimization.",
    author: "Dr. Emily Rodriguez",
    publishDate: "2024-01-05",
    category: "Sleep",
    keywords: ["sleep", "shift-work", "circadian-rhythm", "healthcare"],
    duration: "10 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=200&fit=crop",
    googleDriveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_3/view",
    fileType: "pdf",
    fileSize: "1.5 MB",
    tags: ["sleep", "shift-work", "circadian-rhythm", "healthcare"]
  },
  {
    id: 'gd-article-4',
    title: "Mindfulness Practices for Busy Healthcare Professionals",
    description: "Quick and effective mindfulness techniques that can be practiced during short breaks. Designed specifically for healthcare workers who need stress relief in demanding environments.",
    author: "Dr. Lisa Thompson",
    publishDate: "2024-01-01",
    category: "Mindfulness",
    keywords: ["mindfulness", "meditation", "stress-relief", "healthcare"],
    duration: "8 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    googleDriveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_4/view",
    fileType: "pdf",
    fileSize: "1.2 MB",
    tags: ["mindfulness", "meditation", "stress-relief", "healthcare"]
  },
  {
    id: 'gd-article-5',
    title: "Peer Support Networks: Building Community in Healthcare",
    description: "How to create and maintain supportive peer networks in healthcare settings. Strategies for building meaningful connections with colleagues who understand the unique challenges of healthcare work.",
    author: "Dr. James Wilson",
    publishDate: "2023-12-28",
    category: "Community",
    keywords: ["peer-support", "community", "healthcare", "networking"],
    duration: "18 min read",
    durationCategory: "long",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=200&fit=crop",
    googleDriveUrl: "https://drive.google.com/file/d/YOUR_FILE_ID_5/view",
    fileType: "pdf",
    fileSize: "2.8 MB",
    tags: ["peer-support", "community", "healthcare", "networking"]
  }
];

// Helper function to get articles by category
export const getArticlesByCategory = (category: string) => {
  return externalArticles.filter(article => article.category === category);
};

// Helper function to get featured articles
export const getFeaturedArticles = () => {
  return externalArticles.filter(article => article.isFeatured);
};

// Helper function to search articles
export const searchArticles = (query: string) => {
  const searchTerm = query.toLowerCase();
  return externalArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.description.toLowerCase().includes(searchTerm) ||
    article.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm)) ||
    article.author?.toLowerCase().includes(searchTerm)
  );
}; 