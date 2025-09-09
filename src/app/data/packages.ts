export type PackageType = {
  id: string;        
  title: string;
  tagline: string;
  details: string[];
  price: string;
  timeline: string;
};

export const PACKAGES = {
  subheadline:
    "Flexible plans designed to launch and grow your digital presence.",
  items: [
    {
      id: "starter",
      title: "Starter Pack",
      tagline: "Your launchpad into the digital world.",
      details: [
        "Landing Page or Portfolio Website",
        "Responsive design",
        "Basic SEO & Google Analytics",
        "1-month technical support",
      ],
      price: "$200",
      timeline: "6 weeks",
    },
    {
      id: "business",
      title: "Business Pack",
      tagline: "For companies ready to expand their online presence.",
      details: [
        "Multi-page website with CMS",
        "SEO optimization",
        "Integrations with third-party services",
        "3 months technical support",
      ],
      price: "Custom Quote",
      timeline: "Based on scope",
    },
    {
      id: "custom",
      title: "Custom Pack",
      tagline: "Fully tailored software solutions for unique goals.",
      details: [
        "Tailored apps or platforms",
        "Advanced integrations",
        "Long-term support & maintenance",
      ],
      price: "Custom Quote",
      timeline: "Based on scope",
    },
  ] as PackageType[],
};
