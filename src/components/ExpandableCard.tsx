import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronDown, Play, Volume2, Camera, FileText, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExpandableCardProps {
  title: string;
  description: string;
  type: 'video' | 'audio' | 'photography' | 'text';
  content: any;
  className?: string;
}

export function ExpandableCard({ title, description, type, content, className = '' }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    switch (type) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'audio':
        return <Volume2 className="w-4 h-4" />;
      case 'photography':
        return <Camera className="w-4 h-4" />;
      case 'text':
        return <FileText className="w-4 h-4" />;
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'video':
        return (
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {content.videos?.map((video: any, index: number) => (
                <div key={index} className="bg-muted rounded-lg p-4 min-w-80 flex-shrink-0">
                  <div className="aspect-video bg-black rounded-lg flex items-center justify-center mb-3">
                    <Play className="w-12 h-12 text-white opacity-70" />
                  </div>
                  <h4 className="mb-2">{video.title}</h4>
                  <p className="text-muted-foreground text-sm">{video.description}</p>
                  <div className="flex gap-2 mt-3">
                    {video.tags?.map((tag: string, tagIndex: number) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'audio':
        return (
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {content.tracks?.map((track: any, index: number) => (
                <div key={index} className="bg-muted rounded-lg p-4 min-w-80 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Volume2 className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="mb-1">{track.title}</h4>
                      <p className="text-muted-foreground text-sm">{track.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{track.description}</p>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-1/3"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'photography':
        return (
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {content.photos?.map((photo: any, index: number) => (
                <div key={index} className="group cursor-pointer flex-shrink-0">
                  <div className="w-48 h-48 overflow-hidden rounded-lg">
                    <ImageWithFallback 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm mt-2 text-muted-foreground max-w-48 truncate">{photo.title}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'text':
        return (
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {content.articles?.map((article: any, index: number) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors min-w-80 flex-shrink-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="flex-1 pr-2">{article.title}</h4>
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              {getIcon()}
            </div>
            <div>
              <h3 className="mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </Button>
        </div>
      </CardHeader>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="pt-0">
              {renderContent()}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}