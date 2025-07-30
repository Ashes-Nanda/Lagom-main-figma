import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { ChevronDown, ChevronUp } from "lucide-react";

interface StandardCardProps {
  title: string;
  description: string;
  image?: string;
  category?: string;
  metadata?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  badges?: Array<{
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
    className?: string;
  }>;
  actions?: Array<{
    text: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    onClick?: () => void;
    href?: string;
    icon?: React.ReactNode;
    className?: string;
  }>;
  price?: string;
  expandable?: boolean;
  maxDescriptionLength?: number;
  className?: string;
}

export function StandardCard({
  title,
  description,
  image,
  category,
  metadata = [],
  badges = [],
  actions = [],
  price,
  expandable = true,
  maxDescriptionLength = 120,
  className = ""
}: StandardCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldTruncate = expandable && description.length > maxDescriptionLength;
  const displayDescription = shouldTruncate && !isExpanded 
    ? description.slice(0, maxDescriptionLength) + "..."
    : description;

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50 flex flex-col h-full ${className}`}>
      {image && (
        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardHeader className="pb-3 flex-shrink-0">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            {category && (
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
            )}
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant={badge.variant || "default"} 
                className={badge.className}
              >
                {badge.text}
              </Badge>
            ))}
          </div>
        </div>
        
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
        
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
        {metadata.length > 0 && (
          <div className="space-y-2 flex-shrink-0">
            {metadata.map((item, index) => (
              <div key={index} className="flex items-center text-sm text-muted-foreground">
                {item.icon}
                <span className="ml-2">{item.text}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2 mt-auto">
          {price && (
            <span className="text-lg font-semibold text-primary">
              {price}
            </span>
          )}
          
          {actions.length > 0 && (
            <div className="flex items-center gap-2 ml-auto">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  size={action.size || "sm"}
                  onClick={action.onClick}
                  className={action.className}
                  asChild={!!action.href}
                >
                  {action.href ? (
                    <a href={action.href} target="_blank" rel="noopener noreferrer">
                      {action.icon}
                      {action.text}
                    </a>
                  ) : (
                    <>
                      {action.icon}
                      {action.text}
                    </>
                  )}
                </Button>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}