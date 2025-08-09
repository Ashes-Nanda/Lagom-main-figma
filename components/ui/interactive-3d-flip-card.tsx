import React from "react";
import { cn } from "../../lib/utils";

interface GameCardData {
  id: string;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
  };
  back: {
    title: string;
    description: string;
    features: string[];
    buttonText: string;
  };
}

interface GameCardProps {
  data: GameCardData;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

function GameCard({
  data,
  className,
  width = 320,
  height = 320,
  onClick,
}: GameCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={cn(
        "group relative cursor-pointer rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-border",
        className
      )}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      onClick={handleClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={data.front.imageSrc}
          alt={data.front.imageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col justify-between p-4">
        {/* Default State - Only Title */}
        <div className="flex-1 flex flex-col justify-center space-y-3 group-hover:hidden">
          <h3 className="text-xl font-bold text-white drop-shadow-lg text-center leading-tight">
            {data.front.title}
          </h3>
        </div>
        
        {/* Hover State - Title + Description + Button */}
        <div className="flex-1 flex-col justify-between space-y-3 hidden group-hover:flex">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white drop-shadow-lg text-center leading-tight">
              {data.front.title}
            </h3>
            <p className="text-xs text-white/90 leading-relaxed font-medium text-center drop-shadow-sm overflow-hidden" 
               style={{
                 display: '-webkit-box',
                 WebkitLineClamp: 4,
                 WebkitBoxOrient: 'vertical',
               }}>
              {data.back.description}
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg">
              <span className="text-sm font-semibold text-primary">
                {data.back.buttonText}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export { GameCard, type GameCardData };