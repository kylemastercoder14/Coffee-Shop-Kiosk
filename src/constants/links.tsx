import { IconCoffee, IconFileAnalytics, IconHome, IconUser, IconWallet } from "@tabler/icons-react";


export const STATICLINKS = [
  {
    title: "Home",
    icon: <IconHome className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
    href: "/dashboard",
  },
  {
    title: "Menu",
    icon: <IconCoffee className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
    href: "/menu",
  },
  {
    title: "Orders",
    icon: <IconWallet className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
    href: "/orders",
  },
  {
    title: "Reports",
    icon: <IconFileAnalytics className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
    href: "/reports",
  },
  {
    title: "Account",
    icon: <IconUser className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
    href: "/account",
  },
];
