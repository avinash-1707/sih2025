"use client";

import Link from "next/link";
import * as React from "react";

// Import the new components and icons
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left Side: Now only contains the brand title */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          CIVIHELP
        </Link>

        {/* Right Side: Now contains navigation links and all icons */}
        <div className="flex items-center gap-6">
          <NavigationMenu>
            {/* === START: UPDATED NAVIGATION LINKS === */}
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/Dashboard">Dashboard</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  {/* Corrected the link to point to /brokers */}
                  <Link href="/brokers">Brokers</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/issues">Issues</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/reports">Reports</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/analytics">Analytics</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            {/* === END: UPDATED NAVIGATION LINKS === */}
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="h-9 w-full rounded-md md:w-[200px] lg:w-[300px]"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}

