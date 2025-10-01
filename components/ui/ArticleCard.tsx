import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { ChevronDown, ChevronUp, ExternalLink, Download, Calendar, User, FileText } from "lucide-react";
import { ExternalArticle } from "../../lib/articleData";

interface ArticleCardProps {
  article: ExternalArticle;
  expandable?: boolean;
  maxDescriptionLength?: number;
  className?: string;
}

export function ArticleCard({
  article,
  expandable = true,
  maxDescriptionLength = 120,
  className = ""
}: ArticleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldTruncate = expandable && article.description.length > maxDescriptionLength;
  const displayDescription = shouldTruncate && !isExpanded 
    ? article.description.slice(0, maxDescriptionLength) + "..."
    : article.description;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50 flex flex-col h-full ${className}`}>
      {article.image && (
        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardHeader className="pb-3 flex-shrink-0">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="text-xs">
              {article.category}
            </Badge>
            {article.isFeatured && (
              <Badge variant="default" className="text-xs bg-accent text-accent-foreground">
                Featured
              </Badge>
            )}
            <Badge variant="secondary" className="text-xs">
              {article.fileType.toUpperCase()}
            </Badge>
          </div>
        </div>
        
        <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
        
        <div className="min-h-[3rem] flex flex-col justify-start">
          <CardDescription className="text-sm leading-relaxed">
            {displayDescription}
          </CardDescription>
          
          {shouldTruncate && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 p-0 h-auto text-xs text-accent hover:text-accent/80 self-start"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="w-3 h-3 ml-1" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="w-3 h-3 ml-1" />
                </>
              )}
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow flex flex-col justify-between space-y-3">
        <div className="space-y-2 flex-shrink-0">
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="w-4 h-4 mr-2" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{formatDate(article.publishDate)}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <FileText className="w-4 h-4 mr-2" />
            <span>{article.duration} • {article.fileSize}</span>
          </div>
        </div>
        
        <div className="pt-2 mt-auto space-y-3">
          <div className="flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {article.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{article.tags.length - 3} more
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2 justify-end">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-shrink-0"
            >
              <a 
                href={article.googleDriveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                View
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              asChild
              className="flex-shrink-0"
            >
              <a 
                href={article.googleDriveUrl.replace('/view', '/preview')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Download className="w-3 h-3" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 