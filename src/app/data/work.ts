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
    category: "Automotive Marketplace Platform",
    categoryColor: "text-red-500",
    description:
      "Msar is a digital marketplace where individuals and dealerships can list vehicles for sale or rent. It streamlines inventory management and makes it easy for buyers to browse, compare, and connect with sellers.",
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
    title: "Catalyst Storefront",
    category: "E-commerce Solution",
    categoryColor: "text-red-500",
    description:
      "Catalyst Storefront is a ready-to-launch e-commerce platform for retailers and brands. It includes inventory management, secure payments, and a mobile-first design to grow your online business.",
    image: "/work5.png",
  },
  {
    title: "Talab Apps",
    category: "Food & Delivery Platform",
    categoryColor: "text-red-500",
    description:
      "Talab connects restaurants, drivers, and customers in one seamless platform. Restaurants can publish menus, manage orders, and drivers handle deliveries or ride trips with real-time tracking.",
    image: "/work4.png",
  },
  {
    title: "Doctorna",
    category: "HealthTech / Clinic Management",
    categoryColor: "text-red-500",
    description:
      "Doctorna helps clinics and healthcare providers manage patients, appointments, and billing in one place. It includes patient records, scheduling tools, and electronic medical record (EMR) features.",
    image: "/work3.png",
  },
];
