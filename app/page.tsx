'use client';
import { useState, useEffect, useRef } from 'react';

export default function Page() {
    const [isNotificationVisible, setIsNotificationVisible] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleResize = () => {
            checkMobile();
        };

        // Initial check
        checkMobile();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen apple-gradient text-white font-['SF_Pro_Display'] smooth-scroll overflow-x-hidden">
            {/* Interactive cursor follower - Hidden on mobile */}
            {!isMobile && (
                <div 
                    className="fixed w-6 h-6 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out blur-sm"
                    style={{
                        left: mousePosition.x - 12,
                        top: mousePosition.y - 12,
                        transform: `scale(${scrollY > 100 ? 0.5 : 1})`
                    }}
                />
            )}

            {/* Apple-style notification bar */}
            {isNotificationVisible && (
                <div className="glass-morphism text-white text-center py-3 md:py-4 px-4 md:px-6 text-xs md:text-sm font-medium border-b border-white/5 fade-in rounded-b-2xl md:rounded-b-3xl mx-2 md:mx-4">
                    <div className="flex items-center justify-center space-x-2 md:space-x-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="tracking-wide text-center">
                            🎉 Join 19.5k+ designers creating the future
                        </span>
                        <button
                            className="ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-xs smooth-animation hover:rotate-90"
                            onClick={() => setIsNotificationVisible(false)}
                            aria-label="Close notification"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Enhanced Apple-style Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-500">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3 md:py-4">
                    {/* Mobile: Hide left nav items, show hamburger */}
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-12 fade-in delay-100">
                        <span className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium tracking-wide smooth-animation hover:scale-105 relative group">
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </span>
                        <span className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium tracking-wide smooth-animation hover:scale-105 relative group">
                            Careers
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </span>
                        <span className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium tracking-wide smooth-animation hover:scale-105 relative group">
                            Features
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </span>
                    </div>

                    {/* Mobile hamburger menu */}
                    <div className="md:hidden">
                        <button className="w-8 h-8 glass-morphism rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center justify-center">
                            <div className="w-4 h-3 flex flex-col justify-between">
                                <div className="w-full h-0.5 bg-white rounded-full"></div>
                                <div className="w-full h-0.5 bg-white rounded-full"></div>
                                <div className="w-full h-0.5 bg-white rounded-full"></div>
                            </div>
                        </button>
                    </div>

                    {/* Logo - Responsive text size */}
                    <div className="text-lg md:text-xl font-bold tracking-tight apple-text-gradient fade-in delay-200 cursor-pointer hover:scale-105 transition-all duration-300">
                        VIBE STACKS AI
                    </div>

                    {/* Right side icons - Responsive */}
                    <div className="flex items-center space-x-3 md:space-x-6 fade-in delay-300">
                        {/* GitHub Icon */}
                        <a 
                            href="https://github.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 md:w-10 md:h-10 glass-morphism rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center justify-center group hover:scale-110 hover:rotate-12"
                            aria-label="GitHub"
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>

                        {/* Discord Icon */}
                        <a 
                            href="https://discord.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-8 h-8 md:w-10 md:h-10 glass-morphism rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center justify-center group hover:scale-110 hover:rotate-12"
                            aria-label="Discord"
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z"/>
                            </svg>
                        </a>

                        {/* Star count - Hidden on small mobile */}
                        <div className="hidden sm:flex items-center space-x-2 md:space-x-3 glass-morphism rounded-full px-3 md:px-4 py-1.5 md:py-2 smooth-animation hover:scale-105 cursor-pointer group">
                            <div className="w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold group-hover:rotate-12 transition-transform duration-300">
                                ★
                            </div>
                            <span className="text-gray-200 text-xs md:text-sm font-medium">19.5k</span>
                        </div>

                        {/* Profile - Smaller on mobile */}
                        <div className="w-8 h-8 md:w-10 md:h-10 glass-morphism rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center justify-center hover:scale-110 hover:rotate-12">
                            <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section with Enhanced Parallax */}
            <main
                ref={heroRef}
                className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 pt-16 md:pt-20"
                style={{ transform: !isMobile ? `translateY(${scrollY * 0.1}px)` : 'none' }}
            >
                {/* Enhanced floating background elements - Reduced on mobile */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl float-animation"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl float-animation delay-300"></div>
                    <div className="absolute top-1/2 right-1/3 w-24 h-24 md:w-48 md:h-48 bg-pink-500/5 rounded-full blur-3xl float-animation delay-500"></div>
                    
                    {/* Interactive floating elements - Hidden on mobile for performance */}
                    {!isMobile && (
                        <>
                            <div 
                                className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-3xl blur-xl transition-all duration-1000 ease-out"
                                style={{
                                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${scrollY * 0.1}deg)`
                                }}
                            ></div>
                            <div 
                                className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-3xl blur-xl transition-all duration-1000 ease-out"
                                style={{
                                    transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px) rotate(${-scrollY * 0.05}deg)`
                                }}
                            ></div>
                        </>
                    )}
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    {/* Enhanced Apple-style badge */}
                    <div className="inline-flex items-center mb-8 md:mb-16 fade-in delay-200">
                        <span className="glass-morphism rounded-full px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-blue-300 border border-blue-400/20 smooth-animation hover:scale-105 hover:border-blue-400/40 cursor-pointer group">
                            <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full mr-2 md:mr-3 animate-pulse group-hover:bg-blue-400 transition-colors duration-300"></span>
                            We&apos;re Hiring • Join the Revolution
                        </span>
                    </div>

                    {/* Enhanced main heading with interactive effects - Responsive text */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black mb-8 md:mb-12 leading-[0.9] tracking-tight fade-in delay-300 cursor-default">
                        <span className="block apple-text-gradient hover:scale-105 transition-transform duration-500 inline-block">The Future</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:scale-105 transition-transform duration-500 inline-block">
                            for Designers
                        </span>
                    </h1>

                    {/* Enhanced subtitle - Responsive text */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide fade-in delay-400 px-4">
                        Create stunning UI/UX designs with the power of AI. <br className="hidden sm:block" />
                        <span className="text-blue-400 font-medium hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                            Where creativity meets intelligence.
                        </span>
                    </p>

                    {/* Enhanced CTA buttons - Mobile optimized */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 md:mb-20 fade-in delay-500 px-4">
                        <button className="apple-button text-white px-8 md:px-12 py-3 md:py-4 font-semibold text-base md:text-lg tracking-wide group relative overflow-hidden w-full sm:w-auto">
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        <button className="glass-morphism text-white px-8 md:px-12 py-3 md:py-4 font-medium text-base md:text-lg tracking-wide rounded-2xl smooth-animation hover:scale-105 hover:bg-white/10 group relative overflow-hidden w-full sm:w-auto">
                            <span className="relative z-10">Watch Demo</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        </button>
                    </div>

                    {/* Enhanced app preview with more curves - Mobile optimized */}
                    <div className="max-w-5xl mx-auto fade-in delay-600 px-4">
                        <div className="apple-card p-2 md:p-4 smooth-animation group">
                            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl md:rounded-3xl h-[400px] md:h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
                                {/* Enhanced mock interface elements */}
                                <div className="absolute top-3 md:top-6 left-3 md:left-6 flex space-x-1.5 md:space-x-2">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
                                </div>

                                <div className="text-center space-y-4 md:space-y-6 px-4">
                                    <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl md:rounded-3xl flex items-center justify-center border border-blue-400/30 mx-auto hover:scale-110 transition-all duration-500 cursor-pointer hover:rotate-12">
                                        <span className="text-2xl md:text-4xl">🎨</span>
                                    </div>
                                    <div className="space-y-2 md:space-y-3">
                                        <h3 className="text-lg md:text-2xl font-semibold apple-text-gradient hover:scale-105 transition-transform duration-300 cursor-default">
                                            AI-Powered Design Studio
                                        </h3>
                                        <p className="text-gray-400 max-w-md mx-auto hover:text-gray-300 transition-colors duration-300 text-sm md:text-base">
                                            Experience the next generation of design tools
                                        </p>
                                    </div>
                                    {/* Enhanced loading animation */}
                                    <div className="flex justify-center space-x-2 mt-6 md:mt-8">
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse hover:scale-150 transition-transform duration-300 cursor-pointer"></div>
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-pulse delay-200 hover:scale-150 transition-transform duration-300 cursor-pointer"></div>
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-pulse delay-400 hover:scale-150 transition-transform duration-300 cursor-pointer"></div>
                                    </div>
                                </div>

                                {/* Enhanced floating UI elements - Smaller on mobile */}
                                <div className="absolute top-12 md:top-20 right-4 md:right-20 glass-morphism rounded-xl md:rounded-2xl p-2 md:p-4 float-animation hover:scale-110 transition-all duration-300 cursor-pointer group">
                                    <div className="w-8 h-6 md:w-16 md:h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg md:rounded-xl group-hover:from-blue-400/40 group-hover:to-purple-400/40 transition-all duration-300"></div>
                                </div>
                                <div className="absolute bottom-12 md:bottom-20 left-4 md:left-20 glass-morphism rounded-xl md:rounded-2xl p-2 md:p-4 float-animation delay-300 hover:scale-110 transition-all duration-300 cursor-pointer group">
                                    <div className="w-6 h-8 md:w-12 md:h-16 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-lg md:rounded-xl group-hover:from-pink-400/40 group-hover:to-blue-400/40 transition-all duration-300"></div>
                                </div>

                                {/* Interactive grid pattern - Simplified for mobile */}
                                <div className="absolute inset-0 opacity-5 hover:opacity-10 transition-opacity duration-500">
                                    <div className="grid grid-cols-8 md:grid-cols-12 grid-rows-8 md:grid-rows-12 h-full w-full gap-1 p-2 md:p-4">
                                        {Array.from({ length: isMobile ? 64 : 144 }).map((_, i) => (
                                            <div 
                                                key={i} 
                                                className="bg-white/10 rounded-sm md:rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110"
                                                style={{ animationDelay: `${i * 10}ms` }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Enhanced additional sections - Mobile optimized */}
            <section className="py-16 md:py-32 px-4 md:px-8 relative">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 apple-text-gradient hover:scale-105 transition-transform duration-500 cursor-default">
                        Built for Creators
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto hover:text-gray-300 transition-colors duration-300">
                        Every tool you need to bring your creative vision to life, powered by
                        cutting-edge AI technology.
                    </p>

                    {/* Interactive feature cards - Mobile optimized */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
                        {[
                            { icon: '🚀', title: 'Lightning Fast', desc: 'Generate designs in seconds' },
                            { icon: '🎯', title: 'Pixel Perfect', desc: 'Precision in every detail' },
                            { icon: '🌟', title: 'AI Powered', desc: 'Smart design suggestions' }
                        ].map((feature, index) => (
                            <div 
                                key={index}
                                className="apple-card p-6 md:p-8 text-center group cursor-pointer hover:scale-105 transition-all duration-500"
                            >
                                <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-125 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold mb-2 apple-text-gradient">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}