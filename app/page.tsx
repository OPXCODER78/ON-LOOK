'use client';
import { useState, useEffect, useRef } from 'react';
export default function Page() {
    const [isNotificationVisible, setIsNotificationVisible] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="min-h-screen apple-gradient text-white font-['SF_Pro_Display'] smooth-scroll overflow-x-hidden">
            {' '}
            {/* Apple-style notification bar */}{' '}
            {isNotificationVisible && (
                <div className="glass-morphism text-white text-center py-4 px-6 text-sm font-medium border-b border-white/5 fade-in">
                    {' '}
                    <div className="flex items-center justify-center space-x-3">
                        {' '}
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>{' '}
                        <span className="tracking-wide">
                            {' '}
                            🎉 Join 19.5k+ designers creating the future{' '}
                        </span>{' '}
                        <button
                            className="ml-4 w-6 h-6 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-xs smooth-animation"
                            onClick={() => setIsNotificationVisible(false)}
                        >
                            {' '}
                            ✕{' '}
                        </button>{' '}
                    </div>{' '}
                </div>
            )}{' '}
            {/* Apple-style Navigation */}{' '}
            <nav className="fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-500">
                {' '}
                <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                    {' '}
                    <div className="flex items-center space-x-12 fade-in delay-100">
                        {' '}
                        <span className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium tracking-wide smooth-animation hover:scale-105">
                            {' '}
                            About{' '}
                        </span>{' '}
                        <span className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium tracking-wide smooth-animation hover:scale-105">
                            {' '}
                            Careers{' '}
                        </span>{' '}
                        <span className="text-gray-300 hover:text-white cursor-pointer text-sm font-medium tracking-wide smooth-animation hover:scale-105">
                            {' '}
                            Features{' '}
                        </span>{' '}
                    </div>{' '}
                    <div className="text-xl font-bold tracking-tight apple-text-gradient fade-in delay-200">
                        {' '}
                        VIBE STACKS AI{' '}
                    </div>{' '}
                    <div className="flex items-center space-x-6 fade-in delay-300">
                        {' '}
                        <div className="flex items-center space-x-3 glass-morphism rounded-full px-4 py-2 smooth-animation hover:scale-105">
                            {' '}
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">
                                {' '}
                                ★{' '}
                            </div>{' '}
                            <span className="text-gray-200 text-sm font-medium">19.5k</span>{' '}
                        </div>{' '}
                        <div className="w-8 h-8 glass-morphism rounded-full hover:bg-white/10 transition-all duration-300 cursor-pointer flex items-center justify-center">
                            {' '}
                            <div className="w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </nav>{' '}
            {/* Hero Section with Parallax */}{' '}
            <main
                ref={heroRef}
                className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-20"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
                {' '}
                {/* Floating background elements */}{' '}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {' '}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl float-animation"></div>{' '}
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl float-animation delay-300"></div>{' '}
                    <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl float-animation delay-500"></div>{' '}
                </div>{' '}
                {/* Content */}{' '}
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    {' '}
                    {/* Apple-style badge */}{' '}
                    <div className="inline-flex items-center mb-16 fade-in delay-200">
                        {' '}
                        <span className="glass-morphism rounded-full px-6 py-3 text-sm font-medium text-blue-300 border border-blue-400/20 smooth-animation hover:scale-105 hover:border-blue-400/40">
                            {' '}
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>{' '}
                            We're Hiring • Join the Revolution{' '}
                        </span>{' '}
                    </div>{' '}
                    {/* Apple-style main heading */}{' '}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-[0.9] tracking-tight fade-in delay-300">
                        {' '}
                        <span className="block apple-text-gradient">The Future</span>{' '}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            {' '}
                            for Designers{' '}
                        </span>{' '}
                    </h1>{' '}
                    {/* Apple-style subtitle */}{' '}
                    <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide fade-in delay-400">
                        {' '}
                        Create stunning UI/UX designs with the power of AI. <br />{' '}
                        <span className="text-blue-400 font-medium">
                            Where creativity meets intelligence.
                        </span>{' '}
                    </p>{' '}
                    {/* Apple-style CTA buttons */}{' '}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20 fade-in delay-500">
                        {' '}
                        <button className="apple-button text-white px-12 py-4 font-semibold text-lg tracking-wide">
                            {' '}
                            Get Started{' '}
                        </button>{' '}
                        <button className="glass-morphism text-white px-12 py-4 font-medium text-lg tracking-wide rounded-xl smooth-animation hover:scale-105 hover:bg-white/10">
                            {' '}
                            Watch Demo{' '}
                        </button>{' '}
                    </div>{' '}
                    {/* Apple-style app preview */}{' '}
                    <div className="max-w-5xl mx-auto fade-in delay-600">
                        {' '}
                        <div className="apple-card p-3 smooth-animation">
                            {' '}
                            <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
                                {' '}
                                {/* Mock interface elements */}{' '}
                                <div className="absolute top-6 left-6 flex space-x-2">
                                    {' '}
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>{' '}
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>{' '}
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>{' '}
                                </div>{' '}
                                <div className="text-center space-y-6">
                                    {' '}
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center border border-blue-400/30 mx-auto">
                                        {' '}
                                        <span className="text-4xl">🎨</span>{' '}
                                    </div>{' '}
                                    <div className="space-y-3">
                                        {' '}
                                        <h3 className="text-2xl font-semibold apple-text-gradient">
                                            {' '}
                                            AI-Powered Design Studio{' '}
                                        </h3>{' '}
                                        <p className="text-gray-400 max-w-md mx-auto">
                                            {' '}
                                            Experience the next generation of design tools{' '}
                                        </p>{' '}
                                    </div>{' '}
                                    {/* Loading animation */}{' '}
                                    <div className="flex justify-center space-x-2 mt-8">
                                        {' '}
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>{' '}
                                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>{' '}
                                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-400"></div>{' '}
                                    </div>{' '}
                                </div>{' '}
                                {/* Floating UI elements */}{' '}
                                <div className="absolute top-20 right-20 glass-morphism rounded-xl p-4 float-animation">
                                    {' '}
                                    <div className="w-16 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg"></div>{' '}
                                </div>{' '}
                                <div className="absolute bottom-20 left-20 glass-morphism rounded-xl p-4 float-animation delay-300">
                                    {' '}
                                    <div className="w-12 h-16 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-lg"></div>{' '}
                                </div>{' '}
                            </div>{' '}
                        </div>{' '}
                    </div>{' '}
                </div>{' '}
            </main>{' '}
            {/* Additional sections for smooth scrolling */}{' '}
            <section className="py-32 px-8">
                {' '}
                <div className="max-w-6xl mx-auto text-center">
                    {' '}
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 apple-text-gradient">
                        {' '}
                        Built for Creators{' '}
                    </h2>{' '}
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        {' '}
                        Every tool you need to bring your creative vision to life, powered by
                        cutting-edge AI technology.{' '}
                    </p>{' '}
                </div>{' '}
            </section>{' '}
        </div>
    );
}
