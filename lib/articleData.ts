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
    title: "Human First",
    description: "This document explores the challenges faced by healthcare professionals, including burnout and depression, and the stigma surrounding mental health in their field. It introduces LAGOM, an organization dedicated to improving mental well-being among healthcare workers by fostering a supportive community and reframing perceptions of mental health conditions.",
    author: "Vyshnavi (Reviewed by Shey)",
    publishDate: "2021-05-23",
    category: "Mental Health",
    keywords: ["healthcare-professionals", "mental-health", "burnout", "stigma", "community", "lagom"],
    duration: "4-5 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    googleDriveUrl: "https://docs.google.com/document/d/1TblCAmcPoAht1ytfPv8oXLL0ewlMzs7x/edit",
    fileType: "doc",
    fileSize: "1.2 MB",
    isFeatured: true,
    tags: ["healthcare-professionals", "mental-health", "burnout", "stigma", "community", "lagom"]
  },
  {
    id: 'shehani-article-1',
    title: "What is the root of happiness?",
    description: "This article explores the fundamental basis of happiness, delving into how individuals can rediscover their happy selves amidst life's challenges. It discusses the importance of purposeful living, meaningful relationships, and self-discovery as key components to achieving lasting happiness.",
    author: "Shehani for David's blog",
    publishDate: "2023-09-21",
    category: "Resilience",
    keywords: ["happiness", "purpose", "meaning", "relationships", "self-discovery"],
    duration: "8 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    googleDriveUrl: "https://docs.google.com/document/d/16SyBGC_lg3H88gYitP4BNS1KALeyCaHN/edit",
    fileType: "doc",
    fileSize: "1.5 MB",
    isFeatured: true,
    tags: ["happiness", "purpose", "meaning", "relationships", "self-discovery"]
  },
  {
    id: 'vyshnavi-article-2',
    title: "Doctors get sick too",
    description: "This article discusses the pervasive issue of mental health challenges and toxic workplace culture within the healthcare community. It highlights the difficulties healthcare professionals face in admitting illness, seeking help, and the systemic burdens that contribute to burnout and high suicide rates among physicians.",
    author: "Vyshnavi",
    publishDate: "2024-01-15",
    category: "Burnout",
    keywords: ["healthcare", "mental-health", "burnout", "workplace-culture", "physicians"],
    duration: "8 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
    googleDriveUrl: "https://docs.google.com/document/d/1thvsPc2P8OTwND9Bk8GO_ji2CvVjZ6uK/edit",
    fileType: "doc",
    fileSize: "1.8 MB",
    isFeatured: false,
    tags: ["healthcare", "mental-health", "burnout", "workplace-culture", "physicians"]
  },
  {
    id: 'wolverine-article-1',
    title: "Wolverine of the wards",
    description: "This article explores the emotional toll on healthcare professionals, often seen as 'heroes' or 'saviors,' who constantly face loss and are expected to remain stoic. It delves into the internal struggle of processing grief while immediately moving on to the next patient, highlighting the irony of a 'saviour' who cannot save themselves.",
    author: "Anonymous",
    publishDate: "2024-01-10",
    category: "Burnout",
    keywords: ["healthcare", "grief", "burnout", "resilience", "emotional-labor"],
    duration: "3 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    googleDriveUrl: "https://docs.google.com/document/d/1jk_WgJz3V-2REeY43wrfKUHcDXd_779C/edit",
    fileType: "docx",
    fileSize: "1.1 MB",
    isFeatured: true,
    tags: ["healthcare", "grief", "burnout", "resilience", "emotional-labor"]
  },
  {
    id: 'brenner-article-1',
    title: "Physicians Aren't Immune to Suicide and Depression",
    description: "This article highlights the systemic neglect of doctors' mental health, discussing the high rates of burnout, depression, and suicide among physicians. It emphasizes the demanding nature of the medical profession and the cultural barriers that prevent doctors from seeking help, calling for better research and organizational interventions to address this crisis.",
    author: "Grant H Brenner",
    publishDate: "2024-01-08",
    category: "Burnout",
    keywords: ["physician-mental-health", "suicide", "depression", "burnout", "medical-training"],
    duration: "8 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=200&fit=crop",
    googleDriveUrl: "https://docs.google.com/document/d/1IN4TJMpzmt4yf3isPvvgna4vRO94l6WEsKvp_8pp56s/edit",
    fileType: "doc",
    fileSize: "2.1 MB",
    isFeatured: false,
    tags: ["physician-mental-health", "suicide", "depression", "burnout", "medical-training"]
  },
  {
    id: 'sathwikaw-article-1',
    title: "Empty beds and Musing Heads",
    description: "This article reflects on the profound silence found in empty hospital beds, contrasting it with the usual chaos. It delves into the emotional weight carried by healthcare professionals, revisiting memories of patients saved and lost, and the internal struggles faced when moments of rest bring no peace. The piece encourages self-reflection and seeking help to alleviate the burden.",
    author: "Sathwikaw",
    publishDate: "2021-07-01",
    category: "Burnout",
    keywords: ["healthcare", "emotional-toll", "hospital-life", "burnout", "resilience"],
    duration: "2 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=200&fit=crop",
    googleDriveUrl: "https://docs.google.com/document/d/1muAIrAcOJTzpV9oc-uPuxbVFWLz5HniekBOYvpwd45I/edit",
    fileType: "doc",
    fileSize: "0.8 MB",
    isFeatured: false,
    tags: ["healthcare", "emotional-toll", "hospital-life", "burnout", "resilience"]
  },
  {
    id: 'vyshnavi-article-3',
    title: "Atomic Habits- Book Synopsis",
    description: "This synopsis of James Clear's 'Atomic Habits' explores how small changes and consistent habits can lead to significant improvements. It provides practical strategies for forming good habits, breaking bad ones, and understanding the system behind behavior change.",
    author: "Vyshnavi",
    publishDate: "2021-12-06",
    category: "Training",
    keywords: ["habits", "self-care", "motivation", "productivity", "neuroscience"],
    duration: "8 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop",
    googleDriveUrl: "https://docs.google.com/document/d/160xA7H51oyOtf3GCmUoWq5Uf4HNwMK9J-innC-B_rfs/edit",
    fileType: "doc",
    fileSize: "1.6 MB",
    isFeatured: true,
    tags: ["habits", "self-care", "motivation", "productivity", "neuroscience"]
  },
  {
    id: 'vyshnavi-sathwikaw-article-1',
    title: "The only way to heal it is to feel it",
    description: "This article explores the concept of suffering and trauma, particularly in healthcare settings, and how individuals often feel disconnected or overwhelmed. It emphasizes that the only way to truly heal from trauma, including grief, bereavement, and relationship breakdowns, is to fully process and feel the emotions associated with these experiences.",
    author: "Vyshnavi & Sathwikaw",
    publishDate: "2024-01-20",
    category: "Grief",
    keywords: ["grief", "trauma", "healing", "suffering", "emotions"],
    duration: "3 min read",
    durationCategory: "short",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    googleDriveUrl: "https://docs.google.com/document/d/1q-g7ZPk8InnTwsKcj9PKMbd7i7J7uTGR/edit",
    fileType: "docx",
    fileSize: "1.0 MB",
    isFeatured: false,
    tags: ["grief", "trauma", "healing", "suffering", "emotions"]
  },

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