'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle, Star, Users, TrendingUp, Zap, Target, Globe, Brain, Rocket, Settings, Calendar, MessageSquare, BarChart3, Clock, Shield, Award } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [pipelineValue, setPipelineValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      quote: "We had 12 qualified calls in our first 10 days. They built the entire system—copy, tools, flows. It just worked.",
      author: "Amir K.",
      title: "B2B SaaS CEO",
      location: "Dubai",
      flag: "🇦🇪"
    },
    {
      quote: "HealGain helped us crack into U.S. mid-market accounts without hiring more reps. Our CAC dropped by 40%.",
      author: "Julie M.",
      title: "CMO",
      location: "Paris",
      flag: "🇫🇷"
    },
    {
      quote: "Our SDRs love it. They finally get warm leads without wasting time on prospecting.",
      author: "Derrick T.",
      title: "Head of Sales",
      location: "Austin TX",
      flag: "🇺🇸"
    }
  ];

  const caseResults = [
    { company: "DTC Platform", result: "60 qualified calls in 90 days", icon: <TrendingUp className="w-6 h-6" /> },
    { company: "FinTech SaaS", result: "125 sales opportunities in 2 months", icon: <BarChart3 className="w-6 h-6" /> },
    { company: "HR Tech Company", result: "3 new clients per month from cold outbound alone", icon: <Users className="w-6 h-6" /> },
    { company: "Remote-first agency", result: "Opened Europe market with 23 discovery calls/month", icon: <Globe className="w-6 h-6" /> }
  ];

  const processSteps = [
    { title: "Discovery Call & Audit", icon: <MessageSquare className="w-8 h-8" /> },
    { title: "Build: ICP, Tools, Offers, Playbooks", icon: <Settings className="w-8 h-8" /> },
    { title: "Launch Campaigns", icon: <Rocket className="w-8 h-8" /> },
    { title: "Deliver Leads to Calendar", icon: <Calendar className="w-8 h-8" /> },
    { title: "Weekly Optimization", icon: <TrendingUp className="w-8 h-8" /> },
    { title: "Scale & Expand", icon: <Target className="w-8 h-8" /> }
  ];

  const faqs = [
    {
      question: "Do you write the copy and build the tools?",
      answer: "Yes. Everything is done-for-you."
    },
    {
      question: "What if outbound doesn't work for us?",
      answer: "We iterate until it does. You'll never be stuck with a non-performing funnel."
    },
    {
      question: "How fast can we launch?",
      answer: "Within 7–14 days post-onboarding."
    },
    {
      question: "What's expected from our side?",
      answer: "Just 1–2 onboarding calls. We do the rest."
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const increment = 200000000 / 100;
        let current = 0;
        const counter = setInterval(() => {
          current += increment;
          if (current >= 200000000) {
            setPipelineValue(200000000);
            clearInterval(counter);
          } else {
            setPipelineValue(Math.floor(current));
          }
        }, 20);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#4985DE]/20 to-[#A9CBFF]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-[#C0A5EF]/20 to-[#E3DBFF]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-[#4985DE]/10 to-[#C0A5EF]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image 
                src="/healgain logo.svg" 
                alt="HealGain Logo" 
                width={48} 
                height={48}
                className="animate-bounce"
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-[#4985DE]/20 to-[#C0A5EF]/20 rounded-full blur-lg"></div>
            </div>
            <Image 
              src="/HealGain Text.svg" 
              alt="HealGain" 
              width={120} 
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <button className="bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Book Free Call
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4985DE]/10 to-[#C0A5EF]/10 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-[#4985DE] animate-spin" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] bg-clip-text text-transparent">
              Trusted by 500+ Companies Globally
            </span>
            <Star className="w-4 h-4 text-[#C0A5EF] animate-spin" />
          </div>

          {/* Main Headline with Typewriter Effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] bg-clip-text text-transparent animate-gradient">
              We Build Scalable
            </span>
            <br />
            <span className="text-gray-900 animate-fade-in-up">
              Outbound Engines
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#C0A5EF] to-[#4985DE] bg-clip-text text-transparent animate-gradient">
              That Win You Clients
            </span>
            <br />
            <span className="text-2xl md:text-4xl text-gray-600 animate-fade-in-up">
              —On Autopilot.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            Warm leads. High-intent signals. Full-stack automation.<br />
            <span className="font-semibold bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] bg-clip-text text-transparent">
              HealGain
            </span> powers B2B pipelines with precision-crafted outbound systems that never sleep—so your sales team can focus on closing, not chasing.
          </p>

          {/* Pipeline Value Counter */}
          <div className="mb-12">
            <div className="inline-block bg-gradient-to-r from-[#4985DE]/10 to-[#C0A5EF]/10 rounded-2xl p-8 animate-fade-in-up">
              <div className="text-sm text-gray-600 mb-2">Pipeline Generated</div>
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] bg-clip-text text-transparent">
                ${(pipelineValue / 1000000).toFixed(0)}M+
              </div>
              <div className="text-sm text-gray-500 mt-2">For our clients worldwide</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-[#4985DE] hover:text-[#4985DE] transition-all duration-300 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>See How We Work</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-gray-500 mb-6">Trusted by Founders, CMOs, and SDR Teams Globally</p>
            <p className="text-sm text-gray-400">Partnered with the best GTM platforms across Europe, UAE, and the U.S.</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-red-600">"The old outbound playbook is broken."</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-red-500 text-4xl mb-4">❌</div>
              <h3 className="font-semibold mb-2">Spray-and-pray doesn't work</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-red-500 text-4xl mb-4">😴</div>
              <h3 className="font-semibold mb-2">SDR burnout is real</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-red-500 text-4xl mb-4">🗑️</div>
              <h3 className="font-semibold mb-2">Generic cold emails? Deleted on arrival</h3>
            </div>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            We've helped clients unlock <span className="font-bold text-[#4985DE]">over $200M+ in pipeline</span> with our high-touch <span className="font-bold bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] bg-clip-text text-transparent">Precision Outbound</span> framework—combining data, automation, and intent.
          </p>
        </div>
      </section>

      {/* HealGain Model Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The HealGain Model: <span className="bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] bg-clip-text text-transparent">Precision Outbound™</span>
            </h2>
            <p className="text-xl text-gray-600">A modern hybrid between <strong>warm intent</strong> and <strong>cold signals</strong>, built for scale.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Warm Outbound */}
            <div className="bg-gradient-to-br from-[#4985DE]/10 to-[#A9CBFF]/10 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4985DE] to-[#A9CBFF] rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Warm Outbound</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#4985DE] mr-2 mt-0.5" />
                  <span>Retarget engaged website visitors, content viewers & ad clickers</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#4985DE] mr-2 mt-0.5" />
                  <span>Enriched data for high-context follow-ups</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#4985DE] mr-2 mt-0.5" />
                  <span>Personalized email flows, built on behavior</span>
                </li>
              </ul>
            </div>

            {/* Cold Outbound */}
            <div className="bg-gradient-to-br from-[#C0A5EF]/10 to-[#E3DBFF]/10 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#C0A5EF] to-[#E3DBFF] rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Cold Outbound</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#C0A5EF] mr-2 mt-0.5" />
                  <span>Identify ideal buyers using real-time firmographic & technographic data</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#C0A5EF] mr-2 mt-0.5" />
                  <span>Write compelling first-touch messages with AI-powered personalization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#C0A5EF] mr-2 mt-0.5" />
                  <span>Enrich with verified contact data from multiple sources</span>
                </li>
              </ul>
            </div>

            {/* GTM Ops */}
            <div className="bg-gradient-to-br from-[#4985DE]/10 via-[#C0A5EF]/10 to-[#E3DBFF]/10 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4985DE] via-[#C0A5EF] to-[#E3DBFF] rounded-full flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">GTM Ops & Stack Management</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#4985DE] mr-2 mt-0.5" />
                  <span>Centralized dashboards</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#4985DE] mr-2 mt-0.5" />
                  <span>Smart routing to your CRM</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-[#4985DE] mr-2 mt-0.5" />
                  <span>Calendar auto-booking + reminders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Who We Work With</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Tech Startups & SaaS Founders (Seed to Series B)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Agencies looking to scale lead flow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">Remote B2B companies with long sales cycles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg">SDR teams seeking top-of-funnel firepower</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">If you're:</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#4985DE] rounded-full"></div>
                  <span>Tired of pipeline droughts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C0A5EF] rounded-full"></div>
                  <span>Launching a new market</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#4985DE] rounded-full"></div>
                  <span>Struggling with SDR churn</span>
                </li>
              </ul>
              <p className="mt-6 font-semibold">Let's build your outbound machine.</p>
              <button className="mt-4 bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule your free call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Use Cases We Solve</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-[#4985DE]/10 to-[#A9CBFF]/10 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Brain className="w-12 h-12 text-[#4985DE] mb-4" />
              <h3 className="text-xl font-bold mb-3">GTM Validation for Founders</h3>
              <p className="text-gray-600">Validate your ICP with real buyers in weeks, not quarters.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#C0A5EF]/10 to-[#E3DBFF]/10 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Rocket className="w-12 h-12 text-[#C0A5EF] mb-4" />
              <h3 className="text-xl font-bold mb-3">SDR Augmentation</h3>
              <p className="text-gray-600">Let your reps close—while we fill the top.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#4985DE]/10 to-[#C0A5EF]/10 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Globe className="w-12 h-12 text-[#4985DE] mb-4" />
              <h3 className="text-xl font-bold mb-3">New Market Penetration</h3>
              <p className="text-gray-600">Expand into the U.S., Europe, or GCC with geo-targeted outbound.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#C0A5EF]/10 to-[#4985DE]/10 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Target className="w-12 h-12 text-[#C0A5EF] mb-4" />
              <h3 className="text-xl font-bold mb-3">Scalable Personalization</h3>
              <p className="text-gray-600">From 50 to 5,000 messages/month—without losing the human touch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Client Testimonials</h2>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl mb-6">💬</div>
              <blockquote className="text-xl italic mb-6">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">{testimonials[currentTestimonial].flag}</span>
                <div>
                  <div className="font-bold">{testimonials[currentTestimonial].author}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].location}</div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-[#4985DE] to-[#C0A5EF]' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Traditional vs HealGain</h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#4985DE] to-[#C0A5EF]">
                    <th className="px-6 py-4 text-left text-white font-bold"></th>
                    <th className="px-6 py-4 text-left text-white font-bold">Traditional Outbound</th>
                    <th className="px-6 py-4 text-left text-white font-bold">HealGain Engine</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold">Targeting</td>
                    <td className="px-6 py-4 text-red-600">Manual ICP guesswork</td>
                    <td className="px-6 py-4 text-green-600">Real-time firmographic & intent</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold">Personalization</td>
                    <td className="px-6 py-4 text-red-600">First name only</td>
                    <td className="px-6 py-4 text-green-600">Dynamic, signal-based messaging</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold">Delivery</td>
                    <td className="px-6 py-4 text-red-600">One inbox, low scale</td>
                    <td className="px-6 py-4 text-green-600">Multi-domain, AI-powered sending</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold">Results</td>
                    <td className="px-6 py-4 text-red-600">Slow, inconsistent</td>
                    <td className="px-6 py-4 text-green-600">Pipeline in 30–45 days</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold">Team Focus</td>
                    <td className="px-6 py-4 text-red-600">SDRs = prospecting & demos</td>
                    <td className="px-6 py-4 text-green-600">SDRs = just demos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Case Results</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseResults.map((result, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] rounded-full flex items-center justify-center mr-4 text-white">
                    {result.icon}
                  </div>
                  <h3 className="font-bold">{result.company}</h3>
                </div>
                <p className="text-gray-600">{result.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-[#4985DE]/10 to-[#C0A5EF]/10 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] rounded-full flex items-center justify-center mr-4 text-white">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-[#4985DE] to-[#C0A5EF] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#4985DE] to-[#C0A5EF]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">FAQ Highlights</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#4985DE] to-[#C0A5EF]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to unlock scalable outbound growth?</h2>
          <p className="text-xl mb-8 opacity-90">
            We'll show you how we build outbound systems for companies just like yours—with results that speak for themselves.
          </p>
          <button className="bg-white text-[#4985DE] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <Calendar className="w-5 h-5" />
            <span>Schedule Your Free Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Image 
              src="/healgain logo.svg" 
              alt="HealGain Logo" 
              width={32} 
              height={32}
            />
            <Image 
              src="/HealGain Text.svg" 
              alt="HealGain" 
              width={100} 
              height={24}
              className="h-6 w-auto"
            />
          </div>
          <p className="text-gray-400">© 2025 HealGain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}