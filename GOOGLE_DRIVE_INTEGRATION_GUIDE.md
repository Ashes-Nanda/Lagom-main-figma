# Google Drive Article Integration Guide

## ✅ **Implementation Complete!**

The Google Drive article integration has been successfully implemented. Here's what's been added:

### **New Features:**
- 📁 **External Article Management**: `lib/articleData.ts`
- 🎴 **Enhanced Article Cards**: `components/ui/ArticleCard.tsx`
- 🔍 **Integrated Search & Filtering**: Updated `components/SelfHelpResources.tsx`
- 📊 **Updated Filter Counts**: Updated `pages/ResourcesPage.tsx`

### **How to Add Your Google Drive Articles:**

#### **Step 1: Get Your Google Drive File IDs**
1. Open your Google Drive folder: `https://drive.google.com/drive/folders/1rYAwwVhwZ1d5EU6Dlz7rC8gqaKh3-QAQ?usp=drive_link`
2. Right-click on each file → "Get link"
3. Copy the file ID from the URL (the long string between `/d/` and `/view`)
   - Example: `https://drive.google.com/file/d/1ABC123DEF456/view` → File ID is `1ABC123DEF456`

#### **Step 2: Update Article Data**
Edit `lib/articleData.ts` and replace the sample articles with your actual ones:

```typescript
export const externalArticles: ExternalArticle[] = [
  {
    id: 'your-article-1',
    title: "Your Article Title",
    description: "Your article description...",
    author: "Your Name",
    publishDate: "2024-01-20", // Use actual date
    category: "Burnout", // Choose: Burnout, Resilience, Sleep, Mindfulness, Community
    keywords: ["your", "keywords", "here"],
    duration: "12 min read", // Estimate reading time
    durationCategory: "medium", // "short", "medium", or "long"
    image: "https://images.unsplash.com/photo-...", // Choose relevant image
    googleDriveUrl: "https://drive.google.com/file/d/YOUR_ACTUAL_FILE_ID/view",
    fileType: "pdf", // "pdf", "doc", "docx", or "txt"
    fileSize: "1.5 MB", // Actual file size
    isFeatured: true, // Set to true for important articles
    tags: ["your", "tags", "here"]
  },
  // Add more articles...
];
```

#### **Step 3: Choose Relevant Images**
For each article, choose a relevant Unsplash image:
- **Burnout**: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop`
- **Resilience**: `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop`
- **Sleep**: `https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=200&fit=crop`
- **Mindfulness**: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop`
- **Community**: `https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=200&fit=crop`

#### **Step 4: Categorize Your Articles**
Choose appropriate categories:
- **Burnout**: Articles about healthcare worker burnout, prevention, recovery
- **Resilience**: Building emotional strength, coping strategies
- **Sleep**: Sleep hygiene, shift work, circadian rhythms
- **Mindfulness**: Meditation, stress relief, mindfulness practices
- **Community**: Peer support, networking, building connections

### **Features Available:**

#### **🎯 Rich Metadata Display**
- Author information
- Publication date
- File size and type
- Reading duration
- Tags and keywords

#### **⭐ Featured Articles Section**
- Highlight important articles at the top
- Set `isFeatured: true` for key content

#### **🔍 Advanced Search & Filtering**
- Search by title, description, author, keywords
- Filter by category, duration, file type
- Real-time results updating

#### **📱 Responsive Design**
- Works on all devices
- Touch-friendly interface
- Accessible design

#### **🔗 Multiple Access Options**
- **View**: Opens in Google Drive viewer
- **Download**: Direct download link
- **Preview**: Google Drive preview mode

### **Example Article Entry:**

```typescript
{
  id: 'burnout-guide-2024',
  title: "Comprehensive Burnout Prevention Guide for Healthcare Workers",
  description: "A detailed guide covering early warning signs, evidence-based prevention strategies, and recovery techniques specifically designed for healthcare professionals.",
  author: "Dr. Sarah Johnson",
  publishDate: "2024-01-15",
  category: "Burnout",
  keywords: ["burnout", "prevention", "healthcare", "recovery"],
  duration: "15 min read",
  durationCategory: "medium",
  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
  googleDriveUrl: "https://drive.google.com/file/d/1ABC123DEF456/view",
  fileType: "pdf",
  fileSize: "2.3 MB",
  isFeatured: true,
  tags: ["burnout", "healthcare", "mental-health", "prevention"]
}
```

### **Testing Your Integration:**

1. **Start the development server**: `npm run dev`
2. **Navigate to Resources page**: Go to `/resources`
3. **Check Articles tab**: You should see your articles listed
4. **Test search**: Try searching for article titles or keywords
5. **Test filters**: Use category and duration filters
6. **Test links**: Click "View" and "Download" buttons

### **Troubleshooting:**

#### **If articles don't appear:**
- Check that `googleDriveUrl` is correct
- Ensure file permissions are set to "Anyone with link can view"
- Verify the file ID is correct

#### **If images don't load:**
- Check that the Unsplash URLs are valid
- Try different image URLs if needed

#### **If search doesn't work:**
- Check that keywords and tags are properly set
- Ensure article titles and descriptions are accurate

### **Next Steps:**

1. **Add your actual articles** to `lib/articleData.ts`
2. **Test the integration** on the Resources page
3. **Customize the styling** if needed
4. **Add more categories** if required
5. **Update filter counts** as you add more articles

The integration is now ready for your Google Drive articles! 🎉 