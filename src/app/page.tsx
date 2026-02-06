"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Palette,
  DollarSign,
  ClipboardList,
  FileText,
  Users,
  MessageSquare,
  BarChart3,
  Award,
  Search,
  Star,
  ArrowRight,
  Zap,
  ExternalLink,
  BrainCircuit,
  Landmark,
  TrendingUp,
  Clock,
  UserCheck,
  CalendarDays,
  Megaphone,
  Globe,
  Share2,
  ListChecks,
  Cpu,
  NotebookPen,
  ShieldCheck,
  Calculator,
  Lock,
  LogOut,
} from "lucide-react";
import { portalConfig } from "../portal.config";

interface AppCard {
  name: string;
  description: string;
  icon: React.ElementType;
  url: string;
  gradient: string;
  iconBg: string;
  status: "live" | "coming-soon" | "in-development";
  tier: "flagship" | "daily-ops" | "tier3" | "advisor";
  configKey: keyof typeof portalConfig.apps;
}

const allApps: AppCard[] = [
  // Daily Operations Apps
  {
    name: "Lead Follow Up",
    description:
      "One-click access to your Go High Level Opportunities pipeline. Track leads, manage follow-ups, and never miss a prospect again.",
    icon: UserCheck,
    url: "https://tsai-lead-follow-up.vercel.app",
    gradient: "from-cyan-600 to-blue-600",
    iconBg: "bg-cyan-500/20",
    status: "live",
    tier: "daily-ops",
    configKey: "leadFollowUp",
  },
  {
    name: "Calendar / Appointments",
    description:
      "One-click access to your Google Calendar. View your schedule, add appointments, and manage your day — all from the portal.",
    icon: CalendarDays,
    url: "https://tsai-calendar.vercel.app",
    gradient: "from-blue-600 to-indigo-600",
    iconBg: "bg-blue-500/20",
    status: "live",
    tier: "daily-ops",
    configKey: "calendar",
  },
  {
    name: "Daily Marketing",
    description:
      "Monthly marketing plan with activity tracking, lead goals, needs checklist, strategy notes, and print support.",
    icon: Megaphone,
    url: "https://tsai-daily-marketing.vercel.app",
    gradient: "from-pink-600 to-rose-600",
    iconBg: "bg-pink-500/20",
    status: "live",
    tier: "daily-ops",
    configKey: "dailyMarketing",
  },
  {
    name: "Daily Web / Financials",
    description:
      "Set rolling 3-day revenue goals across all income streams. Goals we set are goals we get.",
    icon: Globe,
    url: "https://tsai-daily-web-financials.vercel.app",
    gradient: "from-emerald-600 to-green-600",
    iconBg: "bg-emerald-500/20",
    status: "live",
    tier: "daily-ops",
    configKey: "dailyWebFinancials",
  },
  {
    name: "Social Media & SEO",
    description:
      "Post to your social platforms and track SEO performance. Google Analytics, Search Console, blog posts, and all your social channels in one place.",
    icon: Share2,
    url: "https://tsai-social-media.vercel.app",
    gradient: "from-violet-600 to-purple-600",
    iconBg: "bg-violet-500/20",
    status: "live",
    tier: "daily-ops",
    configKey: "socialMedia",
  },
  {
    name: "Bonus/Profit Calculator",
    description:
      "Track daily cash intake and expenses with running totals. See your monthly profit or loss at a glance. Export and print your reports.",
    icon: Calculator,
    url: "https://tsai-bonus-calculator.vercel.app",
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/20",
    status: "live",
    tier: "daily-ops",
    configKey: "bonusCalculator",
  },
  {
    name: "Manager's Log",
    description:
      "Record phone calls, customer interactions, staff notes, incidents, and decisions. Auto-saved, searchable, and exportable — your team's business diary.",
    icon: NotebookPen,
    url: "https://tsai-managers-log.vercel.app",
    gradient: "from-teal-600 to-cyan-600",
    iconBg: "bg-teal-500/20",
    status: "live",
    tier: "daily-ops",
    configKey: "managersLog",
  },
  {
    name: "Brand / Sanitation",
    description:
      "Daily brand consistency checks — ensure signage, messaging, cleanliness standards, and customer-facing materials meet your standards.",
    icon: ShieldCheck,
    url: "https://tsai-brand-sanitation.vercel.app",
    gradient: "from-indigo-600 to-blue-600",
    iconBg: "bg-indigo-500/20",
    status: "live",
    tier: "daily-ops",
    configKey: "brandSanitation",
  },
  // Tier 2 Flagship Companion Apps (Build Series)
  {
    name: "Brand Book Creator",
    description:
      "Build your complete brand identity — voice, values, visual guidelines, audience personas, and messaging pillars. Shareable and downloadable.",
    icon: Palette,
    url: "https://ts-brand-book-creator.vercel.app",
    gradient: "from-violet-600 to-indigo-600",
    iconBg: "bg-violet-500/20",
    status: "live",
    tier: "flagship",
    configKey: "brandBookCreator",
  },
  {
    name: "P&L Creation System",
    description:
      "Interactive 3-year financial projections with 3 growth scenarios. Custom revenue streams, expense categories, and Excel export with real formulas.",
    icon: DollarSign,
    url: "https://p-l-creation-system.vercel.app",
    gradient: "from-emerald-600 to-teal-600",
    iconBg: "bg-emerald-500/20",
    status: "live",
    tier: "flagship",
    configKey: "pAndLCreation",
  },
  {
    name: "Delegation Engine",
    description:
      "Audit your time, calculate your true hourly worth, and build delegation plans that free you to focus on high-impact work.",
    icon: ClipboardList,
    url: "https://delegation-engine.vercel.app",
    gradient: "from-amber-600 to-orange-600",
    iconBg: "bg-amber-500/20",
    status: "live",
    tier: "flagship",
    configKey: "delegationEngine",
  },
  {
    name: "SOP Factory",
    description:
      "Create standardized operating procedures that maintain your brand voice. The central hub connecting all your business systems.",
    icon: FileText,
    url: "https://tsai-sop-factory.vercel.app",
    gradient: "from-blue-600 to-sky-600",
    iconBg: "bg-blue-500/20",
    status: "live",
    tier: "flagship",
    configKey: "sopFactory",
  },
  {
    name: "Hiring Oracle",
    description:
      "AI-powered hiring system using your brand values and financial data to find, evaluate, and onboard the right team members.",
    icon: Users,
    url: "https://tsai-hiring-oracle.vercel.app",
    gradient: "from-teal-600 to-cyan-600",
    iconBg: "bg-teal-500/20",
    status: "live",
    tier: "flagship",
    configKey: "hiringOracle",
  },
  {
    name: "Difficult Conversations Coach",
    description:
      "Navigate tough workplace conversations with confidence. Roleplay scenarios, scripts, and frameworks aligned with your values.",
    icon: MessageSquare,
    url: "https://tsai-difficult-conversations.vercel.app",
    gradient: "from-rose-600 to-pink-600",
    iconBg: "bg-rose-500/20",
    status: "live",
    tier: "flagship",
    configKey: "difficultConversations",
  },
  // Tier 3 Apps (Already Built)
  {
    name: "CEO Dashboard",
    description:
      "Real-time business KPIs pulled from GHL. Track revenue, pipeline, team performance, and client health at a glance.",
    icon: BarChart3,
    url: "https://ceo-dashboard.vercel.app",
    gradient: "from-blue-600 to-indigo-600",
    iconBg: "bg-blue-500/20",
    status: "live",
    tier: "tier3",
    configKey: "ceoDashboard",
  },
  {
    name: "Performance Review Pro",
    description:
      "Structured employee reviews with AI-generated conversation guides. Track goals, celebrate wins, and build stronger teams.",
    icon: Award,
    url: "https://performance-review-pro.vercel.app",
    gradient: "from-teal-600 to-green-600",
    iconBg: "bg-teal-500/20",
    status: "live",
    tier: "tier3",
    configKey: "performanceReviewPro",
  },
  {
    name: "Competitor Intel",
    description:
      "Monitor your competitors in real-time. Track pricing changes, new offerings, and market positioning automatically.",
    icon: Search,
    url: "https://competitor-intel.vercel.app",
    gradient: "from-orange-600 to-red-600",
    iconBg: "bg-orange-500/20",
    status: "live",
    tier: "tier3",
    configKey: "competitorIntel",
  },
  {
    name: "Refferq Referral Engine",
    description:
      "Automated referral tracking and rewards system. Turn happy clients into your best sales team with smart incentive programs.",
    icon: Star,
    url: "https://refferq-referral-engine.vercel.app",
    gradient: "from-yellow-600 to-amber-600",
    iconBg: "bg-yellow-500/20",
    status: "live",
    tier: "tier3",
    configKey: "refferqReferral",
  },
  // AI Tools and Strategy
  {
    name: "Attendance Tracker",
    description:
      "QR code scanning and manual check-in for students. Track attendance, manage classes, monitor promotion cycles, and generate reports.",
    icon: ListChecks,
    url: "https://pmma-ultimate-attendance-tracker.vercel.app",
    gradient: "from-sky-500 to-blue-600",
    iconBg: "bg-sky-500/20",
    status: "live",
    tier: "advisor",
    configKey: "attendanceTracker",
  },
  {
    name: "AI Tools",
    description:
      "Quick-launch your AI platforms — Claude, ChatGPT, Gemini, and Canva. One click to open any tool in a new tab.",
    icon: Cpu,
    url: "https://tsai-ai-tools.vercel.app",
    gradient: "from-orange-600 to-amber-600",
    iconBg: "bg-orange-500/20",
    status: "live",
    tier: "advisor",
    configKey: "aiTools",
  },
  {
    name: "Business Board of Advisors",
    description:
      "Chat with AI versions of Alex Hormozi, Mark Cuban, Gary Vee, Walt Disney, Charlie Munger, and Socrates. Get business advice from the greatest minds.",
    icon: Landmark,
    url: "https://business-board-web.vercel.app",
    gradient: "from-amber-500 to-yellow-600",
    iconBg: "bg-amber-500/20",
    status: "live",
    tier: "advisor",
    configKey: "businessBoardAdvisors",
  },
  {
    name: "Investment Board of Advisors",
    description:
      "Get investment wisdom from 9 legendary investors: Warren Buffett, Peter Lynch, Ray Dalio, John Bogle, Benjamin Graham, George Soros, Howard Marks, Carl Icahn, and Cathie Wood.",
    icon: TrendingUp,
    url: "https://investment-board-web.vercel.app",
    gradient: "from-emerald-500 to-green-600",
    iconBg: "bg-emerald-500/20",
    status: "live",
    tier: "advisor",
    configKey: "investmentBoardAdvisors",
  },
];

