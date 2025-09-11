export interface WorkItem {
  title: string;
  category: string;
  categoryColor?: string;
  description: string;
  image: string;
}

export const workItems: WorkItem[] = [
  {
    title: "Msar",
    category: "Cars",
    categoryColor: "text-red-500",
    description:
      "preview your ad, hit Publish, and watch it go live in seconds.You can even save drafts or boost visibility to reach more buyers.",
    image: "/work1.png",
  },
  {
    title: "Catalyst Menu",
    category: "Restaurant Solution",
    categoryColor: "text-red-500",
    description:
      "An interactive menu and ordering system for restaurants and cafés. Features instant updates, QR-code access, and online ordering options.",
    image: "/work2.png",
  },
   {
    title: "Doctorna",
    category: "HealthTech/Clinic Management",
    categoryColor: "text-red-500",
    description:
      "preview your ad, hit Publish, and watch it go live in seconds.You can even save drafts or boost visibility to reach more buyers.",
    image: "/work3.png",
  },
  {
    title: "Talab Apps",
    category: "transportation",
    categoryColor: "text-red-500",
    description:
      "preview your ad, hit Publish, and watch it go live in seconds.You can even save drafts or boost visibility to reach more buyers.",
    image: "/work4.png",
  },
 {
    title: "Catalyst Storefront",
    category: "E-commerce Solution",
    categoryColor: "text-red-500",
    description:
      "A ready-to-launch e-commerce platform for retailers and brands. Includes inventory management, secure payments, and mobile-first design.",
    image: "/work5.png",
  },
];
