"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

// export function MainNav with the props className and ...props
// This is equals to React.HTMLAttributes<HTMLElement>

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  // We also want to add a pathName variable that uses the usePathName function from next/navigation.
  // We want to add a params variable that uses the useParams from next/navigation
  const pathName = usePathname();
  const params = useParams();

  // Next we want to iterate over the routes we have. We first need to add the routes. We can do this as a new variable and empty array.
  // Now within the routes we want to pass in an object, we can use the href attribute for this. We can also pass in a label for the route and the active attribute.
  const routes = [
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathName === `/${params.storeId}/settings`,
    },
  ];

  // And we want to return a nav element with a className of cn, this is imported by ShadCN and in brackets we want to pass in some default styling, className.
  // In the jsx we want to map over the routes array and we return a link component from next.js.
  // Within that link we can render the label from the routes array.
  // The link needs some attributes like key, href and className styling. We might want to style the links when they are active too.
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-4", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