// Filter apps based on portal config
const apps = allApps.filter((app) => portalConfig.apps[app.configKey] !== false);

function AppCardComponent({ app }: { app: AppCard }) {
  const isLive = app.status === "live";

  return (
    <a
      href={isLive ? app.url : undefined}
      target={isLive ? "_blank" : undefined}
      rel={isLive ? "noopener noreferrer" : undefined}
      className={`card-hover group relative block rounded-2xl border border-white/10 bg-navy-900/80 backdrop-blur-sm overflow-hidden ${
        isLive ? "cursor-pointer" : "cursor-default opacity-70"
      }`}
    >
      {/* Gradient top bar */}
      <div className={`h-1.5 bg-gradient-to-r ${app.gradient}`} />

      <div className="p-6">
        {/* Icon + Status */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl ${app.iconBg} border border-white/10`}
          >
            <app.icon className="h-7 w-7 text-white" />
          </div>
          {app.status === "live" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          ) : app.status === "in-development" ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              In Development
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-300 border border-amber-500/30">
              Coming Soon
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
          {app.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-navy-300 leading-relaxed mb-4">{app.description}</p>

        {/* CTA */}
        {isLive ? (
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
            Open App
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            <ExternalLink className="h-3.5 w-3.5 ml-auto opacity-40" />
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm font-medium text-navy-400">
            <Zap className="h-4 w-4" />
            In Development
          </div>
        )}
      </div>
    </a>
  );
}

// ============================================
// LOGIN SCREEN COMPONENT
// ============================================
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate brief loading for UX
    setTimeout(() => {
      if (username === portalConfig.auth.username && password === portalConfig.auth.password) {
        localStorage.setItem(portalConfig.auth.storageKey, "true");
        onLogin();
      } else {
        setError("Invalid username or password");
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Login Card */}
        <div className="rounded-2xl border border-white/10 bg-navy-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Gradient top bar */}
          <div className={`h-1.5 bg-gradient-to-r ${portalConfig.theme.primaryGradient}`} />

          <div className="p-8">
            {/* Logo & Title */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Image
                  src={portalConfig.logoPath}
                  alt={portalConfig.logoAlt}
                  width={80}
                  height={77}
                  className="drop-shadow-[0_0_20px_rgba(59,111,219,0.3)]"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">
                {portalConfig.portalTitle}
              </h1>
              <p className="text-sm text-navy-400">
                Enter your team credentials to continue
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-navy-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-white/10 text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  placeholder="Enter username"
                  required
                  autoComplete="username"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-navy-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-white/10 text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  placeholder="Enter password"
                  required
                  autoComplete="current-password"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  <Lock className="h-4 w-4 flex-shrink-0" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4" />
                    Sign In
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-xs text-navy-500">
                {portalConfig.footerTagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MAIN PORTAL COMPONENT
// ============================================
export default function PortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Check auth status on mount
  useEffect(() => {
    const authStatus = localStorage.getItem(portalConfig.auth.storageKey);
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem(portalConfig.auth.storageKey);
    setIsAuthenticated(false);
  };

  // Show nothing while checking auth (prevents flash)
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const dailyOpsApps = apps.filter((a) => a.tier === "daily-ops");
  const flagshipApps = apps.filter((a) => a.tier === "flagship");
  const tier3Apps = apps.filter((a) => a.tier === "tier3");
  const advisorApps = apps.filter((a) => a.tier === "advisor");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-white/10">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] glow-pulse" />
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 text-center">
          {/* TSAI Badge */}
          {/* Logout Button - Top Right */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-navy-300 hover:bg-white/10 hover:text-white transition-all"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>

          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-5 py-2.5 mb-8 backdrop-blur-sm">
            <Image
              src={portalConfig.logoPath}
              alt={portalConfig.logoAlt}
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-sm text-navy-200 font-medium">
              {portalConfig.footerTagline}
            </span>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src={portalConfig.logoPath}
              alt={portalConfig.logoAlt}
              width={120}
              height={115}
              className="drop-shadow-[0_0_30px_rgba(59,111,219,0.3)]"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-white">{portalConfig.businessName}</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Power Portal
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-navy-300 leading-relaxed mb-2">
            {portalConfig.tagline}
          </p>
          <p className="text-sm text-navy-400">
            {portalConfig.subtitle}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Daily Operations Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Daily Operations</h2>
              <p className="text-sm text-navy-400">
                Your daily command center — manage every part of your business from one place
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyOpsApps.map((app) => (
              <AppCardComponent key={app.name} app={app} />
            ))}
          </div>
        </section>

        {/* AI Board of Advisors Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600">
              <BrainCircuit className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">AI Tools and Strategy</h2>
              <p className="text-sm text-navy-400">
                AI platforms and advisory boards from the world&apos;s greatest business and investment minds
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisorApps.map((app) => (
              <AppCardComponent key={app.name} app={app} />
            ))}
          </div>
        </section>

        {/* Flagship Tools Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Flagship Tools</h2>
              <p className="text-sm text-navy-400">
                Core business systems from the Master&apos;s Edge Program
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flagshipApps.map((app) => (
              <AppCardComponent key={app.name} app={app} />
            ))}
          </div>
        </section>

        {/* Tier 3 Tools Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Business Intelligence</h2>
              <p className="text-sm text-navy-400">
                Analytics, tracking, and competitive insights
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tier3Apps.map((app) => (
              <AppCardComponent key={app.name} app={app} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={portalConfig.logoPath}
                alt={portalConfig.logoAlt}
                width={36}
                height={34}
                className="rounded-md"
              />
              <div>
                <p className="text-sm font-semibold text-white">{portalConfig.footerCompany}</p>
                <p className="text-xs text-navy-400">
                  {portalConfig.footerTagline}
                </p>
              </div>
            </div>
            <p className="text-xs text-navy-500">
              &copy; {new Date().getFullYear()} {portalConfig.footerCompany}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
