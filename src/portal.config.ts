// ============================================
// PORTAL CONFIGURATION
// ============================================
// Edit this file to customize your portal.
// This is the ONLY file you need to change when cloning for a new business.
// ============================================

export const portalConfig = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  businessName: "Personal Mastery Martial Arts",
  portalTitle: "PMMA Power Portal",
  tagline: "Your all-in-one toolkit for building, growing, and scaling your martial arts school.",
  subtitle: "People-Centered AI Solutions for the Real World",

  // Logo paths
  // Main logo for headers and cards
  logoPath: "/pmma-logo.png",
  logoAlt: "PMMA Logo",
  // TSAI logo for "Powered by" badge
  tsaiLogoPath: "/tsai-logo.png",

  // Footer branding
  footerCompany: "Personal Mastery Martial Arts",
  footerTagline: "Powered by Total Success AI",

  // ============================================
  // AUTHENTICATION
  // ============================================
  auth: {
    username: "team",
    password: "masters2026",
    // localStorage key - MUST be unique per business to avoid conflicts
    // Use format: [business-abbreviation]_portal_auth
    storageKey: "pmma_portal_auth",
  },

  // ============================================
  // THEME COLORS (Tailwind classes)
  // ============================================
  // PMMA Brand Colors: Cranberry #9B1B30, Gold #D4AF37
  theme: {
    // Primary gradient for headers and buttons (Cranberry)
    primaryGradient: "from-[#9B1B30] via-[#B42040] to-[#D4AF37]",
    // Button gradient
    buttonGradient: "from-[#9B1B30] to-[#B42040]",
    buttonHover: "from-[#B42040] to-[#9B1B30]",
    // Accent color for highlights
    accentColor: "#D4AF37",
  },

  // ============================================
  // APP VISIBILITY
  // ============================================
  // Set to false to hide an app from this portal
  // Apps not in this list will be shown by default
  apps: {
    // Daily Operations
    leadFollowUp: true,
    calendar: true,
    dailyMarketing: true,
    dailyWebFinancials: true,
    socialMedia: true,
    bonusCalculator: true,
    managersLog: true,
    brandSanitation: true,

    // Flagship Tools
    brandBookCreator: true,
    pAndLCreation: true,
    delegationEngine: true,
    sopFactory: true,
    hiringOracle: true,
    difficultConversations: true,

    // Business Intelligence
    ceoDashboard: true,
    performanceReviewPro: true,
    competitorIntel: true,
    refferqReferral: true,

    // AI Tools & Strategy
    attendanceTracker: true,  // PMMA-specific - hide for other businesses
    aiTools: true,
    businessBoardAdvisors: true,
    investmentBoardAdvisors: true,
  },

  // ============================================
  // CUSTOM APPS (Add business-specific apps here)
  // ============================================
  customApps: [
    // Website & Community Section
    {
      name: "PMMA Website",
      description: "View and manage your public-facing website. See what prospective students see when they visit personalmasterymartialarts.com.",
      iconName: "Globe",
      url: "https://pmma-website-2026-master.vercel.app",
      gradient: "from-[#9B1B30] to-[#B42040]",
      iconBg: "bg-[#9B1B30]/20",
      status: "live",
      tier: "website",
    },
    {
      name: "Power Hub CMS",
      description: "Edit website content, manage pages, upload media, configure scripts, and access AI content generation tools.",
      iconName: "Settings",
      url: "https://pmma-website-2026-master.vercel.app/power-hub",
      gradient: "from-[#D4AF37] to-[#B8962E]",
      iconBg: "bg-[#D4AF37]/20",
      status: "live",
      tier: "website",
    },
    {
      name: "Student Portal",
      description: "Access the student-only portal for belt testing registration, apparel orders, equipment orders, and training resources.",
      iconName: "GraduationCap",
      url: "https://pmma-website-2026-master.vercel.app/student-portal",
      gradient: "from-purple-600 to-indigo-600",
      iconBg: "bg-purple-500/20",
      status: "live",
      tier: "website",
    },
    {
      name: "GHL Community",
      description: "Access your Go High Level member community. Training videos, curriculum guides, and student forum.",
      iconName: "Users",
      url: "https://members.personalmasterymartialarts.com/communities/groups/black-belts/home",
      gradient: "from-emerald-600 to-teal-600",
      iconBg: "bg-emerald-500/20",
      status: "live",
      tier: "website",
    },
  ],

  // ============================================
  // SECTION VISIBILITY
  // ============================================
  // Set to false to hide entire sections
  sections: {
    websiteCommunity: true,  // New section for PMMA digital hub
    dailyOps: true,
    aiTools: true,
    flagship: true,
    businessIntel: true,
  },
};

// Type exports for TypeScript support
export type PortalConfig = typeof portalConfig;
