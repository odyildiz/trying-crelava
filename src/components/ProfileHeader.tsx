import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, Linkedin, Mail, Globe, MapPin, Sun, Moon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from './ThemeProvider';

export function ProfileHeader() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-pink-950/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1597954149494-ca6258bd51b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwY296eSUyMGJhY2tncm91bmQlMjB0ZXh0dXJlfGVufDF8fHx8MTc1NjM4NzYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background texture"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Navigation */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <Button variant="secondary" size="sm" className="backdrop-blur-sm bg-white/80 dark:bg-black/80">
          Links
        </Button>
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={toggleTheme}
          className="backdrop-blur-sm bg-white/80 dark:bg-black/80"
        >
          {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </Button>
      </div>

      {/* Profile Content */}
      <div className="relative z-10 text-center pb-12 px-6">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/50 shadow-xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTYzNjA2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-white mb-2 drop-shadow-lg">Alex Morgan</h1>
          <div className="flex items-center justify-center gap-2 text-white/90 mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Creative Designer</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="backdrop-blur-sm bg-white/20 text-white border-white/30">
              UI/UX Design
            </Badge>
            <Badge variant="secondary" className="backdrop-blur-sm bg-white/20 text-white border-white/30">
              Photography
            </Badge>
            <Badge variant="secondary" className="backdrop-blur-sm bg-white/20 text-white border-white/30">
              Video Production
            </Badge>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white border-white/30">
            <Github className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white border-white/30">
            <Linkedin className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white border-white/30">
            <Mail className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/20 hover:bg-white/30 text-white border-white/30">
            <Globe className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}