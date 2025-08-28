import { ThemeProvider } from './components/ThemeProvider';
import { ProfileHeader } from './components/ProfileHeader';
import { ItemCard } from './components/ItemCard';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { ExternalLink, Play, Volume2, Camera, FileText } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function PortfolioContent() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'events', label: 'Events', icon: '📅' },
    { id: 'shop', label: 'Shop', icon: '🛍️' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  // Organized content by type with platform links
  const videoItems = [
    {
      title: "Brand Identity Animation",
      description: "Motion graphics project for a tech startup, showcasing brand evolution through animated storytelling.",
      tags: ["Motion Graphics", "Branding", "After Effects"],
      platforms: [
        { name: "YouTube", url: "https://youtube.com/watch?v=example1", icon: "youtube" },
        { name: "Vimeo", url: "https://vimeo.com/example1", icon: "play" },
        { name: "Portfolio", url: "https://portfolio.com/project1", icon: "globe" }
      ]
    },
    {
      title: "Product Demo Reel",
      description: "Commercial video highlighting product features with cinematic lighting and smooth transitions.",
      tags: ["Commercial", "Product Video", "Cinematography"],
      platforms: [
        { name: "YouTube", url: "https://youtube.com/watch?v=example2", icon: "youtube" },
        { name: "LinkedIn", url: "https://linkedin.com/posts/example2", icon: "linkedin" }
      ]
    },
    {
      title: "Documentary Short",
      description: "Award-winning short documentary about local artisans and their craft traditions.",
      tags: ["Documentary", "Storytelling", "Cultural"],
      platforms: [
        { name: "YouTube", url: "https://youtube.com/watch?v=example3", icon: "youtube" },
        { name: "Film Festival", url: "https://filmfestival.com/example3", icon: "award" }
      ]
    },
    {
      title: "Social Media Campaign",
      description: "Series of short-form videos for social media marketing across multiple platforms.",
      tags: ["Social Media", "Marketing", "Short Form"],
      platforms: [
        { name: "TikTok", url: "https://tiktok.com/@user/video/example4", icon: "music" },
        { name: "Instagram", url: "https://instagram.com/reel/example4", icon: "instagram" },
        { name: "YouTube Shorts", url: "https://youtube.com/shorts/example4", icon: "youtube" }
      ]
    }
  ];

  const audioItems = [
    {
      title: "Podcast Intro Theme",
      duration: "0:45",
      description: "Custom composed theme music for a technology podcast series.",
      platforms: [
        { name: "Spotify", url: "https://spotify.com/track/example1", icon: "music" },
        { name: "SoundCloud", url: "https://soundcloud.com/user/example1", icon: "cloud" },
        { name: "Apple Music", url: "https://music.apple.com/track/example1", icon: "music" }
      ]
    },
    {
      title: "Ambient Workspace",
      duration: "8:30",
      description: "Calming background music designed for focus and productivity.",
      platforms: [
        { name: "Spotify", url: "https://spotify.com/track/example2", icon: "music" },
        { name: "YouTube Music", url: "https://music.youtube.com/watch?v=example2", icon: "youtube" }
      ]
    },
    {
      title: "Brand Sonic Identity",
      duration: "2:15",
      description: "Audio branding package including jingles and sound effects.",
      platforms: [
        { name: "Portfolio", url: "https://portfolio.com/audio/example3", icon: "globe" },
        { name: "SoundCloud", url: "https://soundcloud.com/user/example3", icon: "cloud" }
      ]
    },
    {
      title: "Commercial Voiceover",
      duration: "1:30",
      description: "Professional voiceover work for product commercials and advertisements.",
      platforms: [
        { name: "Demo Reel", url: "https://portfolio.com/voiceover/example4", icon: "globe" },
        { name: "LinkedIn", url: "https://linkedin.com/posts/example4", icon: "linkedin" }
      ]
    }
  ];

  const photographyItems = [
    {
      src: "https://images.unsplash.com/photo-1727686679954-7ddd9f857abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaG90b2dyYXBoeSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTYzODc2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Portrait Photography",
      title: "Portrait Series",
      platforms: [
        { name: "Instagram", url: "https://instagram.com/p/example1", icon: "instagram" },
        { name: "Behance", url: "https://behance.net/gallery/example1", icon: "globe" },
        { name: "500px", url: "https://500px.com/photo/example1", icon: "camera" }
      ]
    },
    {
      src: "https://images.unsplash.com/photo-1543336472-fcf478c443db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTYzODc2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Studio Setup",
      title: "Behind the Scenes",
      platforms: [
        { name: "Instagram", url: "https://instagram.com/p/example2", icon: "instagram" },
        { name: "Portfolio", url: "https://portfolio.com/bts/example2", icon: "globe" }
      ]
    },
    {
      src: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTYzNjA2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Professional Headshot",
      title: "Corporate Work",
      platforms: [
        { name: "LinkedIn", url: "https://linkedin.com/posts/example3", icon: "linkedin" },
        { name: "Portfolio", url: "https://portfolio.com/corporate/example3", icon: "globe" }
      ]
    },
    {
      src: "https://images.unsplash.com/photo-1597954149494-ca6258bd51b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTYzODc2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Texture Photography",
      title: "Abstract Textures",
      platforms: [
        { name: "Instagram", url: "https://instagram.com/p/example4", icon: "instagram" },
        { name: "Unsplash", url: "https://unsplash.com/photos/example4", icon: "camera" }
      ]
    },
    {
      src: "https://images.unsplash.com/photo-1727686679954-7ddd9f857abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaG90b2dyYXBoeSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTYzODc2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Creative Portrait",
      title: "Creative Portraits",
      platforms: [
        { name: "Instagram", url: "https://instagram.com/p/example5", icon: "instagram" },
        { name: "Behance", url: "https://behance.net/gallery/example5", icon: "globe" }
      ]
    },
    {
      src: "https://images.unsplash.com/photo-1543336472-fcf478c443db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTYzODc2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Production Setup",
      title: "Event Photography",
      platforms: [
        { name: "Instagram", url: "https://instagram.com/p/example6", icon: "instagram" },
        { name: "Client Gallery", url: "https://gallery.com/event/example6", icon: "images" }
      ]
    }
  ];

  const textItems = [
    {
      title: "The Future of Design Systems",
      excerpt: "Exploring how design systems are evolving with AI and automation, and what this means for designers.",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      platforms: [
        { name: "Medium", url: "https://medium.com/@user/design-systems-future", icon: "edit" },
        { name: "Dev.to", url: "https://dev.to/user/design-systems-future", icon: "code" },
        { name: "LinkedIn", url: "https://linkedin.com/pulse/design-systems-future", icon: "linkedin" }
      ]
    },
    {
      title: "Building Accessible Digital Experiences",
      excerpt: "A comprehensive guide to creating inclusive design that works for everyone, regardless of ability.",
      date: "Dec 28, 2023",
      readTime: "8 min read",
      platforms: [
        { name: "Medium", url: "https://medium.com/@user/accessible-digital-experiences", icon: "edit" },
        { name: "Personal Blog", url: "https://blog.com/accessible-digital-experiences", icon: "globe" }
      ]
    },
    {
      title: "Color Psychology in Branding",
      excerpt: "Understanding how colors influence emotions and decision-making in brand design and marketing.",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      platforms: [
        { name: "Medium", url: "https://medium.com/@user/color-psychology-branding", icon: "edit" },
        { name: "UX Planet", url: "https://uxplanet.org/color-psychology-branding", icon: "globe" }
      ]
    },
    {
      title: "The Art of Visual Storytelling",
      excerpt: "How to craft compelling narratives through design, from concept to execution in digital media.",
      date: "Nov 22, 2023",
      readTime: "7 min read",
      platforms: [
        { name: "Medium", url: "https://medium.com/@user/visual-storytelling-art", icon: "edit" },
        { name: "Design Blog", url: "https://designblog.com/visual-storytelling-art", icon: "globe" },
        { name: "Twitter Thread", url: "https://twitter.com/user/status/visual-storytelling", icon: "twitter" }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Play className="w-5 h-5" />;
      case 'audio':
        return <Volume2 className="w-5 h-5" />;
      case 'photography':
        return <Camera className="w-5 h-5" />;
      case 'text':
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video':
        return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800';
      case 'audio':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800';
      case 'photography':
        return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800';
      case 'text':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800';
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Navigation */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 p-2 bg-card rounded-xl border shadow-sm">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentPage(item.id)}
                className="relative transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-md -z-10"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
        {/* Content Summary */}
        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="outline" className={`${getTypeColor('video')}`}>
            {getTypeIcon('video')}
            <span className="ml-2">Video ({videoItems.length})</span>
          </Badge>
          <Badge variant="outline" className={`${getTypeColor('audio')}`}>
            {getTypeIcon('audio')}
            <span className="ml-2">Audio ({audioItems.length})</span>
          </Badge>
          <Badge variant="outline" className={`${getTypeColor('photography')}`}>
            {getTypeIcon('photography')}
            <span className="ml-2">Photography ({photographyItems.length})</span>
          </Badge>
          <Badge variant="outline" className={`${getTypeColor('text')}`}>
            {getTypeIcon('text')}
            <span className="ml-2">Articles ({textItems.length})</span>
          </Badge>
        </div>

        {/* Video Production Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-500/10 rounded-lg text-red-600 dark:text-red-400">
              <Play className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-red-600 dark:text-red-400">Video Production</h2>
              <p className="text-muted-foreground text-sm">Motion graphics, commercials, and documentaries</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoItems.map((item, index) => (
              <ItemCard
                key={`video-${index}`}
                type="video"
                item={item}
              />
            ))}
          </div>
        </section>

        {/* Audio Design Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-400">
              <Volume2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-purple-600 dark:text-purple-400">Audio Design</h2>
              <p className="text-muted-foreground text-sm">Music composition and sound design projects</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audioItems.map((item, index) => (
              <ItemCard
                key={`audio-${index}`}
                type="audio"
                item={item}
              />
            ))}
          </div>
        </section>

        {/* Photography Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-500/10 rounded-lg text-green-600 dark:text-green-400">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-green-600 dark:text-green-400">Photography</h2>
              <p className="text-muted-foreground text-sm">Portrait, commercial, and artistic photography</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyItems.map((item, index) => (
              <ItemCard
                key={`photography-${index}`}
                type="photography"
                item={item}
              />
            ))}
          </div>
        </section>

        {/* Writing & Articles Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-blue-600 dark:text-blue-400">Writing & Articles</h2>
              <p className="text-muted-foreground text-sm">Design insights and industry perspectives</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {textItems.map((item, index) => (
              <ItemCard
                key={`text-${index}`}
                type="text"
                item={item}
              />
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section>
          <h2 className="text-center mb-8 text-muted-foreground">Useful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3>Portfolio Website</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">
                  View my complete portfolio with detailed case studies and project breakdowns.
                </p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full">
                  Visit Portfolio
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3>Design Resources</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Free design resources, templates, and tools I've created for the community.
                </p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full">
                  Browse Resources
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3>Contact Form</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Get in touch for collaborations, projects, or just to say hello!
                </p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
            </motion.div>
          )}

          {currentPage === 'events' && (
            <motion.div
              key="events"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
                <p className="text-muted-foreground mb-8">Join me at these exciting events and workshops</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Creative Workshop",
                    date: "Feb 15, 2024",
                    location: "Design Studio NYC",
                    description: "Learn advanced photography techniques and creative composition."
                  },
                  {
                    title: "Portfolio Review",
                    date: "Feb 28, 2024",
                    location: "Online Event",
                    description: "Get personalized feedback on your creative portfolio."
                  },
                  {
                    title: "Art Exhibition",
                    date: "Mar 10, 2024",
                    location: "Gallery Downtown",
                    description: "Showcasing latest photography and design work."
                  }
                ].map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        <p>📅 {event.date}</p>
                        <p>📍 {event.location}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">{event.description}</p>
                      <Button size="sm" className="w-full">Register</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {currentPage === 'shop' && (
            <motion.div
              key="shop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Creative Shop</h2>
                <p className="text-muted-foreground mb-8">Digital products, prints, and creative resources</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Photography Presets",
                    price: "$29",
                    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=200&fit=crop",
                    description: "Professional Lightroom presets for stunning photos."
                  },
                  {
                    title: "Design Templates",
                    price: "$19",
                    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=200&fit=crop",
                    description: "Modern templates for social media and branding."
                  },
                  {
                    title: "Art Prints",
                    price: "$45",
                    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
                    description: "High-quality prints of original photography work."
                  }
                ].map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{product.title}</h3>
                        <span className="text-lg font-bold text-primary">{product.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">{product.description}</p>
                      <Button size="sm" className="w-full">Add to Cart</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-muted-foreground mb-8">Creative designer passionate about visual storytelling</p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">My Journey</h3>
                      <p className="text-muted-foreground">
                        With over 8 years of experience in creative design, I specialize in photography, 
                        video production, and digital art. My work focuses on capturing authentic moments 
                        and creating compelling visual narratives.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Skills & Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Photography', 'Video Production', 'Graphic Design', 'UI/UX Design', 'Brand Identity', 'Digital Art'].map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Awards & Recognition</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>🏆 Best Photography Portfolio 2023</li>
                        <li>🎨 Creative Design Award 2022</li>
                        <li>📸 International Photo Contest Winner</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="aspect-square overflow-hidden rounded-2xl">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                        alt="About me"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">Let's collaborate on your next creative project</p>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span>📧</span>
                          <span>hello@alexmorgan.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>📱</span>
                          <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>📍</span>
                          <span>New York, NY</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Services</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Portrait Photography</li>
                        <li>• Brand Design</li>
                        <li>• Video Production</li>
                        <li>• Creative Consulting</li>
                      </ul>
                    </div>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <h3 className="font-semibold">Send a Message</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Name</label>
                        <input 
                          type="text" 
                          className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <input 
                          type="email" 
                          className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Message</label>
                        <textarea 
                          className="w-full mt-1 px-3 py-2 border rounded-md bg-background h-24 resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                      <Button className="w-full">Send Message</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}