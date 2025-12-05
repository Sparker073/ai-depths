import  {NetworkBackground}  from '../components/NetworkBackground';
import { AIWheel } from '../components/AIWheel';

const NotFound = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <NetworkBackground />
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" style={{ zIndex: 1 }} />
      <div className="fixed inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 pointer-events-none" style={{ zIndex: 1 }} />

      {/* Content */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="font-display text-sm sm:text-base text-primary text-glow-subtle tracking-widest">
              AI_EXPLORE
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="hidden sm:inline text-xs text-muted-foreground uppercase tracking-wider">
                v1.0 Discovery
              </span>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
          {/* Title Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 sm:mb-8" />
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">Derrière chaque clic, une </span>
              <span className="gradient-text text-glow">intelligence</span>
              <br className="hidden sm:block" />
              <span className="gradient-text text-glow"> s'éveille</span>
              <span className="text-foreground"> — découvrez comment</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto mb-2">
              Explorez le monde de l'intelligence artificielle de manière simple et interactive
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/70">
              Conçu pour les collégiens, lycéens et étudiants
            </p>
          </div>

          {/* Interactive Wheel */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <AIWheel />
          </div>

        </div>

        {/* Footer */}
        <footer className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-muted-foreground/50">
            <span>© 2024 AI Explorer</span>
            <span className="hidden sm:inline">Apprendre l'IA en s'amusant</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default NotFound;
