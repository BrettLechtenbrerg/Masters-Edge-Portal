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

  // Logo path (place your logo in /public/ folder)
  // Use "/tsai-logo.png" for TSAI branding or add your own
  logoPath: "/tsai-logo.png",
  logoAlt: "PMMA Logo",

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
  theme: {
    // Primary gradient for headers and buttons
    primaryGradient: "from-blue-500 via-indigo-500 to-purple-500",
    // Button gradient
    buttonGradient: "from-blue-600 to-indigo-600",
    buttonHover: "from-blue-500 to-indigo-500",
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
    // Example:
    // {
    //   name: "Custom App Name",
    //   description: "Description of what the app does.",
    //   iconName: "Wrench",  // Lucide icon name
    //   url: "https://your-app.vercel.app",
    //   gradient: "from-purple-600 to-pink-600",
    //   iconBg: "bg-purple-500/20",
    //   status: "live",  // "live" | "coming-soon" | "in-development"
    //   tier: "daily-ops",  // "daily-ops" | "flagship" | "tier3" | "advisor"
    // },
  ],

  // ============================================
  // SECTION VISIBILITY
  // ============================================
  // Set to false to hide entire sections
  sections: {
    dailyOps: true,
    aiTools: true,
    flagship: true,
    businessIntel: true,
  },
};

// Type exports for TypeScript support
export type PortalConfig = typeof portalConfig;
