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
  NotebookPen,
  ShieldCheck,
} from "lucide-react";

interface AppCard {
  name: string;
  description: string;
  icon: React.ElementType;
  url: string;
  gradient: string;
  iconBg: string;
  status: "live" | "coming-soon";
  tier: "flagship" | "daily-ops" | "tier3" | "advisor";
}

const apps: AppCard[] = [
  // Daily Operations Apps
  {
    name: "Lead Follow Up",
    description:
      "Never miss a lead again. Automated follow-up sequences, call reminders, and pipeline tracking to turn prospects into clients.",
    icon: UserCheck,
    url: "#",
    gradient: "from-cyan-600 to-blue-600",
    iconBg: "bg-cyan-500/20",
    status: "coming-soon",
    tier: "daily-ops",
  },
  {
    name: "Calendar / Appointments",
    description:
      "Manage your schedule, appointments, and availability. Auto-sync with your booking system and never double-book again.",
    icon: CalendarDays,
    url: "#",
    gradient: "from-blue-600 to-indigo-600",
    iconBg: "bg-blue-500/20",
    status: "coming-soon",
    tier: "daily-ops",
  },
  {
    name: "Daily Marketing",
    description:
      "Your daily marketing checklist — content calendar, campaign tracking, ad spend monitoring, and engagement analytics in one view.",
    icon: Megaphone,
    url: "#",
    gradient: "from-pink-600 to-rose-600",
    iconBg: "bg-pink-500/20",
    status: "coming-soon",
    tier: "daily-ops",
  },
  {
    name: "Daily Web / Financials",
    description:
      "Track website performance, revenue, expenses, and financial KPIs every day. Spot trends and act fast on opportunities.",
    icon: Globe,
    url: "#",
    gradient: "from-emerald-600 to-green-600",
    iconBg: "bg-emerald-500/20",
    status: "coming-soon",
    tier: "daily-ops",
  },
  {
    name: "Social Media",
    description:
      "Plan, schedule, and track social media across all platforms. Monitor engagement, brand mentions, and competitor activity daily.",
    icon: Share2,
    url: "#",
    gradient: "from-violet-600 to-purple-600",
    iconBg: "bg-violet-500/20",
    status: "coming-soon",
    tier: "daily-ops",
  },
  {
    name: "Daily Operations",
    description:
      "Your morning command center — team check-ins, task assignments, priority setting, and daily standup summaries all in one place.",
    icon: ListChecks,
    url: "#",
    gradient: "from-orange-600 to-amber-600",
    iconBg: "bg-orange-500/20",
    status: "coming-soon",
    tier: "daily-ops",
  },
  {
    name: "Manager's Log",
    description:
      "Document daily decisions, employee interactions, incidents, and wins. Searchable history that protects you and builds your team.",
    icon: NotebookPen,
    url: "#",
    gradient: "from-teal-600 to-cyan-600",
    iconBg: "bg-teal-500/20",
    status: "coming-soon",
    tier: "daily-ops",
  },
  {
    name: "Brand / Sanitation",
    description:
      "Daily brand consistency checks — ensure signage, messaging, cleanliness standards, and customer-facing materials meet your standards.",
    icon: ShieldCheck,
    url: "#",
    gradient: "from-indigo-600 to-blue-600",
    iconBg: "bg-indigo-500/20",
    status: "coming-soon",
    tier: "daily-ops",
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
  },
  {
    name: "SOP Factory",
    description:
      "Create standardized operating procedures that maintain your brand voice. The central hub connecting all your business systems.",
    icon: FileText,
    url: "#",
    gradient: "from-sky-600 to-cyan-600",
    iconBg: "bg-sky-500/20",
    status: "coming-soon",
    tier: "flagship",
  },
  {
    name: "Hiring Oracle",
    description:
      "AI-powered hiring system using your brand values and financial data to find, evaluate, and onboard the right team members.",
    icon: Users,
    url: "#",
    gradient: "from-rose-600 to-pink-600",
    iconBg: "bg-rose-500/20",
    status: "coming-soon",
    tier: "flagship",
  },
  {
    name: "Difficult Conversations Coach",
    description:
      "Navigate tough workplace conversations with confidence. Roleplay scenarios, scripts, and frameworks aligned with your values.",
    icon: MessageSquare,
    url: "#",
    gradient: "from-purple-600 to-fuchsia-600",
    iconBg: "bg-purple-500/20",
    status: "coming-soon",
    tier: "flagship",
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
  },
  // AI Board of Advisors
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
  },
];

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
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
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

export default function PortalPage() {
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
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-5 py-2.5 mb-8 backdrop-blur-sm">
            <Image
              src="/tsai-logo.png"
              alt="Total Success AI"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-sm text-navy-200 font-medium">
              Powered by Total Success AI
            </span>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/tsai-logo.png"
              alt="Total Success AI Logo"
              width={120}
              height={115}
              className="drop-shadow-[0_0_30px_rgba(59,111,219,0.3)]"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            <span className="text-white">Master&apos;s Edge</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Power Portal
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-navy-300 leading-relaxed mb-2">
            Your all-in-one toolkit for building, growing, and scaling your business.
            Click any tool below to get started.
          </p>
          <p className="text-sm text-navy-400">
            People-Centered AI Solutions for the Real World
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

        {/* AI Board of Advisors Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600">
              <BrainCircuit className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">AI Board of Advisors</h2>
              <p className="text-sm text-navy-400">
                Get advice from AI versions of the world&apos;s greatest business and investment minds
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisorApps.map((app) => (
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
                src="/tsai-logo.png"
                alt="Total Success AI"
                width={36}
                height={34}
                className="rounded-md"
              />
              <div>
                <p className="text-sm font-semibold text-white">Total Success AI</p>
                <p className="text-xs text-navy-400">
                  The Master&apos;s Edge Business Program
                </p>
              </div>
            </div>
            <p className="text-xs text-navy-500">
              &copy; {new Date().getFullYear()} Total Success AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
