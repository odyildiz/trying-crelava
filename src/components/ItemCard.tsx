import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  ChevronDown, 
  Play, 
  Volume2, 
  Camera, 
  FileText, 
  ExternalLink, 
  Clock,
  Globe,
  Music,
  Cloud,
  Award,
  Instagram,
  Linkedin,
  Edit,
  Code,
  Twitter,
  Images,
  Youtube
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Platform {
  name: string;
  url: string;
  icon: string;
}

interface ItemCardProps {
  type: 'video' | 'audio' | 'photography' | 'text';
  item: any;
  className?: string;
}

export function ItemCard({ type, item, className = '' }: ItemCardProps) {
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

  const getTypeColor = () => {
    switch (type) {
      case 'video':
        return 'bg-red-500/10 text-red-600 dark:text-red-400';
      case 'audio':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400';
      case 'photography':
        return 'bg-green-500/10 text-green-600 dark:text-green-400';
      case 'text':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
    }
  };

  const getPlatformIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'globe':
      case 'portfolio':
      case 'behance':
        return <Globe className="w-4 h-4" />;
      case 'music':
      case 'spotify':
        return <Music className="w-4 h-4" />;
      case 'cloud':
      case 'soundcloud':
        return <Cloud className="w-4 h-4" />;
      case 'camera':
      case '500px':
      case 'unsplash':
        return <Camera className="w-4 h-4" />;
      case 'edit':
      case 'medium':
        return <Edit className="w-4 h-4" />;
      case 'code':
      case 'dev.to':
        return <Code className="w-4 h-4" />;
      case 'award':
        return <Award className="w-4 h-4" />;
      case 'images':
      case 'gallery':
        return <Images className="w-4 h-4" />;
      case 'play':
      case 'vimeo':
        return <Play className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  const renderCollapsedContent = () => {
    switch (type) {
      case 'video':
        return (
          <div className="flex items-center gap-3">
            <div className="w-16 h-12 bg-black rounded-md flex items-center justify-center flex-shrink-0">
              <Play className="w-5 h-5 text-white opacity-70" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 truncate">{item.title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
            </div>
          </div>
        );
      case 'audio':
        return (
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Volume2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 truncate">{item.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="w-3 h-3" />
                <span>{item.duration}</span>
              </div>
            </div>
          </div>
        );
      case 'photography':
        return (
          <div className="flex items-center gap-3">
            <div className="w-16 h-12 overflow-hidden rounded-md flex-shrink-0">
              <ImageWithFallback 
                src={item.src} 
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 truncate">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.alt}</p>
            </div>
          </div>
        );
      case 'text':
        return (
          <div>
            <h3 className="mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{item.excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{item.date}</span>
              <span>{item.readTime}</span>
            </div>
          </div>
        );
    }
  };

  const renderExpandedContent = () => {
    switch (type) {
      case 'video':
        return (
          <div className="space-y-4">
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
              <Play className="w-16 h-16 text-white opacity-70" />
            </div>
            <div>
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags?.map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        );
      case 'audio':
        return (
          <div className="space-y-4">
            <div className="bg-muted rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-4">
                <Clock className="w-4 h-4" />
                <span>{item.duration}</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
        );
      case 'photography':
        return (
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <ImageWithFallback 
                src={item.src} 
                alt={item.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{item.alt}</p>
            </div>
          </div>
        );
      case 'text':
        return (
          <div className="space-y-4">
            <div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="flex-1">{item.title}</h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-2 flex-shrink-0" />
              </div>
              <p className="text-muted-foreground text-sm mb-4">{item.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span>{item.date}</span>
                <span>{item.readTime}</span>
              </div>
            </div>
          </div>
        );
    }
  };

  const renderPlatformButtons = () => {
    if (!item.platforms || item.platforms.length === 0) return null;

    return (
      <div className="pt-4 border-t">
        <div className="flex flex-wrap gap-2">
          {item.platforms.map((platform: Platform, index: number) => (
            <Button 
              key={index}
              variant="outline" 
              size="sm"
              className="flex items-center gap-2 hover:bg-accent transition-colors"
              onClick={() => window.open(platform.url, '_blank', 'noopener,noreferrer')}
            >
              {getPlatformIcon(platform.icon)}
              <span className="text-xs">{platform.name}</span>
            </Button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className={`p-2 rounded-lg flex-shrink-0 ${getTypeColor()}`}>
              {getIcon()}
            </div>
            <div className="min-w-0 flex-1">
              {!isExpanded && renderCollapsedContent()}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 flex-shrink-0"
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
              {renderExpandedContent()}
              {renderPlatformButtons()}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}