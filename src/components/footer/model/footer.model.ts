type CtaType = {
  title: string;
  ctaContent: {
    href: string;
    Content: string;
  }[];
};

export const ctaData: CtaType[] = [
  {
    title: "Tools",
    ctaContent: [
      { href: "/analytics", Content: "Analytics" },
      { href: "/seo-tools", Content: "SEO Tools" },
      { href: "/projects", Content: "Projects" },
      { href: "/affiliates", Content: "Affiliate Program" },
    ],
  },
  {
    title: "Help",
    ctaContent: [
      { href: "/knowledge-base", Content: "Knowledge Base" },
      { href: "/api", Content: "API" },
      { href: "/support", Content: "Support" },
    ],
  },
];
